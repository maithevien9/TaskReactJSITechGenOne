import React from "react";
import "./Footer.scss";
import icFB from "../../../Images/icFB.png";
import icYoutube from "../../../Images/icYoutube.png";

function Footer() {
  const HandleFb = (e) => {
    window.location.href = "http://google.com";
  };

  return (
    <div className="footer-wrapper">
      <h4>Trường đại học Bách Khoa - đại học Đà Nẵng</h4>
      <h4>Khoa Công Nghệ Thông Tin</h4>
      <div>
        <img src={icFB} className="image-wrapper" onClick={HandleFb} />

        <img src={icYoutube} className="image-wrapper" onClick={HandleFb} />
      </div>
    </div>
  );
}

export default Footer;
