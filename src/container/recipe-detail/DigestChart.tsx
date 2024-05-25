"use client";
import SvgIcon from "@/components/SvgIcon";
import { IDigest, ISubDigest } from "@/types/Recipe-Interface";
import { ReactNode, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const colors = ["#F79F1A", "#046E1B", "#FE5E54", "#C738BD", "#FFFF80"];
const tableHeader = ["Name", "Daily Usage", "Total Usage", "RDI"];

interface IProps {
  digests: IDigest[];
}

interface ITableData extends IDigest {
  tableRowData: (string | ReactNode)[];
}

const DigestChart = ({ digests }: IProps) => {
  const mockDigest = [...digests];
  const primaryDigest = mockDigest.splice(0, 5);

  const chartData = primaryDigest.map((item, index) => {
    let subDigest: ISubDigest[] = [];
    if (item.sub) {
      subDigest = item.sub.map((i) => i);
    }
    const groupedDataList = [{ ...item }, ...subDigest];

    const tableData = groupedDataList.map((i) => {
      const name = i.label;
      const dailyUsage = `${Math.round(i.daily)}${i.unit}`;
      const totalUsage = `${Math.round(i.total)}${i.unit}`;
      const hasRDI = i.hasRDI ? (
        <SvgIcon name="check" color="secondary" />
      ) : (
        <SvgIcon name="close" color="danger" />
      );

      return {
        ...i,
        tableRowData: [name, dailyUsage, totalUsage, hasRDI],
      };
    });

    return {
      title: item.label,
      value: Math.round(item.daily),
      color: colors[index],
      data: tableData,
    };
  });

  const [selectedDigest, setSelectedDigest] = useState<ITableData[]>(
    chartData[0].data,
  );
  const [hovered, setHovered] = useState<number | null>(null);

  console.log(selectedDigest);

  const handleClick = (event: any, index: number) => {
    const currentDigest = chartData[index];

    setSelectedDigest(currentDigest.data);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative mb-[100px] h-[300px] w-full lg:mb-0">
        <h3 className="font-bold">Daily Digest Chart</h3>
        <div className="mb-5 text-xs">
          For more info on each digest click on chart segments.
        </div>
        <PieChart
          data={chartData}
          label={({ dataEntry }) => dataEntry.title}
          viewBoxSize={[100, 100]}
          labelPosition={70}
          radius={50}
          className="h-full w-full cursor-pointer text-[0.2rem] font-bold"
          animate
          onClick={handleClick}
          segmentsStyle={(index) => ({
            transition: "opacity 0.2s",
            opacity: hovered === index ? 0.3 : 1,
          })}
          onMouseOver={(_, index) => setHovered(index)}
          onMouseOut={() => setHovered(null)}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <table className="mb-5 min-w-[400px] table-auto border-collapse border border-orange-400">
          <thead>
            <tr>
              {tableHeader.map((item) => (
                <th
                  key={item}
                  className="border border-orange-300 bg-orange-100 px-10 py-2 font-bold text-primary"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedDigest.map((item, rowIndex) =>
              rowIndex === 1 ? (
                <tr className="bg-orange-100 font-bold text-primary">
                  <td
                    className="py-2 text-center"
                    colSpan={item.tableRowData.length}
                  >
                    Sub Digests
                  </td>
                </tr>
              ) : (
                <tr key={item.tag}>
                  {item.tableRowData.map((i, index) => (
                    <td
                      className={`border border-orange-300 px-5 py-5 text-center ${index === 1 || index === 2 ? "font-bold" : ""}`}
                      key={index}
                    >
                      {i}
                    </td>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DigestChart;
