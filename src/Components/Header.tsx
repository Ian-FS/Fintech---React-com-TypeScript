import React from "react";
import { useData } from "../Context/DataContext";

export const Header = () => {
  const { data } = useData();
  return (
    <div>
      {data?.map((venda) => (
        <p key={venda.id}>{venda.nome}</p>
      ))}
    </div>
  );
};
