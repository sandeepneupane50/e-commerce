"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings"
import getPriceQueryParams from '../../helpers/helpers'
import { log } from "console";
import { set } from "mongoose";
const Filters = () => {
  const router = useRouter();
  let queryParams: any;

  let [sRatings, setSRatings] = useState([])

  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const returnHome = () => {
    // window.location = '/'
    const path = window.location.pathname
    router.push(path);
  }



  const handleClick = (checkbox: any) => {
   
      queryParams = new URLSearchParams(window.location.search);
    
      // set filter in query
      queryParams.delete('category');
       queryParams.append(checkbox.name, checkbox.value);

    const path = window.location.pathname + "?" + queryParams.toString();
    router.push(path);
  }
 
  const ratingClick = (e: any) => {
    const { value, checked } = e.target;
    const numericValue = Number(value)    
    queryParams = new URLSearchParams(window.location.search);
    if (checked) {
      setSRatings([...sRatings, numericValue])
    } else {
      setSRatings(sRatings.filter((e) => e !== numericValue))
    }
  }
  
  function ratings(){
    queryParams = new URLSearchParams(window.location.search);
    queryParams.delete('ratings')
    sRatings.forEach((sRating) => {
      queryParams.append("ratings", sRating);
  });
  const path = window.location.pathname + "?" + queryParams.toString();
  router.push(path);
  }

  useEffect(() => {
    ratings();
  }),[sRatings]
  


  function categoryHandler(checkBoxType: any, checkBoxValue: any) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  const ratingsHandler = (checkBoxType: any, checkBoxValue: any) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false
    }
  }

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      queryParams = getPriceQueryParams(queryParams, "min", min);
      queryParams = getPriceQueryParams(queryParams, "max", max);

      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  }

  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Price ($)</h3>
        <div className="grid md:grid-cols-3 gap-x-2">
          <div className="mb-4">
            <input
              name="min"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              name="max"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              onClick={handleButtonClick}>
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Category</h3>

        <ul className="space-y-1">

          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                // value=""
                className="h-4 w-4"
                // defaultChecked={categoryHandler("", "")}
                onClick={returnHome}
              />
              <span className="ml-2 text-gray-500"> All</span>
            </label>
          </li>


          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                value="Electronics"
                className="h-4 w-4"
                defaultChecked={categoryHandler("category", "Electronics")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Electronics </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                value="Laptops"
                className="h-4 w-4"
                defaultChecked={categoryHandler("category", "Laptops")}
                onClick={(e) => handleClick(e.target)}

              />
              <span className="ml-2 text-gray-500"> Laptops </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                value="Toys"
                className="h-4 w-4"
                defaultChecked={categoryHandler("category", "Toys")}
                onClick={(e) => handleClick(e.target)}

              />
              <span className="ml-2 text-gray-500"> Toys </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                value="Office"
                className="h-4 w-4"
                defaultChecked={categoryHandler("category", "Office")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Office </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="radio"
                value="Beauty"
                className="h-4 w-4"
                defaultChecked={categoryHandler("category", "Beauty")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Beauty </span>
            </label>
          </li>
        </ul>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={ratingsHandler("ratings", `${rating}`)}
                  onClick={(e) => ratingClick(e)}
                />
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={rating}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters;