import InlineTextIcon from "@/components/InlineTextIcon";
import { IRecipe } from "@/types/Recipe-Interface";
import CalendarSvg from "@/ui/CalendarSvg";
import CircleUser from "@/ui/CircleUser";
import LinkSvg from "@/ui/LinkSvg";
import OutlineCircleUserSvg from "@/ui/OutlineCircleUserSvg";
import ScaleSvg from "@/ui/ScaleSvg";
import { formatDateToShortName } from "@/utils/formatDateToShortName";
import Link from "next/link";
import React from "react";
import ToolBar from "./components/ToolBar";

interface IProps {
  data: IRecipe;
}

const TitleSection = ({ data }: IProps) => {
  const { label, source, shareAs, totalWeight, id } = data;

  const currentTime = formatDateToShortName(new Date());

  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">{label}</h1>
      <div className="flex w-full justify-between border-b border-slate-300 pb-5">
        <div className="flex flex-wrap">
          <InlineTextIcon
            icon={<CircleUser />}
            text={source}
            textClass="text-black"
            classes="mr-4"
          />
          <InlineTextIcon
            icon={<CalendarSvg />}
            text={currentTime}
            textClass="text-black"
            classes="mr-4"
          />
          <InlineTextIcon
            icon={<ScaleSvg />}
            text={Math.round(totalWeight) + " Kg"}
            textClass="text-black"
          />
        </div>
        <ToolBar recipe={data} />
      </div>
    </>
  );
};

export default TitleSection;
