import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home3/Hero";
import Company from "../sections/home1/Compnay";
import Testimonial from "../sections/home2/Testimonial";
import Progress from "../sections/home2/Progress";



const Home3 = () => {
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
        <Hero className="bg-lily-white pt-25 pt-lg-29" />
        <Testimonial className="bg-default-1 pt-lg-19 pb-12 pb-lg-17" />
        <Company className="pt-12 pb-9" />
        <Progress className="pb-lg-21 border-top border-default-color-1" />
      </PageWrapper>
    </>
  );
};
export default Home3;
