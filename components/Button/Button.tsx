import Link from "next/link";
import styles from "./Button.module.css";

export interface ButtonProps {
  children: JSX.Element | string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  href,
  onClick,
  disabled,
}: ButtonProps) => {
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
    <button
      onClick={onClick}
      className={styles.Button}
      type={type}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };
