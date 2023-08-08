/* eslint-disable */
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();
  return (
    <header id="navbar_top" className="transparent-header position-fixed" 
    style={{backgroundColor:"white", width: "100%", top:0,left:0, zIndex:999}}>

    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 border-bottom">
        
        <a className="site-logo navbar-brand" href="/" rel="home">
          <Image
            className="logo-dark"
            src="/assets/images/novo-logo.png"
            width={100}
            height={70}
            alt="Investment Experts"
          />
          <Image
            className="logo-light"
            src="/assets/images/novo-logo.png"
            width={100}
            height={70}
            alt="Investment Experts"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#main_nav"
          aria-controls="main_nav"
          style={{backgroundColor:"#20304F"}}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-lg offcanvas-end p-3 p-lg-0"
          style={{backgroundColor:'whitesmoke',width:"300px"}}
          id="main_nav"
          tabIndex={-1}
        >
          <div className="offcanvas-body align-items-center">
            <div className="offcanvas-header px-0 justify-content-end">
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{backgroundColor:"darkgreen"}}
              />
            </div>
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item dropdown position-relative">
                <a className={router.pathname === "/" ? "nav-a active" : "nav-a"} href="/" style={{color:"darkgreen"}}>
                  Home
                </a>
               
 
              </li>
              <li className="nav-item dropdown">
                <a className={router.pathname === "/company" ? "nav-a active" : "nav-a"} href="/company" style={{color:"darkgreen"}}>
                  Company
                </a>
          
              </li>
              <li className="nav-item dropdown">
              <a className={router.pathname === "/services" ? "nav-a active" : "nav-a"} href="/services" style={{color:"darkgreen"}}>
                  Services
                </a>

              </li>
              <li className="nav-item dropdown">
              <a className={router.pathname === "/partners" ? "nav-a active" : "nav-a"} href="/partners" style={{color:"darkgreen"}}>
                  Partners
                </a>

              </li>
              <li className="nav-item dropdown">
              <a className={router.pathname === "/contact" ? "nav-a active" : "nav-a"} href="/contact" style={{color:"darkgreen"}}>
                  Contact
                </a>

              </li>

            </ul>
    
          </div>
        </div>{" "}
        {/* navbar-collapse.// */}
      </nav>
    </div>{" "}
    {/* container.// */}
  </header>
  )
}

export default Header