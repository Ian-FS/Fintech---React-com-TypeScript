import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { VendasType, useData } from "../Context/DataContext";
import ItemVenda from "./ItemVenda";

type VendaDiaType = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: VendasType[]): VendaDiaType[] {
  const dias = data.reduce((acc: { [key: string]: VendaDiaType }, venda) => {
    const dia = venda.data.substring(5, 10);
    console.log(acc[dia]);
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][venda.status] += 1;

    return acc;
  }, {});
  console.log(Object.values(dias));
  return Object.values(dias);
}

const GraficoVendas = ({ data }: { data: VendasType[] }) => {
  const dataTransform = transformData(data);
  console.log(dataTransform);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dataTransform}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#33a510" strokeWidth={3} />

        <Line
          type="monotone"
          dataKey="processando"
          stroke="#cec435"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#cf3333"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
