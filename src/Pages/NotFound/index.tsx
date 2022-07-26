import React from "react";

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
