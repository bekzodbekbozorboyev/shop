import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="middle">
        <div className="top">
          <span>Copyright © 2024 Bekzodbek Pte Ltd, All rights reserved.</span>
        </div>
        <div className="app_links">
          <span>
            <FaXTwitter />
            <Link to={"https://x.com"}>@bozorboyev</Link>
          </span>
          <span>
            <IoLogoGithub />
            <Link to={"https://github.com/bekzodbekbozorboyev"}>
              bekzodbekbozorboyev
            </Link>
          </span>
        </div>
      </div>
      <div className="footer-links">
        <Link to={"/"}>Privacy</Link>
        <Link to={"/"}>Terms</Link>
        <Link to={"/"}>Status</Link>
        <Link to={"/"}>Contact Us</Link>
      </div>
    </footer>
  );
}

export default Footer;
