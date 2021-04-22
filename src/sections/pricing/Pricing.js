import React from "react";

const Pricing = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-once="true"
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Build your content foundation</p>
              <h2 className="font-size-10 text-dark-cloud mb-1">£15K+</h2>


              <span className="font-size-5 mb-2">In-depth content strategy</span>

              <ul className="list-unstyled font-size-5 text-dark-cloud">
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />
                  Business goals
                </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Keyword research
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Competitive analysis
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Website architecture
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  URL structure
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Content strategy
                </li>


              </ul>
              <div className="pt-7 pt-lg-17">
                <a className="btn btn-buttercup btn-2 rounded-5" href="/contact">
                Work with us
                </a>
              </div>
            </div>
          </div>
          {/* End Single Table */}

          {/* Single Table */}

          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">

            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-once="true"
            >

              <p className="text-dodger-blue-1 font-size-5 mb-9">Your embedded content team</p>
              <h2 className="font-size-9 text-dark-cloud mb-1">£1500<span className="font-size-5">/month</span></h2>
              <span className="font-size-5 mb-2">Monthly strategy & content</span>

              <ul className="list-unstyled font-size-5 text-dark-cloud">
              <li className="mb-6">
                <i className="fa fa-check mr-4 text-dodger-blue-1" />
                12 stories per month
              </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />
                  Light keyword research
                </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Light content strategy
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Title recommendations
                </li>

                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                SEO optimisation
                </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                Monthly content creation
                </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Account manager
                </li>
                <li className="mb-6">
                  <i className="fa fa-check mr-4 text-dodger-blue-1" />{" "}
                  Quarterly Google Analytics teardown
                </li>

              </ul>
              <div className="pt-7 pt-lg-17">
                <a className="btn btn-buttercup btn-2 rounded-5" href="/contact">
                  Work with us
                </a>
              </div>
            </div>
          </div>
          {/* End Single Table */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
