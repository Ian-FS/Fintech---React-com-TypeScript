import React, { Children, useContext, useState } from "react";
import useFetch from "../Hooks/useFetch";

type VendasType = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "falha" | "processando";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
};

type contextType = {
  data: VendasType[] | null;
  error?: string | null;
  loading?: boolean;
  inicio: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  final: string;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<contextType | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

function formatDate(date: Date) {
  const yyyyInicio = date.getFullYear();
  const mmInicio = String(date.getMonth() + 1).padStart(2, "0");
  const ddInicio = String(date.getDate()).padStart(2, "0");

  return `${yyyyInicio}-${mmInicio}-${ddInicio}`;
}

export function getDateAnyDaysAgo(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  const dateFormated = formatDate(date);
  return dateFormated;
}

export function getDateAnyMonthsAgo(monthsAgo: number, day: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + monthsAgo);
  date.setDate(day);

  const dateFormated = formatDate(date);
  return dateFormated;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDateAnyDaysAgo(60));
  const [final, setFinal] = useState(getDateAnyDaysAgo(0));

  const { data, error, loading } = useFetch<VendasType[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, error, loading, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
