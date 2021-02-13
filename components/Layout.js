import React from "react";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Menu />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export { Layout };
