import { useState } from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";

export const Header = () => {
  const [title, setTitle] = useState("Resumo");

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};
