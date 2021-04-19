import React from "react";

const Faq = () => {
  return (
    <div className="pb-13 pb-md-18 pb-lg-25">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              <h2 className="font-size-9 mb-0">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        {/* End Section Title */}
        {/* Faqs */}
        {/* Faqs */}
        <div className="row justify-content-center">
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <div className="mr-6">
                <div className="bg-dodger-blue-2 circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">
                  How does your free trial work?
                </h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                We have a 1500-word money back guarantee, which means if you cancel before you've requested more than 1500 words, you will receive a full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="mr-6">
                <div className="bg-dodger-blue-2 circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
              <h4 className="font-size-7 mb-7">
                Do you include research and images?
              </h4>
              <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                Yes! We do preliminary research on all content and include sources to any facts or statistics we quote. We also provide royalty free image sourcing for your content and with certain requests if it requires research diagrams etc. we’ll be sure to include the original source.
              </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <div className="mr-6">
                <div className="bg-dodger-blue-2 circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
              <h4 className="font-size-7 mb-7">
                Do you offer revisions?
              </h4>
              <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                We offer unlimited free revisions that don't count against your word count for the month, as well as a money back guarantee.
              </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="mr-6">
                <div className="bg-dodger-blue-2 circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">Is there a contract?</h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                We only work with companies serious about their content strategy. Our minimum contract length is 6 months. However, if you're not completely happy, we do offer a risk free trial.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
        </div>
        {/* Button  */}
        <div
          className="text-center pt-lg-3 pb-lg-3"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          <p className="font-size-6 mb-0">
            Still have a question about our service?
            <a className="text-blue-3 btn-link-with-underline ml-5" href="/contact">
              Contact us
            </a>
          </p>
        </div>
        {/* Button End */}
      </div>
    </div>
  );
};

export default Faq;
