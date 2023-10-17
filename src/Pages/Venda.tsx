import { VendasType } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Loading from "../Components/Loading";

type VendaType = Omit<VendasType, "data">;

const Venda = () => {
  const { id } = useParams();
  console.log(id);

  const { data, loading } = useFetch<VendasType>(
    `https://data.origamid.dev/vendas/${id}`
  );
  if (loading === true) return <Loading />;
  if (data === null) return null;

  return (
    <div>
      <div className="box mb">
        <div>
          <span style={{ fontWeight: "bold" }}>ID: </span>
          {data?.id}
        </div>
      </div>
      <div className="box mb">
        <div>
          <span style={{ fontWeight: "bold" }}>Nome: </span>
          {data?.nome}
        </div>
      </div>
      <div className="box mb">
        <div>
          <span style={{ fontWeight: "bold" }}>Preço: </span>
          {data?.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
      <div className="box mb">
        <div>
          <span style={{ fontWeight: "bold" }}>Pagamento: </span>
          {data?.pagamento}
        </div>
      </div>
      <div className="box mb">
        <div>
          <span style={{ fontWeight: "bold" }}>Status: </span>
          {data?.status}
        </div>
      </div>
    </div>
  );
};

export default Venda;
