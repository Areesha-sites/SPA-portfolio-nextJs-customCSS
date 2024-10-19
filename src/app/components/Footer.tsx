import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-bottom-container">
        <Link href="https://github.com/Areesha-sites">
          <i className="bx bxl-github footer-icon"></i>
        </Link>
        <Link href="https://www.instagram.com/zoxo_emmaaa/?hl=en">
          <i className="bx bxl-instagram-alt footer-icon"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <i className="bx bxl-linkedin footer-icon"></i>
        </Link>
      </div>
      <div className="footer">&copy; 2024 Areesha Vision, Happy Coding</div>
    </>
  );
};
export default Footer;
