import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <a href="">LOGO</a>
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
    </div>
  );
};

export { Menu };
