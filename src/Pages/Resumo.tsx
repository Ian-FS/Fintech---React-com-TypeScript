import React from "react";
import { useData } from "../Context/DataContext";

export const Resumo = () => {
  const { data } = useData();
  return (
    <ul>
      {data?.map((venda) => (
        <li key={venda.id}>{venda.nome}</li>
      ))}
    </ul>
  );
};
