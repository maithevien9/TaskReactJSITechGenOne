import React, { useState } from "react";
import Modal from "react-modal";
import "./Header.scss";
import PropTypes from "prop-types";
import icMenu from "../../../Images/icMenu.png";
import HTML from "./HTML/HTML";

Header.propTypes = {
  handleMenu: PropTypes.func,
};
Header.Authenication = {
  handleMenu: null,
};

function Header(props) {
  const { handleMenu } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [CheckDataHeaderHTML, setCheckDataHeaderHTML] = useState(false);
  const [CheckDataHeaderCSS, setCheckDataHeaderCSS] = useState(false);
  const [CheckDataHeaderRuby, setCheckDataHeaderRuby] = useState(false);
  const [CheckDataHeaderPHP, setCheckDataHeaderPHP] = useState(false);
  const [CheckDataHeaderPython, setCheckDataHeaderPython] = useState(false);

  const handleCloseHTMLView = () => {
    setModalIsOpen(false);
  };
  const HandleOpenHTMLView = () => {
    setModalIsOpen(true);
  };
  const HandleCheckDataheaderHTMl = (data) => {
    setCheckDataHeaderHTML(data);
  };
  const HandleCheckDataheaderCSS = (data) => {
    setCheckDataHeaderCSS(data);
  };
  const HandleCheckDataheaderRuby = (data) => {
    setCheckDataHeaderRuby(data);
  };
  const HandleCheckDataheaderPHP = (data) => {
    setCheckDataHeaderPHP(data);
  };
  const HandleCheckDataheaderPython = (data) => {
    setCheckDataHeaderPython(data);
  };

  return (
    <div className="header-wrapper">
      <div className="header-left-wrapper">
        <h1
          className={
            CheckDataHeaderHTML ? "style-text-header2" : "style-text-header"
          }
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => HandleCheckDataheaderHTMl(true)}
          onMouseLeave={() => HandleCheckDataheaderHTMl(false)}
        >
          HTML
        </h1>
        <h1
          className={
            CheckDataHeaderCSS ? "style-text-header2" : "style-text-header"
          }
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => HandleCheckDataheaderCSS(true)}
          onMouseLeave={() => HandleCheckDataheaderCSS(false)}
        >
          CSS
        </h1>
        <h1
          className={
            CheckDataHeaderRuby ? "style-text-header2" : "style-text-header"
          }
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => HandleCheckDataheaderRuby(true)}
          onMouseLeave={() => HandleCheckDataheaderRuby(false)}
        >
          Ruby
        </h1>
        <h1
          className={
            CheckDataHeaderPHP ? "style-text-header2" : "style-text-header"
          }
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => HandleCheckDataheaderPHP(true)}
          onMouseLeave={() => HandleCheckDataheaderPHP(false)}
        >
          PHP
        </h1>
        <h1
          className={
            CheckDataHeaderPython ? "style-text-header2" : "style-text-header"
          }
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => HandleCheckDataheaderPython(true)}
          onMouseLeave={() => HandleCheckDataheaderPython(false)}
        >
          Python
        </h1>
      </div>
      <div className="header-right-wrapper">
        <h1 className="style-text-header-right" onClick={handleMenu}>
          <img src={icMenu} alt="Menu" className="image-header-wrapper" />
        </h1>
      </div>
      <Modal isOpen={modalIsOpen} className="modal-html">
        <HTML handleCloseHTMLView={handleCloseHTMLView} />
      </Modal>
    </div>
  );
}

export default Header;
