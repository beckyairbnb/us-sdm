import React from "react";
import { Link } from "gatsby";

import imgAS from "../../assets/image/home-6/png/app-store-img.png";
import imgPS from "../../assets/image/home-6/png/play-store-img.png";

const Promo = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="pt-13 pt-md-18 pt-lg-21 pb-13 pb-md-17 pb-lg-22">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="text-center text-lg-left mb-13 mb-lg-0">
                <h3
                  className="font-size-9 mb-7"
                >
                  Start making the most of your content.
                </h3>
                <p
                  className="font-size-6 mb-0 "
                >
                  Literistic delivers a timely, robust, and tailored list of writing opportunities—including magazines, presses, contests, grants and residencies—to your inbox and your calendar.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-xl-1 col-md-8 col-sm-10">
              <div className="text-center text-lg-left">

                <div className="btn-group d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">

                  <a className="btn btn-blue-3 btn-2 rounded-5" href={"/pricing"}>
                    View Pricing
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
