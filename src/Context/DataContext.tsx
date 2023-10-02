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

function getAnyDaysAgo(daysAgo: number) {
  const dateInicio = new Date();
  dateInicio.setDate(dateInicio.getDate() - daysAgo);

  const yyyyInicio = dateInicio.getFullYear();
  const mmInicio = String(dateInicio.getMonth() + 1).padStart(2, "0");
  const ddInicio = String(dateInicio.getDate()).padStart(2, "0");

  return `${yyyyInicio}-${mmInicio}-${ddInicio}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = useState(getAnyDaysAgo(60));
  const [final, setFinal] = useState(getAnyDaysAgo(0));

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
