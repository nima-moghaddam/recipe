"use client";
import { IDigest } from "@/types/Recipe-Interface";
import { PieChart } from "react-minimal-pie-chart";

const data = [
  { title: "One", value: 10, color: "#F79F1A" },
  { title: "Two", value: 15, color: "#046E1B" },
  { title: "Three", value: 40, color: "#FE5E54" },
];

interface IProps {
  digests: IDigest;
}

const DigestChart = ({ digests }: IProps) => {
  const handleClick = (event: any, index: number) => {
    const clickedSegment = data[index];
    console.log("Clicked segment:", clickedSegment);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full">
        <PieChart
          data={data}
          label={({ dataEntry }) => dataEntry.title}
          viewBoxSize={[100, 100]}
          labelPosition={55}
          radius={42}
          className="cursor-pointer text-[0.3rem] font-bold"
          animate
          onClick={handleClick}
        />
      </div>
      <div className="w-full">jeee</div>
    </div>
  );
};

export default DigestChart;
