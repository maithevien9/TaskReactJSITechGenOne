import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import "./Main.scss";

function Main() {
  const [CheckDataMenu, setCheckDataMenu] = useState(false);

  const handleMenu = () => {
    setCheckDataMenu(!CheckDataMenu);
  };

  return (
    <div className="main-wrapper">
      <Header handleMenu={handleMenu} />
      <div className="sroll-main-view">
        <div className="main-view-wrapper">
          <h3> </h3>
          {CheckDataMenu ? <Menu /> : <div></div>}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Main;
