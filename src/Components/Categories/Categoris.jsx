import React, { use } from "react";
import { NavLink } from "react-router";

const categoriesPromis = fetch("categories.json").then((res) => res.json());

const Categoris = () => {
  const categories = use(categoriesPromis);

  return (
    <div>
      <h1 className="text-lg font-semibold">
        All Categoris ({categories.length})
      </h1>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {categories.map((categori) => (
          <NavLink
            key={categori.id}
            className="btn text-accent font-semibold bg-white border-0 hover:bg-base-200"
            to={`/category/${categori.id}`}
          >
            {categori.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
