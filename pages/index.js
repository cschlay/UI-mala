import { urls } from "../app/urls";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import styles from "./index.module.scss";
/**
 * sadasds
 *
 * asdsad
 *
 * @returns 2
 */
function Home() {
  return (
    <Layout>
      <section className={styles.Hero}>
        <h1>Swimming in Code</h1>
        <p>Got thrown in the deep end and cannot swim?</p>

        <Button href={urls.login}>Start Journey</Button>
      </section>
    </Layout>
  );
}

export default Home;
