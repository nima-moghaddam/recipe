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
    <>
      <h3 className="font-bold">Daily Digest Chart</h3>
      <div className="mb-5 text-xs">
        For more info on each digest click on chart segments.
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="relative mb-[50px] h-[300px] w-full md:mb-0">
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
        <div className="flex min-h-[200px] w-full flex-col items-center">
          <table className="mb-5 w-[300px] table-auto border-collapse border border-orange-400 lg:w-[400px]">
            <thead>
              <tr>
                {tableHeader.map((item) => (
                  <th
                    key={item}
                    className="border border-orange-300 bg-orange-100 px-3 py-2 font-bold text-primary lg:px-10"
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
                        className={`border border-orange-300 px-3 py-5 text-center lg:px-5 ${index === 1 || index === 2 ? "font-bold" : ""}`}
                        key={index}
                      >
                        <div className="flex w-full items-center justify-center">
                          {i}
                        </div>
                      </td>
                    ))}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DigestChart;
