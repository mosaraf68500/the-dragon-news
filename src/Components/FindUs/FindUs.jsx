import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-600">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn join-item justify-start bg-base-100 "> <FaFacebook size={20}></FaFacebook> Facebook</button>
          <button className="btn join-item justify-start bg-base-100"><FaTwitter size={20}></FaTwitter> Twitter</button>
          <button className="btn join-item justify-start bg-base-100"> <FaInstagram size={20}></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
