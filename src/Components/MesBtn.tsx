import React from "react";

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  console.log(date.getMonth());
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

const MesBtn = ({ n }: { n: number }) => {
  nomeMes(n);
  return <div>{nomeMes(n)}</div>;
};

export default MesBtn;
