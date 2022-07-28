import React from "react";
import { Helmet } from "react-helmet";

const styles = {
  container: {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
  },

  image: {
    height: "455px",
  },

  text: {
    fontSize: "10px",
    "text-align": "center",
    color: "var(--cyan)",
  },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cacio | Página não encontrada</title>
        <meta name="description" content="Page not found" />
        <meta
          name="keywords"
          content="not found, page not found, erro, página não encontrada"
        ></meta>
      </Helmet>
      <img
        src="/assets/images/404.svg"
        alt="page not found"
        style={styles.image}
      />
      <a style={styles.text} href="https://storyset.com/web">
        Web illustrations by Storyset
      </a>
    </div>
  );
};

export default NotFound;
