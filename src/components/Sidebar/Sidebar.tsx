import React from "react";
import { COLORS } from "../../constants/constants";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
  return (
    <React.Fragment>
      <div
        style={{ background: COLORS.PRIMARY }}
        className="social-media__section"
      >
        <ul className="list-unstyled">
          <li>
            <a href="https://kjscelive.wordpress.com/">
              <i className="fa fa-wordpress"></i>
            </a>
          </li>
          <li>
            <a
              href="https://cutt.ly/Abhiyantriki_2020_Registration"
              target="_blank"
            >
              <i className="fa fa-edit"></i>
            </a>
          </li>
          <li>
            <a href="/coming-soon" target="_blank">
              <i className="fa fa-puzzle-piece"></i>
            </a>
          </li>
          <li>
            <a href=" https://www.instagram.com/kjscelive/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kjsceabhiyantriki/?ref=br_rs"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href=" https://twitter.com/kjsabhiyantriki?lang=en"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UC7Z32X4uNZ8c31NteK3065g"
              target="_blank"
            >
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile-social-media-section pb-5">
        <div className="follow text-center">Follow us on</div>
        <br />
        <div className="mobile-social-media-inner-section">
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
    </React.Fragment>
  );
};

export default Sidebar;
