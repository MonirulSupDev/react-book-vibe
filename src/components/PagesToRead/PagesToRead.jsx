import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Label,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { useLoaderData } from "react-router";
import { getReadBooksFromLocalStorage } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// #endregion
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const PagesToRead = () => {
  const allReadBooks = useLoaderData();
  const storedReadBookIds = getReadBooksFromLocalStorage().map(Number);
  const data = allReadBooks.filter((book) =>
    storedReadBookIds.includes(book.bookId),
  );
  return (
    <div>
      <Helmet>
        <title>BookVibe | Pages to Read</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-center">Pages to Read</h2>
      <div className="flex justify-center max-h-[70dvh] px-6">
        <BarChart
          style={{
            width: "100%",
            maxWidth: "full",
            maxHeight: "auto",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="bookName" />
          <YAxis width={60} />
          <Bar dataKey="totalPages" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
          <RechartsDevtools />
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
