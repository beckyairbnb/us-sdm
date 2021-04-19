import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home2/Hero";
import Company from "../sections/home1/Compnay";
import Progress from "../sections/home2/Progress";
import Content2 from "../sections/home2/Content2";
import Content3 from "../sections/home2/Content3";
import Testimonial from "../sections/home2/Testimonial";

const Home2 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>
              <button className="btn btn btn-dodger-blue-2 header-btn rounded-5">
                Get Started
              </button>
            </>
          ),
          footerStyle: "style1",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />
        <Content2 className="pb-0 pb-lg-31" />
        <Content3 className="pb-12 pb-lg-25" />
        <Testimonial className="pt-lg-19 pb-12 pb-lg-17" />
      </PageWrapper>
    </>
  );
};
export default Home2;
