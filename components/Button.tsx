import Link from "next/link";
import styles from "./Button.module.scss";

interface Button {
  children: JSX.Element;
  href?: string;
  onClick?: () => void;
}

const Button = ({ children, href, onClick }: Button) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.Link}>{children}</a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.Button}>
      {children}
    </button>
  );
};

export { Button };
