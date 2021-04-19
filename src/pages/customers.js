import React from "react";

import PageWrapper from "../components/PageWrapper";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
import Team from "../sections/about/Team";
import Company from "../sections/home1/Customers";

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

        <Company className="bg-default-1 pt-13 pt-md-17 pt-lg-24 pb-13 pb-md-14 pb-lg-23" />
        <Masonry />
        <Content />
        <Team />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
