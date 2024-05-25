"use client";
import Button from "@/components/Button";
import { IngredientsFormat } from "@/types/Recipe-Interface";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/redux/store";
import { toggleViewMore } from "@/redux/reducers/viewMoreSlice";

interface IProps {
  ingredients: IngredientsFormat[];
}

const Ingredients = ({ ingredients }: IProps) => {
  const [currentIngredients, setCurrentIngredients] = useState<
    IngredientsFormat[]
  >([]);

  const dispatch = useDispatch();
  const { viewMoreStatus } = useSelector((state: IRootState) => state.viewMore);
  const btnRef = useRef<HTMLDivElement>(null);

  console.log(viewMoreStatus);

  const handleViewMore = () => {
    dispatch(toggleViewMore());
    if (btnRef.current) {
      setTimeout(() => {
        btnRef!.current!.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 500);
    }
  };

  useEffect(() => {
    if (viewMoreStatus) {
      setCurrentIngredients(ingredients);
    } else {
      const mockArr = [...ingredients];
      const slicedIngredients = mockArr.splice(0, 5);
      setCurrentIngredients(slicedIngredients);
    }
  }, [viewMoreStatus]);

  return (
    <div className="flex flex-col">
      {currentIngredients.map((item) => (
        <div
          key={item.foodId}
          className="mb-4 flex w-full items-center justify-between rounded bg-orange-200 p-4"
        >
          <div className="flex items-center">
            <div className="relative mr-3 rounded bg-white p-2">
              <Image
                alt="image"
                width={40}
                height={40}
                src={item?.image || ""}
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <span className="flex w-5/6 flex-col">
              <span className="font-bold">{item.food}</span>
              <p className="text-sm">{item.text}</p>
            </span>
          </div>
          <div className="flex font-bold ">
            <span className="mr-1">{item.quantity}</span>
            <span>{item.measure}</span>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center" ref={btnRef}>
        <Button
          name={viewMoreStatus ? "View Less" : "View More"}
          onClick={handleViewMore}
        />
      </div>
    </div>
  );
};

export default Ingredients;
