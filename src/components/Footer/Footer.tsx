import React from "react";
import "./Footer.css";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="site-footer mt-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col p-2 footer-container">
            <div className="map-holder" id="map-holder"></div>
          </div>

          <div className="col p-2 footer-container">
            <div className="footer-heading-div">
              <h3 className="footer-heading">Reach Us</h3>
              <div className="line"></div>
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

          <div className="col p-2 footer-container">
            <h3 className="footer-heading">Useful Links</h3>
            <div className="line"></div>
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
          </div>

          <div className="col p-2 footer-container">
            <h3 className="footer-heading">Follow Us On</h3>
            <div className="line"></div>
            <div className="follow-us-on">
              <a href=" https://www.instagram.com/kjscelive/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/kjsceabhiyantriki/?ref=br_rs">
                <i className="fab fa-facebook"></i>
              </a>
              <a href=" https://twitter.com/kjsabhiyantriki?lang=en">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC7Z32X4uNZ8c31NteK3065g">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="https://kjscelive.wordpress.com/">
                <i className="fa fa-wordpress"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
