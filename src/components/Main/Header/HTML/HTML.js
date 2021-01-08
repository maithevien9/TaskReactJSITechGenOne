import React from "react";
import PropTypes from "prop-types";
HTML.propTypes = {
  handleCloseHTMLView: PropTypes.func,
};
HTML.Authenication = {
  handleCloseHTMLView: null,
};

function HTML(props) {
  const { handleCloseHTMLView } = props;
  const HandleClose = () => {
    handleCloseHTMLView();
  };
  return (
    <div className="view-html-wrapper">
      <div onClick={HandleClose}>X</div>
    </div>
  );
}

export default HTML;
