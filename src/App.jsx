import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

import "./App.css";
import data from "./lib/graficos.json";

const renderizarYAxisTick = (value) => {
  let tickYAxis;

  switch (value) {
    case 0:
      tickYAxis = "pipoca";
      break;
    case 1:
      tickYAxis = "pao com queijo";
      break;
    case 2:
      tickYAxis = "pao de batata";
      break;
    case 3:
      tickYAxis = "pao de queijo";
      break;
    case 4:
      tickYAxis = "coca cola";
      break;
    default:
      tickYAxis = "";
  }

  return tickYAxis;
};

const renderizarLegenda = (value) => {
  return <span style={{ color: "#202024" }}>{value}</span>;
};

const renderizarTooltip = (props) => {
  if (props && props.payload[0]) {
    return (
      <div
        style={{
          padding: "16px",
          background: "#e1e1e6",
          color: "#202024",
          fontSize: "12px",
          borderRadius: "5px",
          border: "1px solid #202024",
        }}
      >
        <div>{`${props.payload[0].payload.name} ${props.label}`}</div>
      </div>
    );
  }
};

export function App() {
  return (
    <>
      <div className="graficos">
        <h1 style={{ marginBottom: 30 }}>Grafico - 01</h1>
        <ResponsiveContainer width={"100%"} height={250}>
          <AreaChart data={data.grafico01}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#202024" }}
              tickMargin={10}
            />
            <YAxis
              domain={[0, 4]}
              tick={{ fontSize: 10, fill: "#202024" }}
              tickFormatter={renderizarYAxisTick}
              tickMargin={10}
            />
            <Area
              type="linear"
              name="Avaliação Professor"
              dataKey="AvProfessor"
              fill="#bde0fe"
              fillOpacity={0.8}
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ fill: "#8884d8", fillOpacity: 1 }}
              activeDot={{ r: 2 }}
            />
            <Area
              type="linear"
              name="Avaliação Aluno/Grupo"
              dataKey="AvAlunoGrupo"
              fill="#e5989b"
              fillOpacity={0.8}
              stroke="#5f0f40"
              strokeWidth={2}
              dot={{ fill: "#5f0f40", fillOpacity: 1 }}
              activeDot={{ r: 2 }}
            />
            <Tooltip content={renderizarTooltip} />
            <Legend
              layout="vertical"
              iconSize="10"
              wrapperStyle={{ right: 10, fontSize: 10 }}
              formatter={renderizarLegenda}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="graficos">
        <h1 style={{ marginBottom: 30 }}>Grafico - 02</h1>
        <ResponsiveContainer width={"100%"} height={250}>
          <BarChart data={data.grafico02} barSize={30}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#202024" }}
              tickMargin={10}
            />
            <YAxis
              domain={[0, 4]}
              tick={{ fontSize: 10, fill: "#202024" }}
              tickFormatter={renderizarYAxisTick}
              tickMargin={10}
            />
            <Tooltip content={renderizarTooltip} cursor={{ fill: "#202024" }} />
            <Bar
              dataKey="AvProfessor"
              fill="#5f0f40"
              radius={10}
              background={{ fill: "grey", radius: 10 }}
            />
            <Bar
              dataKey="AvAlunoGrupo"
              fill="#5f0f40"
              radius={10}
              background={{ fill: "grey", radius: 10 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="graficos">
        <h1>Grafico - 03</h1>

        <p style={{ marginLeft: 300 }}>COCA-COLA</p>

        <ResponsiveContainer width={"100%"} height={49}>
          <BarChart
            layout="vertical"
            width={600}
            height={50}
            data={data.grafico03}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis hide type="number" domain={[0, 100]} />
            <YAxis hide dataKey="date" type="category" />
            <Tooltip />
            <Bar
              dataKey="cocacolalite"
              fill="#5f0f40"
              background={{ fill: "grey", radius: 10 }}
              radius={[10, 0, 0, 10]}
            />
          </BarChart>
        </ResponsiveContainer>

        <p style={{ marginLeft: 300, marginBottom: 30 }}>COCA-COLA LITEEE</p>

        <ResponsiveContainer width={"100%"} height={250}>
          <AreaChart data={data.grafico01}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#202024" }}
              tickMargin={10}
            />
            <YAxis
              domain={[0, 4]}
              tick={{ fontSize: 10, fill: "#202024" }}
              tickFormatter={renderizarYAxisTick}
              tickMargin={10}
            />
            <Area
              type="linear"
              name="Avaliação Coca-Cola Lite"
              dataKey="AvAlunoGrupo"
              fill="#e5989b"
              fillOpacity={0.8}
              stroke="#5f0f40"
              strokeWidth={2}
              dot={{ fill: "#5f0f40", fillOpacity: 1 }}
              activeDot={{ r: 2 }}
            />
            <Tooltip content={renderizarTooltip} />
            <Legend
              layout="vertical"
              iconSize="10"
              wrapperStyle={{ right: 10, fontSize: 10 }}
              formatter={renderizarLegenda}
            />
          </AreaChart>
        </ResponsiveContainer>

        <ResponsiveContainer width={"100%"} height={60}>
          <BarChart
            layout="vertical"
            width={600}
            height={50}
            data={data.grafico03}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis hide type="number" domain={[0, 100]} />
            <YAxis hide dataKey="date" type="category" />
            <Tooltip />
            <Bar
              dataKey="cocacolalite"
              stackId="a"
              fill="#5f0f40"
              radius={[10, 0, 0, 10]}
            />
            <Bar dataKey="cocacola" stackId="a" fill="#9a031e" />
            <Bar dataKey="pepsi" stackId="a" fill="#fb8b24" />
            <Bar dataKey="agua" stackId="a" fill="#e36414" />
            <Bar dataKey="fanta" stackId="a" fill="#0f4c5c" radius={[0, 10, 10, 0]} />
            <Legend
              iconType="circle"
              iconSize="10"
              wrapperStyle={{ top: 60,right: 10, fontSize: 10 }}
              formatter={renderizarLegenda}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
