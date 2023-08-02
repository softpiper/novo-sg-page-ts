import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
const Header = () => {
  const router = useRouter();
  return (
    <header id="navbar_top" className="transparent-header position-fixed" 
    style={{backgroundColor:"white", width: "100%", top:0,left:0, zIndex:999}}>

    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 border-bottom">
        <Link className="site-logo navbar-brand" href="/" rel="home">
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
        </Link>
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
                <Link className={router.pathname === "/" ? "nav-link active" : "nav-link"} href="/" style={{color:"darkgreen"}}>
                  Home
                </Link>
               
 
              </li>
              <li className="nav-item dropdown">
                <Link className={router.pathname === "/company" ? "nav-link active" : "nav-link"} href="/company" style={{color:"darkgreen"}}>
                  Company
                </Link>
          
              </li>
              <li className="nav-item dropdown">
              <Link className={router.pathname === "/services" ? "nav-link active" : "nav-link"} href="/services" style={{color:"darkgreen"}}>
                  Services
                </Link>

              </li>
              <li className="nav-item dropdown">
              <Link className={router.pathname === "/partners" ? "nav-link active" : "nav-link"} href="/partners" style={{color:"darkgreen"}}>
                  Partners
                </Link>

              </li>
              <li className="nav-item dropdown">
              <Link className={router.pathname === "/contact" ? "nav-link active" : "nav-link"} href="/contact" style={{color:"darkgreen"}}>
                  Contact
                </Link>

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