import React from "react";
/* Antd */
import { Layout } from "antd";
const { Content } = Layout;
/* Components */
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
/* Styles */
import "./styles.less";

function LocalLayout({ children }) {
  return (
    <Layout className="main-layout">
      <Header />

      <Layout>
        <Sidebar />

        <Content>{children}</Content>
      </Layout>

      <Footer />
    </Layout>
  );
}

export default LocalLayout;
