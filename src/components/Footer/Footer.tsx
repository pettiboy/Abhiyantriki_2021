import React from "react";
import "./Footer.css";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="site-footer mt-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 text-center p-2">
            <div className="footer-heading-div">
              <h3 className="footer-heading">Reach Us</h3>
            </div>
            <ul className="list-unstyled">
              <li className="custom-link link-heading-li">
                <a href="#" className="a-cancel custom-link link-heading">
                  KJSCE Students’ Council 20-21
                </a>
              </li>
              <li className="custom-link">
                <a
                  href="mailto:kjsceabhiyantriki@somaiya.edu"
                  className="a-cancel custom-link"
                >
                  kjsceabhiyantriki@somaiya.edu
                </a>
              </li>
              <li className="custom-link link-heading-li">
                <a href="#" className="a-cancel custom-link link-heading">
                  Public Relations
                </a>
              </li>
              <li className="custom-link">
                <a className="a-cancel custom-link" href="tel:+91-816-938-8385">
                  <span className="fw-bold">Freya Vora: </span>
                  +91 8169388385
                </a>
              </li>
              <li className="custom-link link-heading-li">
                <a href="#" className="a-cancel custom-link link-heading">
                  Marketing
                </a>
              </li>
              <li className="custom-link">
                <a className="a-cancel custom-link" href="tel:+91-816-938-8385">
                  <span className="fw-bold">Supriya Tiwari: </span>
                  +91 8169388385
                </a>
              </li>
              <li className="custom-link">
                <a className="a-cancel custom-link" href="tel:+91-816-938-8385">
                  <span className="fw-bold">Aabha Borle: </span>
                  +91 8169388385
                </a>
              </li>
            </ul>
          </div>

          <div id="contact" className="col-sm-6 col-md-6 text-center p-2">
            <h3 className="footer-heading">More</h3>
            <div className="contact-links">
              <a href="/" className="white">
                <i className="fa fa-home"></i> Home
              </a>
              <a href="/events" className="white">
                <i className="fa fa-calendar-alt"></i> Events
              </a>
              <a href="/get-involved" className="white">
                <i className="fas fa-hands-helping"></i> Get Involved
              </a>
              <a href="/parvaah" className="white">
                <i className="fas fa-hands"></i> Parvaah
              </a>
              <a href="/sponsors" className="white">
                <i className="fa fa-pagelines"></i> Sponsors
              </a>
              <a href="#" className="white">
                <i className="fa fa-edit"></i>
                Register
              </a>
            </div>
            <ul className="list-unstyled">
              <li className="custom-link m-2 contact-li"></li>
              <li className="custom-link m-2 contact-li"></li>
              <li className="custom-link m-2 contact-li"></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
