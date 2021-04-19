import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Content from "../sections/about/Content";
import Company from "../sections/home1/Customers";
import Testimonial from "../sections/home2/Testimonial";

const PricingPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                Get Started
              </button>
            </>
          ),
          footerStyle: "style1",
        }}
      >
        <Hero />
        <Company className="bg-default-1 pt-2 pt-md-3 pt-lg-4 pb-13 pb-md-14 pb-lg-23" />
        <Content />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />
        </PageWrapper>
    </>
  );
};
export default PricingPage;
