"use client";
import Badge from "@/components/Badge";
import SvgIcon from "@/components/SvgIcon";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { toggleViewMore } from "@/redux/reducers/viewMoreSlice";

interface IProps {
  detailList: string[];
  cautions?: string[];
  mealTypes?: string[];
}

const CookingDetail = ({ detailList, cautions, mealTypes }: IProps) => {
  const [currentDetailList, setCurrentDetailList] = useState<string[]>([]);

  const dispatch = useDispatch();
  const { viewMoreStatus } = useSelector((state: IRootState) => state.viewMore);

  useEffect(() => {
    if (viewMoreStatus) {
      setCurrentDetailList(detailList);
    } else {
      const mockArr = [...detailList];
      const slicedDetailList = mockArr.splice(0, 8);
      setCurrentDetailList(slicedDetailList);
    }
  }, [viewMoreStatus]);

  return (
    <>
      <h3 className="mb-4 font-bold text-black">Ingredient Details</h3>
      <ul className="mb-5 flex flex-col">
        {currentDetailList.map((item, index) => (
          <li key={index} className="mb-2 flex">
            <span className="mr-2 font-bold text-primary">{index + 1}-</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      {!!cautions?.length && (
        <>
          <h3 className="mb-2 font-bold text-black">Cautions</h3>
          <div className="mb-5 flex flex-wrap">
            {cautions.map((item) => (
              <Badge
                color="secondary"
                classes="mr-2 mb-2"
                name={item}
                key={item}
                icon={<SvgIcon name="alert-hexagon" color="secondary" />}
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
