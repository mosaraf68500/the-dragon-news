import React, { Suspense } from "react";
import Categoris from "../../Components/Categories/Categoris";

const LeftSide = () => {
  return (
    <div className="sticky  top-0">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categoris></Categoris>
      </Suspense>
    </div>
  );
};

export default LeftSide;
