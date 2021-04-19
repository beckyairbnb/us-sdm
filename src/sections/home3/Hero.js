import React from "react";

import DashBoardImage from "../../assets/image/home-3/png/desktop-dashboard.png";
import YellowShape from "../../assets/image/home-3/png/yellow-shape.png";
import GreenShape from "../../assets/image/home-3/png/green-shape.png";

const Hero = ({className,...rest}) => {
    return (
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div
                className="text-center mb-11 mb-lg-24"

              >
                <h1 className="font-size-11 mb-7">
                Drive your business with content
                </h1>
                <p className="font-size-7 px-lg-5 mb-0">
                  We are a data-driven content writing agency. We help brands become publishers.
                </p>
                <div className="btn-group d-inline-block mt-10">
                  <a className="btn btn-blue-3 btn-2 rounded-5" href={"/pricing"}>
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Hero;
