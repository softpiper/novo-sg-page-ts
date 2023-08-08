import Link from "next/link";
import React from "react";
import Wrapper from "./components/layout/Wrapper";

const index = () => {
  return (
    <Wrapper>
      <section
        className="banner-section position-relative overflow-hidden bg-dark text-white"
        style={{ marginTop: "70px" }}
      >
        <div className=" bg-cover position-absolute start-0 top-0 w-100 h-100 opacity-50" />
        <div className="container">
          <h2 className="underline-bold fw-bold fs-1 mb-3 pb-3">Services</h2>
          <nav aria-label="breadcrumb" className="breadcrumb-text">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="index-2.html">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="services.html">Services</Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section
        className="isotop-section p-20"
        style={{ backgroundColor: "whitesmoke" }}
      >
        {/* <div className="bg-secondary d-flex justify-content-between flex-wrap py-30 ps-20 pe-4 mb-20">
          <h2 className="text-white mb-0">WHAT WE DELIVER</h2>
     
        </div> */}
        <div className="px-20 pb-20">
          <div className="row g-1 item-details ">
            <div className="col-lg-4 col-md-6 item energy all">
              <div
                className="px-30 bg-secondary text-white pt-4 pb-20 h-100"
                style={{ minHeight: "250px" }}
              >
                <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                  CHARTERING & OPERATION
                </h4>
                <p className="small mb-20">
                  The Company’s Chartering team is having strong background and
                  long experience in Chartering. The Chartering Team is
                  responsible for establishing and maintaining close
                  relationships with reputable brokers and charterers, ship
                  owners, and cargo owners.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 item financials all">
              <div
                className="px-30 bg-secondary text-white pt-4 pb-20 h-100"
                style={{ minHeight: "250px" }}
              >
                <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                  POST FIXING OPERATION
                </h4>
                <p className="small mb-20">
                  The Team consists of highly professional and experienced team
                  members who have extensive operation knowledge and can support
                  24x7 according to customer needs and perform the voyage and
                  settlement of the file according to governing Charter Party.
                  The team delivers reliable and efficient solutions to
                  customers
                </p>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 item industrial all">
              <div
                className="px-30 bg-secondary text-white pt-4 pb-20 h-100"
                style={{ minHeight: "250px" }}
              >
                <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                  COMMERCIAL MANAGEMENT
                </h4>
                <p className="small mb-20">
                  The highly professional team can manage third-party owner’s
                  fleets to ensure the best hire rate in the Market. Our Global
                  market coverage together with hard work and dedication enables
                  us to negotiate the best hire rates for the customers.
                </p>
                <p className="small mb-20">
                  The foundations of the company are professionalism and
                  dedication to the shipping industry. We take pleasure in
                  guiding our customers with the latest market information &
                  real-time vessel freight information.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item materials all">
              <div
                className="px-30 bg-secondary text-white pt-4 pb-20 h-100"
                style={{ minHeight: "250px" }}
              >
                <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                  SALE AND PURCHASE
                </h4>
                <p className="small mb-20">
                  The Team consists of long experienced Sale and Purchase
                  members who can support choosing the ships with the right
                  specifications and the right price. The Team also has
                  extensive experience with registration in different Flags.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 item materials all">
              <div
                className="px-30 bg-secondary text-white pt-4 pb-20 h-100"
                style={{ minHeight: "250px" }}
              >
                <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                  BUNKER SUPPLY
                </h4>
                <p className="small mb-20">
                The Team consists of long experienced Bunker supply members who can support by supplying the Bunkers with the right specifications and the right price. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default index;
