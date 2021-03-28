import { Button } from "./Button/Button";
import { Logo } from "./Logo";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.Menu}>
      <Logo />
      <div>
        <Button href="/login">Sign In</Button>
      </div>
    </nav>
  );
};

export { Menu };
