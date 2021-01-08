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
    <div className="WrapperMain">
      <Header handleMenu={handleMenu} />
      <div className="WrapperScrollMain">
        <div className="WrapperMainView">
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
