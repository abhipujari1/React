import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

const TopRest = () => {
  const [data, setdata] = useState([]);

  const fetchTopRestaurants = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setdata(apiData);
  };

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">Top Rest in Jodhpur</div>

        <div className="flex">
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            {" "}
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden ">
        {data.map((d, i) => {
          return <Card width="w-full md:w-[273px] " {...d} key={i} />;
        })}
      </div>
      <hr className="my-4 border-[1px]" />
    </div>
  );
};

export default TopRest;
