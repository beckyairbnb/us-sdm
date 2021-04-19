import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";

const PricingPage = () => {
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
        <Hero />
        <Pricing />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
