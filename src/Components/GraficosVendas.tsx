import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { VendasType, useData } from "../Context/DataContext";

type VendaDiaType = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: VendasType[]): VendaDiaType[] {
  const dias = data.reduce((acc: { [key: string]: VendaDiaType }, venda) => {
    const dia = venda.data.substring(5, 10);
    console.log(dia);
    if (acc[dia]) {
      acc[dia]["pago"] += 1;
      acc[dia]["processando"] += 1;
      acc[dia]["falha"] += 1;
    } else {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    console.log(acc);
    return acc;
  }, {});
  console.log([dias]);
  return [dias];
}

const GraficoVendas = ({ data }: { data: VendasType[] }) => {
  const dataTransform = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        width={400}
        height={400}
        data={dataTransform}
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
