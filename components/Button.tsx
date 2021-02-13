import Link from "next/link";
import styles from "./Button.module.scss";

interface Button {
  children: JSX.Element;
  href?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}

const Button = ({ children, type = "button", href, onClick }: Button) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.Button}>
          <span>{children}</span>
        </a>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={styles.Button} type={type}>
      <span>{children}</span>
    </button>
  );
};

export { Button };
