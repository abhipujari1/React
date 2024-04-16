import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const OnlineDelivery = () => {
  const [data, setdata] = useState([]);
  const myRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (myRef.current) {
        const scrollTop = myRef.current.getBoundingClientRect().top;
        setIsAtTop(scrollTop <= 0);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const fetchTopRestaurants = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const apiData = await response.json();
    setdata(apiData);
  };

  useEffect(() => {
    fetchTopRestaurants();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2" ref={myRef} >
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Jodhpur{" "}
        </div>
      </div>
      <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3 " >
          <div className="p-3 rounded-md shadow-md">Filter</div>
          <div className="p-3 rounded-md shadow-md">Sort By</div>
          <div className="p-3 rounded-md shadow-md">Filter</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((d, i) => {
          return <Card  {...d} />;
        })}
      </div>
    </div>
  );
};

export default OnlineDelivery;
