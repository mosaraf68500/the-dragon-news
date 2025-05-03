import React from "react"; 
import img1 from "../../assets/class.png"
import img2 from "../../assets/playground.png"
import img3 from "../../assets/swimming.png"


const Qzone = () => {
  return (
    <div className="bg-gray-100 p-3">
      <h1 className="text-lg font-bold text-gray-700">Qzone</h1>
      <div className="gap-6">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
