import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { VendasType, useData } from "../Context/DataContext";

const GraficoVendas = ({ data }: { data: VendasType[] }) => {
  const { inicio, final } = useData();
  function trataDados() {
    data.filter((venda) => venda.data >= inicio && venda.data <= final);
    return data;
  }

  console.log(trataDados()[0]);
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        width={400}
        height={400}
        data={trataDados()}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="data" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="status" stroke="#ff7300" />
        <Line type="monotone" dataKey="pagamento" stroke="#387908" />
        <Line type="monotone" dataKey="parcelas" stroke="#100879" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
