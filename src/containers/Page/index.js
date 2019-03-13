import React, { Component } from "react";
import { connect } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
/* Antd */
import { LocaleProvider } from "antd";
/* Components */
import Layout from "./Layout";
/* Actions */
//import { getUserInfo } from "redux/actions/user";
/* Helpers */
//import { getDataInStorage } from "utils/helpers";
/* Translations */
import translations from "utils/translations";
/* Styles */
import "styles/main.less";

class Page extends Component {
  componentWillMount() {
    const { language } = this.props;
    addLocaleData(translations[language].reactIntlPath);
    /* Verify the localStorage for the token 
    const { language, user, getUserInfo } = this.props;
    let token = getDataInStorage();
    if (token && token != "null" && !user.authenticated) {
      getUserInfo(token);
    }*/
  }

  render() {
    const { language, children } = this.props;
    return (
      <LocaleProvider locale={translations[language].antdPath}>
        <IntlProvider
          locale={language}
          messages={translations[language].messages}
        >
          <Layout children={children} />
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.data.language
  };
}

export default connect(mapStateToProps)(Page);
