import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Resumo } from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <body>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Resumo />
          </main>
        </div>
      </body>
    </DataContextProvider>
  );
}

export default App;
