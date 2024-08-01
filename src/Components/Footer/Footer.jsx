import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-topleft">
          <img src={footer_logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            veniam.
          </p>
        </div>
        <div className="footer-topright">
          <div className="footer-emailinput">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter you email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottomleft"> &copy; Sheryar Amir, All right reserved.</p>

        <div className="footer-bottomrigh">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
