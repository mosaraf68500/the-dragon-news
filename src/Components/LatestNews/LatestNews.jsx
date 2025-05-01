import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-base-200 py-3 px-5">
      <p className="bg-secondary text-white font-semibold px-6 py-2 rounded-sm">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={80}>
        <p >
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
