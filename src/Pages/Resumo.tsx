import React from "react";
import { useData } from "../Context/DataContext";

export const Resumo = () => {
  const { data } = useData();
  console.log(data);
  return;
};
