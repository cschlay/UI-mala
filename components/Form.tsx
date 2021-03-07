import { FormEvent } from "react";
import styles from "./Form.module.scss";
import { getClass } from "../app/utilities/getClass";

interface FormProps {
  children: JSX.Element;
  form: {
    id: string;
    data: any;
    setErrors: (errors: any) => void;
  };
  onSubmit: (data: any) => void;
  onValidation?: (data: any) => any;
}

/**
 * Form element wrapper, always use this and not <form> because onSubmit
 * prop is wrapped.
 *
 * @param children
 * @param onSubmit
 * @param onValidation async function to validate the data
 * @param form
 * @constructor
 */
const Form = ({ children, onSubmit, onValidation, form }: FormProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const handleValidation = onValidation
      ? onValidation
      : async () => {
          console.warn(`Form ${form.id} has not defined "onValidation" prop.`);
          return form.data;
        };

    handleValidation(form.data)
      .then((validatedData: any) => {
        onSubmit(validatedData);
      })
      .catch((errors: any) => {
        if (errors) {
          form.setErrors(errors);
        } else {
          console.error(`An error occurred when validating "${form.id}" form.`);
          onSubmit(form.data);
        }
      });
  };

  return (
    <form
      id={`form__${form.id}`}
      onSubmit={handleSubmit}
      method="post"
      className={getClass(styles.Form)}
    >
      {children}
    </form>
  );
};

export { Form };
