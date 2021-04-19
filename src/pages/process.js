import React from "react";

import PageWrapper from "../components/PageWrapper";

const Process = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
            <a className="btn btn-blue-3 btn-2 rounded-5" href={"/contact"}>
              Get Started
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
                  <h2 className="font-size-11 font-weight-bold text-center mb-lg-15 mb-0">
                    Our process
                  </h2>
                </div>
              </div>
              <div className="col-xl-9 col-lg-10 px-xl-0 px-lg-6 px-md-0 px-6 pr-0">
                {/* terms-contents  */}
                <div className="pt-lg-0 pt-10 pl-lg-10 px-xl-15">

                  <div className="article-block mt-11 mt-lg-15">
                    <h5 className="font-size-7 mb-6">1. Foundational strategy</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  Building it does not mean they will come (and engage, buy or share). Content without
                  strategy can be a monumental waste of valuable time and resources.
                    </p>
                    <h5 className="font-size-7 mb-6">2. Editorial calendar</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  Based on your ideas and insights, we complement your editorial efforts
                  and provide a baseline of SEO-centric content that lets you own the categories you want.
                    </p>
                    <h5 className="font-size-7 mb-6">3. Workflow & delivery </h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  Whether you've requested short, snackable slideshows or in-depth content, we integrate
                  into your workflow and make it as simple as "copy and paste".
                    </p>
                    <h5 className="font-size-7 mb-6">4. Ongoing guidance</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  We constantly monitor which content performs best, what's trending on the internet, and use that intelligence to reveal opportunities and suggest upcoming posts.
                    </p>

                    <h5 className="font-size-7 mb-6">What we do</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  We specialise in writing great content that's highly relevant to what your target audience is searching for.</p>
                    <h5 className="font-size-7 mb-6">We are not</h5>
                    <p className="font-size-5 heading-default-color mb-9">
                  We are not videographers or infographic producers. We may occasionally recommend content ideas that require additional assets to improve the performance. </p>
                  <h5 className="font-size-7 mb-6">Prices & terms</h5>
                    <p className="font-size-5 heading-default-color mb-9 font-weight-bold">Pricing:</p>
                    <p className="font-size-5 heading-default-color mb-9">We can work together to create a package that works best for you. Starting at £1500 per month.</p>
                    <p className="font-size-5 heading-default-color mb-9 font-weight-bold">Terms:</p>
                    <p className="font-size-5 heading-default-color mb-9">We recommend a minimum of three months in order to see how content can help you reach your goals.</p>
                    <p className="font-size-5 heading-default-color mb-9 font-weight-bold">Trials:</p>
                    <p className="font-size-5 heading-default-color mb-9">Try before you buy. Our editorial team can help craft a trial so you can see your ideas come to life.</p>
    </div>

                  <div className="apply-btn pt-7 pt-md-13">
                    <a className="btn btn-blue-3 btn-2 rounded-5" href="/pricing">
                      View Pricing
                    </a>
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
export default Process;
