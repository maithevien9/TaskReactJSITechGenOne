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
  const [DataCheckBtnheaderHTML, setDataCheckBtnheaderHTML] = useState(false);
  const [DataCheckBtnheaderCSS, setDataCheckBtnheaderCSS] = useState(false);
  const [DataCheckBtnheaderRuby, setDataCheckBtnheaderRuby] = useState(false);
  const [DataCheckBtnheaderPHP, setDataCheckBtnheaderPHP] = useState(false);
  const [DataCheckBtnheaderPython, setDataCheckBtnheaderPython] = useState(
    false
  );
  const [DataCheckBtnheaderMenu, setDataCheckBtnheaderMenu] = useState(false);
  const [dataCheckMenu, setdataCheckMenu] = useState(false);

  const showMenu = () => setdataCheckMenu(!dataCheckMenu);
  const handleCloseHTMLView = () => {
    setModalIsOpen(false);
  };
  const HandleOpenHTMLView = () => {
    setModalIsOpen(true);
  };

  return (
    <div className="WrapperHeader">
      <div className="warpperHeaderLeft">
        <h1
          className="styleTextHeader"
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => setDataCheckBtnheaderHTML(true)}
          onMouseLeave={() => setDataCheckBtnheaderHTML(false)}
          style={
            DataCheckBtnheaderHTML
              ? styles.wrapperTextHeader1
              : styles.wrapperTextHeader2
          }
        >
          HTML
        </h1>
        <h1
          className="styleTextHeader"
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => setDataCheckBtnheaderCSS(true)}
          onMouseLeave={() => setDataCheckBtnheaderCSS(false)}
          style={
            DataCheckBtnheaderCSS
              ? styles.wrapperTextHeader1
              : styles.wrapperTextHeader2
          }
        >
          CSS
        </h1>
        <h1
          className="styleTextHeader"
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => setDataCheckBtnheaderRuby(true)}
          onMouseLeave={() => setDataCheckBtnheaderRuby(false)}
          style={
            DataCheckBtnheaderRuby
              ? styles.wrapperTextHeader1
              : styles.wrapperTextHeader2
          }
        >
          Ruby
        </h1>
        <h1
          className="styleTextHeader"
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => setDataCheckBtnheaderPHP(true)}
          onMouseLeave={() => setDataCheckBtnheaderPHP(false)}
          style={
            DataCheckBtnheaderPHP
              ? styles.wrapperTextHeader1
              : styles.wrapperTextHeader2
          }
        >
          PHP
        </h1>
        <h1
          className="styleTextHeader"
          onClick={HandleOpenHTMLView}
          onMouseEnter={() => setDataCheckBtnheaderPython(true)}
          onMouseLeave={() => setDataCheckBtnheaderPython(false)}
          style={
            DataCheckBtnheaderPython
              ? styles.wrapperTextHeader1
              : styles.wrapperTextHeader2
          }
        >
          Python
        </h1>
      </div>
      <div className="warpperHeaderRight">
        <h1 className="styleTextHeaderRight" onClick={handleMenu}>
          <img src={icMenu} alt="Menu" className="wrapperImageHeader" />
        </h1>
      </div>
      <Modal isOpen={modalIsOpen} className="ModalHTML">
        <HTML handleCloseHTMLView={handleCloseHTMLView} />
      </Modal>
    </div>
  );
}
let styles = {
  wrapperTextHeader1: {
    backgroundColor: "black",
  },
  wrapperTextHeader2: {
    backgroundColor: "#2E475C",
  },
};
export default Header;
