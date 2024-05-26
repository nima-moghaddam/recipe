import FavouritsList from "@/container/favourit-list";
import React from "react";

const FavouritsPage = () => {
  return (
    <section>
      <h1 className="font-bold">Favourits List</h1>
      <p className="mb-5 text-sm text-gray-400">
        You can add or remove recipes by clicking on favourite icon.
      </p>
      <FavouritsList />
    </section>
  );
};

export default FavouritsPage;
