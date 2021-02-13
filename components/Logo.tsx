import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.Logo}>
        <span>UI</span>mala
      </a>
    </Link>
  );
};

export { Logo };
