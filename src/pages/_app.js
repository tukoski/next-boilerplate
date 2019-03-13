import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
/* Containers */
import PageLayout from "containers/Page";
/* Helpers */
import withReduxStore from "utils/with-redux-store";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore, router } = this.props;
    return (
      <Container className="full-height">
        <Head>
          <title>My page title</title>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Description" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/static/favicon.png" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
        </Head>

        <Provider store={reduxStore}>
          <PageLayout params={router.query}>
            <Component {...pageProps} />
          </PageLayout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
