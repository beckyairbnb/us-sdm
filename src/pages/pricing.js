import React from "react";

import PageWrapper from "../components/PageWrapper";

const Pricing = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn-buttercup btn-sm rounded-5" href={"/contact"}>
              Work with us
            </a>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <main className="pt-23 pt-md-27 pb-13 pb-md-19 pt-lg-29 pb-lg-27">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11">
                {/* job-details-content */}
                <div className="text-center pb-0">
                  {/* job-top-header */}
                  <div className="mb-7 d-inline-flex align-items-center flex-wrap">

                  </div>
                  <h2 className="font-size-11 text-dark-cloud font-weight-bold text-center mb-lg-15 mb-0">
                    Our pricing
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">

                  <div className="article-block mt-11 mt-lg-15">
                    <h3 className="text-dark-cloud mb-6">Simple, straightforward pricing</h3>
                    <p className="font-size-5 text-dark-cloud mb-9">
                We charge based on the number of stories you purchase per month. Our smallest package is 12 stories per month and we increase in increments of 4 additional articles per month. Our packages start from £1500 per month for 12 stories. We set a minimun of 12 stories per month as we want clients to get meaningful results from our involvment and get real results.
                    </p>
                    <h5 className="font-size-7 text-dark-cloud mb-6">What's included</h5>
                    <ul className="p-0 m-0 list-disc">
                                        <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                          <span className="circle-9 mr-3 mt-4 bg-black" />
                                         Foundational content strategy
                                        </li>
                                        <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                          <span className="circle-9 mr-3 mt-4 bg-black" />
                                          Dedicated account manager 
                                        </li>
                                        <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                          <span className="circle-9 mr-3 mt-4 bg-black" />
                                          UK writer 
                                        </li>
                                        <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                          <span className="circle-9 mr-3 mt-4 bg-black" />
                                         UK editor
                                        </li>
                                        <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                          <span className="circle-9 mr-3 mt-4 bg-black" />
                                         AI-powered SEO optimisation
                                        </li>
                                      </ul>


                    <p className="font-size-5 text-dark-cloud mb-9">
We take on a small number of clients and deliver exceptional quality content. We are not the cheapest option in the market, but we make up for that by providing our clients with done-for-you service. Our content team manages the entire production process, providing ongoing strategic guidance while sourcing top talent and overseeing delivery. We currently have space for 2 clients.
                  </p>

                  <h5 className="font-size-7 text-dark-cloud mb-6">Who we can help</h5>

                  <ul className="p-0 m-0 list-disc">
                                      <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                        <span className="circle-9 mr-3 mt-4 bg-black" />
                                       Saas businesses
                                      </li>
                                      <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                        <span className="circle-9 mr-3 mt-4 bg-black" />
                                        Blogs 
                                      </li>
                                      <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                        <span className="circle-9 mr-3 mt-4 bg-black" />
                                        eCommerce companies
                                      </li>
                                      <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                        <span className="circle-9 mr-3 mt-4 bg-black" />
                                       B2B businesses
                                      </li>
                                      <li className="position-relative font-size-5 text-dark-cloud pl-8 d-flex mb-7">
                                        <span className="circle-9 mr-3 mt-4 bg-black" />
                                       Consulting firms
                                      </li>
                                    </ul>
<h5 className="font-size-7 text-dark-cloud mb-6">Risk-free trials</h5>
                                <p className="font-size-5 text-dark-cloud mb-9">We offer a try before you buy option so you can see your ideas come to life using our writers. Please <a href='mailto:hello@strategically.co'>email us</a>. </p>

<h5 className="font-size-7 text-dark-cloud mb-6">Terms</h5>
<p className="font-size-5 text-dark-cloud mb-9">We recommend a minimum of three months in order to see how content can help you reach your goals.</p>
<h5 className="font-size-7 text-dark-cloud mb-6">Not ready to start?</h5>
<p className="font-size-5 text-dark-cloud mb-9">If you are interested in what we offer but not quite ready to start, <a href='mailto:hello@strategically.co'>email us</a> and we will send you a copy of our detailed strategy process. Hopefully you will think of us when you are ready.</p>

                  <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-buttercup btn-2 rounded-5" href="/pricing">
                      Work with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </PageWrapper>
    </>
  );
};
export default Pricing;
