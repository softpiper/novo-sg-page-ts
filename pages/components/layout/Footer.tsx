import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-section bg-secondary pt-5 text-white text-opacity-75"
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 col-12">
            <p style={{ color: "white", fontWeight: 500 }}>
              Novo Shipping Pte Ltd was established in 2023 as a dry bulk ship
              operator company based in Singapore. Our aim is to become a
              trusted dry bulk business partner for serving cargo owners, ship
              owners, and charterers across the globe.
            </p>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footer-links">
              <h6 className="mb-4 fw-semibold text-white">USEFUL LINKS</h6>
              <ul className="list-unstyled d-grid gap-1">
                <li>
                  <Link
                    href="/company"
                    className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                  >
                    <i className="bi bi-arrow-right text-primary" />
                    <span>Company</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                  >
                    <i className="bi bi-arrow-right text-primary" />
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                  >
                    <i className="bi bi-arrow-right text-primary" />
                    <span>Partners</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                  >
                    <i className="bi bi-arrow-right text-primary" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <h6 className="mb-4 fw-semibold text-white">GET IN TOUCH</h6>
            <ul className="list-unstyled ps-0 d-grid gap-2">
              <li>
                <i className="fa-solid fa-location-dot text-primary" />
                <span
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Registered & Operation Office:{" "}
                </span>
                <br />
                <span style={{ marginLeft: "10px" }}>
                  317 Otram Road. #B1-25 Holiday Inn Atrium. Singapore: 169075
                </span>
              </li>

              <li>
                <a
                  href="tel:(214) 550-5405"
                  className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                >
                  <i className="fa-solid fa-phone text-primary" />
                  <span>(214) 550-5405</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ops@novo-sg.com"
                  className="text-decoration-none d-flex gap-2 text-white text-opacity-75"
                >
                  <i className="fa-solid fa-envelope-open-text text-primary" />
                  <span>ops@novo-sg.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright bg-dark">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap py-4">
            <p className="mb-lg-0">© 2023 NOVO-SG. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
