import React from 'react'
import Wrapper from './components/layout/Wrapper'

const contact = () => {
  return (
    <Wrapper>
    <section className="banner-section position-relative overflow-hidden bg-dark text-white" style={{marginTop:"90px"}}>

      <div className=" bg-cover position-absolute start-0 top-0 w-100 h-100 opacity-50" />

      <div className="container">
        <h2 className="underline-bold fw-bold fs-1 mb-3 pb-3">Contact Us</h2>
      </div>
    </section>
    <section className="news-section py-60">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <h1 className="text-underline fw-bold fs-2 mb-30 pb-20">Get in Touch</h1>
    <ul className="contact-icon list-unstyled ps-0 d-grid gap-10 mb-5">
      <li>
        <a
          href="#"
          className="text-decoration-none text-dark text-opacity-75 me-40"
        >
          <span>
          317 Otram Road. #B1-25 Holiday Inn Atrium. Singapore: 169075
          </span>
        </a>
      </li>
      <li>
        <a
          href="tel:(214) 550-0405"
          className="text-decoration-none d-flex gap-3 text-dark text-opacity-75"
        >
          <i className="fa-solid fa-phone text-primary" />
          <span>+8801674974381</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:ops@novo-sg.com"
          className="text-decoration-none d-flex gap-3 text-dark text-opacity-75"
        >
          <i className="fa-solid fa-envelope-open-text text-primary" />
          <span>ops@novo-sg.com</span>
        </a>
      </li>
    </ul>
          </div>
          <div className="col-md-8">
            <div>
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808662761552!2d103.8316263741724!3d1.2890129617700317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1977d959ad0f%3A0x36811a678ae67b76!2sHoliday%20Inn%20Singapore%20Atrium%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sbd!4v1683381402844!5m2!1sen!2sbd"
                height={350}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
       
      </div>
    </section>
  </Wrapper>
  )
}

export default contact