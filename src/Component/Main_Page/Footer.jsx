import React from "react";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <div className="footer-item">
            <MdEmail className="footer-icon" />
            <a href="#">setyaahdhan16@gmail.com</a>
          </div>
          <div className="footer-item">
            <FaYoutube className="footer-icon" />
            <a href="https://www.youtube.com/c/AHDHAN16Bruh">YouTube</a>
          </div>
          <div className="footer-item">
            <FaGithub className="footer-icon" />
            <a href="https://github.com/unavailable16">GitHub</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Ahdhan Setya Ananta XII RPL</p>
        </div>
        <div className="footer-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
