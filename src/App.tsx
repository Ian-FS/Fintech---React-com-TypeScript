import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Resumo } from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Resumo />
            <Vendas />
          </main>
        </div>
      </div>
    </DataContextProvider>
  );
}

export default App;
