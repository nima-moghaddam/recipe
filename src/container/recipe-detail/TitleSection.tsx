import InlineTextIcon from "@/components/InlineTextIcon";
import { IRecipe } from "@/types/Recipe-Interface";
import { formatDateToShortName } from "@/utils/formatDateToShortName";
import React from "react";
import ToolBar from "./components/ToolBar";
import SvgIcon from "@/components/SvgIcon";

interface IProps {
  recipe: IRecipe;
}

const TitleSection = ({ recipe }: IProps) => {
  const { label, source, totalWeight, mealType } = recipe;

  const currentTime = formatDateToShortName(new Date());

  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">{label}</h1>
      <div className="mb-5 flex w-full justify-between border-b border-slate-300 pb-5">
        <div className="flex flex-wrap">
          <InlineTextIcon
            icon={<SvgIcon name="location" color="primary" />}
            text={source}
            textClass="text-black"
            classes="mr-4"
          />
          <InlineTextIcon
            icon={<SvgIcon name="calendar" color="primary" />}
            text={currentTime}
            textClass="text-black"
            classes="mr-4"
          />
          <InlineTextIcon
            icon={<SvgIcon name="scale" color="primary" />}
            text={Math.round(totalWeight) + " Kg"}
            textClass="text-black"
            classes="mr-4"
          />
          <InlineTextIcon
            icon={<SvgIcon name="restaurant" color="primary" />}
            text={mealType[0]}
            textClass="text-black"
          />
        </div>
        <ToolBar recipe={recipe} />
      </div>
    </>
  );
};

export default TitleSection;
