import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={`${style.dFlex} ${style.bgSpider}`}>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-9 mt-5 mx-auto col-md-12 d-flex justify-content-center flex-column align-items-center">
            <h3 className="text-yellow">About The Party</h3>
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
                a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                 eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                 deserunt.
            </p>
            <br />
            <br />
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation
            </p>
            <button className={`${style.btn} ${style.bgYellow} ${style.textViolet} ${style.rounded5} ms-5 px-4 py-2 mt-5`}>
              <span className="h4">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
