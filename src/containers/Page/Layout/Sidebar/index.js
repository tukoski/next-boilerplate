import React from "react";
import { FormattedMessage } from "react-intl";
/* Antd */
import { Layout } from "antd";
const { Sider } = Layout;
/* Styles */
import "./styles.less";

function Sidebar() {
  return (
    <Sider id="Sidebar" width="20%">
      <div className="full-height">
        <h3>
          <FormattedMessage id="Sidebar.title" />
        </h3>
      </div>
    </Sider>
  );
}

export default Sidebar;
