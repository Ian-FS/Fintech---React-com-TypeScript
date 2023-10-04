import React from "react";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

const MesBtn = ({ n }: { n: number }) => {
  nomeMes(n);
  return <button style={style}>{nomeMes(n)}</button>;
};

export default MesBtn;
