import React from "react";
interface IProps {
  detailList: string[];
}

const CookingDetail = ({ detailList }: IProps) => {
  return (
    <>
      <h3 className="font-bold text-black mb-4">Ingredient Details</h3>
      <ul className="flex flex-col">
        {detailList.map((item, index) => (
          <li key={index} className="mb-2 flex">
            <span className="mr-2 font-bold text-primary-normal">
              {index + 1}-
            </span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CookingDetail;
