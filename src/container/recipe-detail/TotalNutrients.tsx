import { INutrients, ITotalNutrients } from "@/types/Recipe-Interface";
import React from "react";

interface IProps {
  nutrients: ITotalNutrients;
}

const TotalNutrients = ({ nutrients }: IProps) => {
  const nutrientArray: INutrients[] = Object.values(nutrients).splice(0, 9);

  return (
    <div className="bg-orange-100 p-5">
      <h2 className="font-bold mb-2">Nutrition Facts</h2>
      {nutrientArray.map((item) => (
        <div
          key={item.label}
          className="mb-3 flex items-center justify-between border-b border-orange-300"
        >
          <span>{item.label}</span>
          <span className="font-bold">
            {Math.round(item.quantity)}
            {item.unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TotalNutrients;
