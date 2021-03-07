import styles from "./Input.module.scss";
import { ChangeEvent, useEffect, useState } from "react";
import { getClass } from "../app/utilities/getClass";

interface Input {
  label?: string;
  form: {
    id: string;
    data: { [key: string]: any };
    errors: { [key: string]: [string] };
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  name: string;
  required: boolean;
}

const Input = ({
  form,
  label,
  name,
  required = true,
  ...otherProps
}: Input): JSX.Element => {
  const [inputId, setInputId] = useState("");

  useEffect(() => {
    setInputId(`form__${form.id}-${name}`);
  }, [form.id, name]);

  return (
    <div
      className={getClass(styles.Container, form.errors[name] && styles.error)}
    >
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        name={name}
        value={form.data[name]}
        onChange={form.handleChange}
        required={required}
        {...otherProps}
      />
      {form.errors[name] && (
        <ul>
          {form.errors[name].map((msg: string) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Input };
