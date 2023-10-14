import React from "react";
import imageGhosts from "./images/home.jpeg";

export default function Home() {
  return (
    <div className="bg-violet">
      <div className="container py-1">
        <div className="row gap-2">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <img src={imageGhosts} alt="" className="w-75" />
          </div>
          <div className="col-lg-5 col-md-12 d-flex justify-content-center flex-column align-items-center">
            <h3 className="text-white">31st October 2018</h3>
            <h1 className="text-yellow display-4">Halloween Party</h1>
            <p className="text-white text-center">
              Halloween (a contraction of All Hallows' Evening) is a celebration observed in a number of countries on 31 October. It's a time for costumes, candies, and spooky fun. Join us for a night of thrills and chills at our Halloween party!
            </p>
            <button className="btn bg-yellow text-violet rounded-5 px-4 py-2">
              <span className="h4">Explore More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
