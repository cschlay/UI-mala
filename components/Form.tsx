import { FormEvent } from "react";
import styles from "./Form.module.scss";

/**
 * Form element wrapper, always use this and not <form> because onSubmit
 * prop is wrapped.
 *
 * @param children
 * @param onSubmit
 * @constructor
 */
const Form = ({
  children,
  onSubmit,
}: {
  children: JSX.Element;
  onSubmit: () => void;
}) => {
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
