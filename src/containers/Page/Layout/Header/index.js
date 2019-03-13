import React from "react";
import { FormattedMessage } from "react-intl";
/* Styles */
import "./styles.less";

function Header(props) {
  return (
    <div id="Header">
      <FormattedMessage id="Header.title" />
    </div>
  );
}

export default Header;
