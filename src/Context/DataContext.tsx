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

type DataFetch = {
  data: VendasType[] | null;
  error?: string | null;
  loading?: boolean;
};

const DataContext = React.createContext<DataFetch | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, error, loading } = useFetch<VendasType[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, error, loading }}>
      {children}
    </DataContext.Provider>
  );
};
