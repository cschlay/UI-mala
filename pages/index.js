import Head from "next/head";
import { urls } from "../app/urls";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import styles from "./index.module.scss";

/**
 * sadasds
 *
 * asdsad
 *
 * @returns JSX.Element
 */
const HomePage = () => {
  return (
    <>
      <Head>
        <title>UImala - Code Swim</title>
        <meta
          key="description"
          name="description"
          content="UImala is a programming project that has no purpose other than being technically good."
        />
      </Head>
      <Layout>
        <section className={styles.Hero}>
          <h1>Swimming in Code</h1>
          <p>Got thrown in the deep end and cannot swim?</p>

          <Button href={urls.login}>Start Journey</Button>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
