import { useEffect, useState } from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>(pathname);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setTitle("Resumo");
        document.title = "Fintech | Resumo";
        break;
      case "/vendas":
        setTitle("Vendas");
        document.title = "Fintech | Vendas";
        break;

      default:
        break;
    }
  }, [pathname]);

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
