import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import "./Main.css";
import "aos/dist/aos.css";

export function Main() {
  return (
    <div className="mainContainer">
      <div className="fixedTop">
        <Carousel />
      </div>
      <div className="mainContent">
        <div data-aos="fade-down" data-aos-offset="100" className="mainKonten">
          <h1>List Of Gpu Specs</h1>
          <h4>To Show A List Of AMD GPU's, NVIDIA GPU's, and Intel GPU's </h4>
          <h5>
            <a href="https://youtube.com/c/AHDHAN16Bruh">
              THE COMPLETE LIST HERE
            </a>
          </h5>
        </div>
        <div className="subKonten">
          <div data-aos="fade-right" data-aos-offset="100" className="card1">
            <h1>NVIDIA GEFORCE GPU</h1>
            -<p>G Series, GT Series, GTX Series, RTX Series</p>
            <Link className="butto shadowed" to="/nvd">
              See More
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-offset="100" className="card1">
            <h1>AMD RADEON GPU</h1>
            <p>Radeon HD, Radeon Rx, Radeon Vega</p>
            <Link className="butto shadowed" to="/amd">
              See More
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-offset="100" className="card1">
            <h1>INTEL ARC GPU</h1>
            <p>Intel New Arc Series GPU</p>
            <Link className="butto shadowed" to="/intel">
              See More
            </Link>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default Main;


