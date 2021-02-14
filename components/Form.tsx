import { FormEvent } from "react";
import styles from "./Form.module.scss";

interface FormProps {
  children: JSX.Element;
  onSubmit: () => void;
}

/**
 * Form element wrapper, always use this and not <form> because onSubmit
 * prop is wrapped.
 *
 * @param children
 * @param onSubmit
 * @constructor
 */
const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} method="post" className={styles.Form}>
      {children}
    </form>
  );
};

export { Form };
