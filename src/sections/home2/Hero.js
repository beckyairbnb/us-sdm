import React from "react";
import { Link } from "gatsby";
import Modal from "../../components/ModalVideo/Modal";

import imgSBR from "../../assets/image/home-2/png/round-shape-blue.png";
import imgBP from "../../assets/image/home-2/png/dot-pattern-blue.png";
import imgH from "../../assets/image/home-2/png/hero-2-img-1.png";
import imgH2 from "../../assets/image/home-2/png/hero-2-img-2.png";

const Hero = ({ className, ...rest }) => {


  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Hero Content --> */}
            <div
              className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0">
                <h1 className="font-size-12 mb-8">
                Drive your business with content.
                </h1>
                <p className="font-size-7 mb-0 heading-default-color">
                  Gain an edge on your competition with {" "}
                  <br className="d-none d-md-block" />unique insight and compelling content.
                </p>
                <div className=" pt-5 pt-lg-10">
                  <Link to={"#"} className="btn btn-dodger-blue-2 rounded-5">
                    Get Started
                  </Link>
          
                </div>
              </div>
            </div>
            {/* <!-- End Hero Content --> */}
            {/* <!-- l2-hero-image-group --> */}
            <div
              className="col-xl-7 col-lg-6 col-md-7 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <div className="l2-hero-image-group mt-5 mt-lg-0">
                <div className="img-1">
                  <img src={imgSBR} alt="" />
                </div>
                <div className="img-2">
                  <img src={imgBP} alt="" />
                </div>
                <div className="img-3">
                  <img src={imgH} alt="" />
                </div>
                <div className="img-4">
                  <img src={imgH2} alt="" />
                </div>
                {/* <!-- Image Group Content --> */}
                <div className="img-group-content bg-white absolute-center shadow-4 max-w-193">
                  <div className="seciton-body">
                    <div className="mb-7">
                      <h5 className="font-size-6 font-weight-medium mb-0 line-height-reset text-dark-cloud">
                        Article One
                      </h5>
                      <p className="font-size-3 text-stone">
                        Due 11:15am, Sep 10
                      </p>
                    </div>
                    <h6 className="font-size-3 text-stone">Topic:</h6>
                    <p className="font-size-3 text-dark-cloud">
                      How to get more customers for your ecommerce business
                    </p>
                  </div>
                  <div className="d-flex align-items-center w-100">
                    <Link to={"#"} className="btn-dark-green w-50 text-white">
                      <i className="fa fa-check font-size-3 mr-1"></i>
                      Approved
                    </Link>
                    <Link to={"#"} className="btn-buttercup w-50 text-white">
                      <i className="fa fa-calendar font-size-3 mr-1"></i> Assigned
                    </Link>
                  </div>
                </div>
                {/* <!-- End Image Group Content --> */}
              </div>
            </div>
            {/* <!-- End l2-hero-image-group --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
