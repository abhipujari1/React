import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Catagory = () => {
  const [catagories, setCatagories] = useState([]);
  const [slide, setslide] = useState(0);

  useEffect(() => {
    const fetchCatagory = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCatagories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCatagory();
  }, []);

  const nextSlide = () => {
    if (catagories.length - 8 == slide) return false;
    setslide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setslide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] max-auto px-2">
      <div className="flex m-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>

        <div className="flex">
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            {" "}
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {catagories.map((cat, index) => {
          return (
            <div
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={index}
              className="w-[150px] shrink-0 duration-500 "
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
};

export default Catagory;
