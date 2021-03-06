import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Menu } from "./Menu";
import styles from "./Layout.module.scss";

const Layout = ({ children, title }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export { Layout };
