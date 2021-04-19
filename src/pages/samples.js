import React from "react";

import PageWrapper from "../components/PageWrapper";
import Blog from "../sections/home1/Blog";

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
        <Blog className="bg-default-1 pt-14 pt-md-18 pt-lg-27 pb-13 pb-md-17 pb-lg-26" />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
