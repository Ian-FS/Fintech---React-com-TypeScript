import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import { VendasType, useData } from "../Context/DataContext";

const GraficoVendas = ({ data }: { data: VendasType[] }) => {
  console.log(data[0].data.substring(0, 10));
  return (
    <LineChart
      width={400}
      height={400}
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="data" />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="pago" stroke="#ff7300" />
      <Line type="monotone" dataKey="processando" stroke="#387908" />
      <Line type="monotone" dataKey="falha" stroke="#387908" />
    </LineChart>
  );
};

export default GraficoVendas;
