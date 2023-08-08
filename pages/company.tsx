import Link from "next/link";
import React from "react";
import Wrapper from "./components/layout/Wrapper";
import { Inter, Roboto, Ubuntu } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const company = () => {
  return (
    <Wrapper>
      <section
        className={`banner-section position-relative overflow-hidden bg-dark text-white`}
        style={{ marginTop: "70px" }}
      >
        <div className=" bg-cover position-absolute start-0 top-0 w-100 h-100 opacity-50" />
        <div className="container">
          <h2 className="underline-bold fw-bold fs-1 mb-3 pb-3">Company</h2>
          <nav aria-label="breadcrumb" className="breadcrumb-text">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="index-2.html">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="services.html">Company</Link>
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="history-section py-60">
        <div className="container">
          <div className="row gx-5 gy-30">
            <div className="col-lg-12">
              <p>
                Novo Shipping Pte Ltd was established in 2023 as a dry bulk ship
                operator company based in Singapore. Our aim is to become a
                trusted dry bulk business partner for serving cargo owners, ship
                owners, and charterers across the globe.
              </p>
              
              <div className="block-quote py-30 my-5">
                <svg
                  version="1.1"
                  className="testimonial-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 446 446"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M109.7,91.08c25.2,0,48.33,10.17,65.12,28.63c17.14,18.84,25.22,43.63,22.74,69.78
                            c-3.71,39.23-15.88,71.28-37.2,97.99c-17.29,21.66-37.53,38.34-60.17,49.57c-22.52,11.16-48.08,17.27-75.98,18.16
                            c-0.24,0.01-0.48,0.01-0.71,0.01c-0.66,0-1.15-0.03-1.51-0.07c-0.08-0.49-0.15-1.25-0.15-2.36c-0.02-9.98-0.01-20.19,0-29.19
                            c0-1.5,0.08-2.47,0.17-3.08c0.6-0.1,1.57-0.21,3.06-0.25c33.95-1.05,64.06-12.79,89.48-34.89c0.54-0.47,1.02-0.93,1.63-1.5
                            c0.32-0.3,0.7-0.66,1.17-1.1c2.69-2.5,3.58-6.38,2.27-9.81c-1.31-3.43-4.58-5.71-8.25-5.77c-12.4-0.21-23.4-2.23-33.62-6.15
                            c-17.42-6.69-32.7-19.62-43.03-36.41c-10.3-16.74-14.77-35.83-12.57-53.74c2.55-20.77,11.2-39.32,25.03-53.64
                            C60.91,103,78.55,94.2,98.18,91.79C102.02,91.32,105.89,91.08,109.7,91.08 M109.7,82.08c-4.14,0-8.35,0.25-12.61,0.78
                            c-44.23,5.43-78.19,40.62-83.87,86.93c-5.06,41.23,21.52,84.37,61.31,99.65c11.53,4.43,23.48,6.52,36.69,6.75
                            c-1.33,1.24-1.94,1.84-2.57,2.39c-24.05,20.91-52.05,31.7-83.85,32.68c-9.37,0.29-11.94,2.82-11.95,12.32
                            c-0.01,9.74-0.02,19.48,0,29.22c0.02,8.21,2.83,11.42,10.66,11.42c0.32,0,0.65-0.01,1-0.02c58.49-1.85,106.39-25.35,142.9-71.11
                            c23.91-29.96,35.51-64.6,39.12-102.76C212.13,131.1,167.22,82.08,109.7,82.08L109.7,82.08z"
                      ></path>
                    </g>
                    <g>
                      <path
                        d="M336.38,90.78c24.27,0,47.83,10.58,64.64,29.02c8.27,9.08,14.5,19.5,18.5,30.98
                            c4.18,11.99,5.69,24.54,4.51,37.29c-3.72,39.97-15.88,72.41-37.17,99.15c-17.33,21.77-37.63,38.52-60.32,49.79
                            c-22.59,11.21-48.24,17.33-76.23,18.19c-0.22,0.01-0.43,0.01-0.63,0.01c-0.62,0-1.09-0.03-1.43-0.07
                            c-0.06-0.44-0.12-1.08-0.12-2.01c-0.04-10.51-0.04-20.87-0.01-30.8c0-0.87,0.06-1.47,0.11-1.88c0.44-0.08,1.12-0.15,2.11-0.18
                            c35.5-0.84,66.04-13.07,93.35-37.4c2.77-2.47,3.74-6.38,2.45-9.86c-1.29-3.48-4.58-5.8-8.29-5.86c-17.3-0.28-32.18-4.17-45.5-11.9
                            c-32.1-18.64-49.39-55.3-43.04-91.22c3.18-18.01,11.71-34.37,24.66-47.31c12.95-12.94,29.31-21.46,47.33-24.63
                            C326.28,91.22,331.36,90.78,336.38,90.78C336.38,90.78,336.38,90.78,336.38,90.78 M336.37,81.78c-5.47,0-11.04,0.48-16.65,1.46
                            c-40.44,7.12-72.14,38.8-79.29,79.23c-7.02,39.73,11.99,80.02,47.39,100.57c15.06,8.74,31.36,12.82,49.87,13.12
                            c-25.68,22.88-54.51,34.34-87.58,35.12c-7.98,0.19-10.99,3.14-11.01,11.02c-0.04,10.29-0.03,20.58,0.01,30.87
                            c0.03,7.85,2.92,11.04,10.55,11.04c0.3,0,0.6,0,0.91-0.01c58.71-1.8,106.74-25.41,143.32-71.37
                            c24.13-30.32,35.51-65.42,39.09-103.92C438.36,131.06,392.1,81.77,336.37,81.78L336.37,81.78z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="fst-italic">
                  We believe in long-term partnerships with our customers. We
                  always try to understand and satisfy our customers by
                  establishing close contact with them and providing value-added
                  cost-effective solutions.
                </p>
              </div>

              <div className="row g-20">
                <div className="col-lg-4">
                  <div className="position-relative w-100 h-100">
                    <div
                      className="figure-block position-relative d-flex align-items-start flex-column gap-20 text-white"
                      style={{
                        padding: "20px 10px 40px 20px",
                        minHeight: "11rem",
                        backgroundColor: "#263238",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex justify-content-start align-items-center">
                        <h4 className=" text-uppercase">Vision</h4>
                      </div>
                      <p style={{ color: "white", fontSize: "14px" }}>
                      Be the Global Shipping Trusted Business Partner.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative w-100 h-100">
                    <div
                      className="figure-block position-relative d-flex align-items-start flex-column gap-20 text-white"
                      style={{
                        padding: "20px 10px 40px 20px",
                        minHeight: "11rem",
                        backgroundColor: "#263238",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex justify-content-start align-items-center">
                        <h4 className=" text-uppercase">Mission</h4>
                      </div>
                      <p style={{ color: "white", fontSize: "14px" }}>
                        By enhancing Customer satisfaction connect the Global
                        Customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="position-relative w-100 h-100">
                    <div
                      className="figure-block position-relative d-flex align-items-start flex-column gap-20 text-white"
                      style={{
                        padding: "20px 10px 40px 20px",
                        minHeight: "11rem",
                        backgroundColor: "#263238",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex justify-content-start align-items-center">
                        <h4 className=" text-uppercase">Core Values</h4>
                      </div>
                      <p
                        style={{
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "-20px",
                        }}
                      >
                        1. Efficient and Devoted Work force
                      </p>
                      <p
                        style={{
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "-20px",
                        }}
                      >
                        2. Customer Satisfaction
                      </p>
                      <p
                        style={{
                          color: "white",
                          fontSize: "14px",
                          marginBottom: "-20px",
                        }}
                      >
                        3. Global Connectivity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default company;
