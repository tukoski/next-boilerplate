import React, { Component } from "react";
import { connect } from "react-redux";
/* Actions */
import { login } from "../../redux/actions/user";
/* Styles */
import "./style.scss";

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
    return <div id="home-page">Hello world in {userAgent}</div>;
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
