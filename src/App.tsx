import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Resumo } from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <div>
      <DataContextProvider>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </DataContextProvider>
    </div>
  );
}

export default App;
