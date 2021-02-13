import styles from "./Input.module.scss";
import { ChangeEvent, useEffect, useState } from "react";

interface Input {
  label?: string;
  form: {
    id: string;
    data: { [key: string]: any };
    errors: { [key: string]: [string] };
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  name: string;
}

const Input = ({ form, label, name, ...otherProps }: Input): JSX.Element => {
  const [inputId, setInputId] = useState("");

  useEffect(() => {
    setInputId(`input_${form.id}_${name}`);
  }, [form.id, name]);

  return (
    <div className={styles.Container}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={form.id}
        name={name}
        value={form.data[name]}
        onChange={form.handleChange}
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
