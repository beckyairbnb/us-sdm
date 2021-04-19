import React from "react";
import { Link } from "gatsby";

import imgM from "../../assets/image/home-2/png/meeting-2.png";
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";
import imgLC from "../../assets/image/home-2/png/left-circlehalf-shape.png";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 col-xs-11">
              <div
                className="section-title"
                data-aos="fade-left"
                data-aos-delay={500}
                data-aos-once="true"
              >
                <h2 className="font-size-11 mb-10 mb-lg-20">
                  We develop data-driven content.
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Right */}
            <div
              className="col-xl-6 col-lg-6 col-md-5 col-xs-8"
              data-aos="fade-right"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="content-image-group-3 mb-17 mb-lg-0 mr-xl-16">
                <div className="img-1">
                  <img className="w-100" src={imgM} alt="" />
                  <div className="img-2">
                    <img className="w-100" src={imgDP} alt="" />
                  </div>
                  <div className="img-3 rounded-10">
                    <img className="w-100 opacity-7" src={imgLC} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            {/* Left */}
            <div
              className="col-lg-6 col-md-7 col-xs-10"
              data-aos="fade-left"
              data-aos-delay={500}
              data-aos-once="true"
            >
              <div className="mr-lg-10 mr-xl-25">
                <p className="heading-default-color font-size-6 mb-10">
                Every brand has distribution channels like a blog, newsletter and social. Moreover, every brand needs content to fill these channels.
                </p>
                <p className="heading-default-color font-size-6 mb-10">We help brands and publishers develop data-driven content that focuses on timeless topics to be promoted (and re-promoted) to increase reach, traffic and revenue.</p>
                <p className="heading-default-color font-size-6 mb-11">
                  Using our tools, keyword trends and competitive landscape research, we help shape evergreen content marketing opportunities through a thoughtful and strategic approach.{" "}
                </p>
                <div className="btn-group mb-12">
                  <Link className="btn btn-dodger-blue-2 rounded-5" to={"#"}>
                    Get Started
                  </Link>
                </div>

              </div>
            </div>
            {/* Left End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
