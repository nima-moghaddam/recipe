import Badge from "@/components/Badge";
import SvgIcon from "@/components/SvgIcon";
import React from "react";
interface IProps {
  detailList: string[];
  cautions?: string[];
  mealTypes?: string[];
}

const CookingDetail = ({ detailList, cautions, mealTypes }: IProps) => {
  return (
    <>
      <h3 className="mb-4 font-bold text-black">Ingredient Details</h3>
      <ul className="mb-5 flex flex-col">
        {detailList.map((item, index) => (
          <li key={index} className="mb-2 flex">
            <span className="mr-2 font-bold text-primary-normal">
              {index + 1}-
            </span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      {!!cautions?.length && (
        <>
          <h3 className="mb-2 font-bold text-black">Cautions</h3>
          <div className="flex flex-wrap mb-5">
            {cautions.map((item) => (
              <Badge
                color="green"
                classes="mr-2 mb-2"
                name={item}
                key={item}
                icon={<SvgIcon name="alert-hexagon" color="green" />}
              />
            ))}
          </div>
        </>
      )}
      {!!mealTypes?.length && (
        <>
          <h3 className="mb-2 font-bold text-black">Meal Type</h3>
          <div className="flex flex-wrap">
            {mealTypes.map((item) => (
              <Badge
                color="primary"
                classes="mr-2 mb-2"
                name={item}
                key={item}
                icon={<SvgIcon name="restaurant" color="primary" />}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CookingDetail;
