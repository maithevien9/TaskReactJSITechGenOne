import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import "./Main.scss";
function Main() {
  const [dataCheckMenu, setdataCheckMenu] = useState(false);
  const handleMenu = () => {
    setdataCheckMenu(!dataCheckMenu);
  };
  return (
    <div className="main-wrapper">
      <Header handleMenu={handleMenu} />
      <div className="sroll-main-view">
        <div className="main-view-wrapper">
          <h3> </h3>

          {dataCheckMenu ? <Menu /> : <div></div>}
        </div>

        <Footer />
      </div>
    </div>
  );
}

let styles = {
  WrapperMain: {},
};
export default Main;
