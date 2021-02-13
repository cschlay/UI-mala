import { Logo } from "./Logo";
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <Logo />
      <nav>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </nav>
    </div>
  );
};

export { Menu };
