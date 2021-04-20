import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Company from "../sections/home1/Compnay";
import Testimonial from "../sections/home2/Testimonial";
import Progress from "../sections/home2/Progress";



const Index = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: (
            <>

                <a className="btn btn-white btn-sm rounded-5" href={"/contact"}>
                  Work with us
                </a>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <Hero className="bg-blue-1 pt-25 pt-lg-29" />
        <Testimonial className="bg-default-1 pt-lg-19 pb-12 pb-lg-17" />
        <Company className="pt-12 pb-9" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default Index;
