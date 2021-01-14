import React, { useState } from "react";
import Modal from "react-modal";
import "./Header.scss";
import PropTypes from "prop-types";
import icMenu from "../../../Images/icMenu.png";
import HTML from "./HTML/HTML";

Header.propTypes = {
  handleMenu: PropTypes.func,
};
Header.propTypes = {
  handleMenu: null,
};

function Header(props) {
  const { handleMenu } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseHTMLView = () => {
    setModalIsOpen(false);
  };
  const HandleOpenHTMLView = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="header-wrapper">
      <div className="header-left-wrapper">
        <h1 className="style-text-header" onClick={HandleOpenHTMLView}>
          HTML
        </h1>
        <h1 className="style-text-header" onClick={HandleOpenHTMLView}>
          CSS
        </h1>
        <h1 className="style-text-header" onClick={HandleOpenHTMLView}>
          Ruby
        </h1>
        <h1 className="style-text-header" onClick={HandleOpenHTMLView}>
          PHP
        </h1>
        <h1 className="style-text-header" onClick={HandleOpenHTMLView}>
          Python
        </h1>
      </div>
      <div></div>
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
