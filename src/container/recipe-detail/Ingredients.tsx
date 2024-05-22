"use client";
import { IngredientsFormat } from "@/types/Recipe-Interface";
import Image from "next/image";
import React, { useState } from "react";

interface IProps {
  ingredients: IngredientsFormat[];
}

const Ingredients = ({ ingredients }: IProps) => {
  const []= useState()
  return (
    <div className="flex flex-col">
      {ingredients.map((item) => (
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
    </div>
  );
};

export default Ingredients;
