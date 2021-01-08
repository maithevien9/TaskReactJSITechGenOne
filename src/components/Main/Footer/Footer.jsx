import React from "react";
import "./Footer.scss";
import icFB from "../../../Images/icFB.png";
import icYoutube from "../../../Images/icYoutube.png";
function Footer() {
  const HandleFb = () => {};
  return (
    <div className="WrapperFooter">
      <h4>Trường đại học Bách Khoa - đại học Đà Nẵng</h4>
      <h4>Khoa Công Nghệ Thông Tin</h4>
      <div>
        <img
          src={icFB}
          alt="Menu"
          className="wrapperImage"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://google.com";
          }}
        />

        <img src={icYoutube} alt="Menu" className="wrapperImage" />
      </div>
    </div>
  );
}

export default Footer;
