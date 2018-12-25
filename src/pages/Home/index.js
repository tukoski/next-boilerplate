import React, { Component } from "react";
import { connect } from "react-redux";
/* Antd */
import { Row, Col } from "antd";
/* Actions */
import { login } from "../../redux/actions/user";
/* Styles */
import "./style.less";

class Home extends Component {
  static async getInitialProps({ pathname, req, query }) {
    //Component initial load - server side
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  componentDidMount() {
    const { login } = this.props;
    login({ name: "Walter" });
  }

  render() {
    const { userAgent } = this.props;
    return (
      <Row id="home-page">
        <Col xs={24}>
          <img src="static/images/logo.jpg" />
          <span className="margin-left secondary-bg comment">
            No mames wey!
          </span>
          <p className="red margin-top">Hello world in {userAgent}</p>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { login }
)(Home);
