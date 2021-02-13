import { Button } from "./Button";
import { Logo } from "./Logo";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <Logo />
      <nav>
        <Button href="/login">Sign In</Button>
      </nav>
    </div>
  );
};

export { Menu };
