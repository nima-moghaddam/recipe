import Badge from "@/components/Badge";
import React from "react";
import TabDivider from "./components/TabDivider";
import { IRecipe } from "@/types/Recipe-Interface";

interface IProps {
  recipe: IRecipe;
}

const HealthLabels = ({ recipe }: IProps) => {
  const {
    healthLabels,
    yield: serving,
    totalTime,
    totalCO2Emissions,
    calories,
  } = recipe;

  return (
    <div className="flex flex-col">
      <h2 className="mb-3 font-bold">Health Labels</h2>
      <div className="mb-7 flex flex-wrap border-b border-orange-100 pb-5">
        {healthLabels.map((item) => (
          <Badge key={item} name={item} classes="mr-2 mb-2" />
        ))}
      </div>

      <div className="flex items-center justify-center">
        <TabDivider title="Calorie" value={Math.round(calories) + " Kcal"} />
        <TabDivider title="Serving Time" value={Math.round(serving) + " Min"} />
        <TabDivider
          title="Co2"
          value={Math.round(totalCO2Emissions) + " kt"}
          hasBorder={false}
        />
      </div>
    </div>
  );
};

export default HealthLabels;
