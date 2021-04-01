import Link from "next/link";
import styles from "./Button.module.css";
import { getClass } from "../../app/utilities/getClass";

export interface ButtonProps {
  children: JSX.Element | string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  // Styles
  primary?: boolean;
}

const Button = ({
  children,
  type = "button",
  href,
  onClick,
  disabled,
  primary,
}: ButtonProps) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={getClass(styles.Button, primary && styles.primaryColor)}>
          <span>{children}</span>
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={getClass(styles.Button, primary && styles.primaryColor)}
      type={type}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };
