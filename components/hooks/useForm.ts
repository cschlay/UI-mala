import { ChangeEvent, useState } from "react";

interface useForm {
  id: string;
  data: any;
  errors: { [key: string]: [string] };
  setErrors: (data: any) => void;
  setNonFieldErrors: (errorList: any[]) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

/**
 * Works similarly as React Hook Form. https://react-hook-form.com/
 *
 *  const form = useForm({id: "reset-password", initialData: {"email": ""}}
 *  <Input form={form} />
 **
 * @param id
 * @param initialData
 */
const useForm = ({
  id,
  initialData,
}: {
  id: string;
  initialData: any;
}): useForm => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field: HTMLInputElement = event.target as HTMLInputElement;
    setData({
      ...data,
      [field.name]: field.value,
    });
  };

  const setNonFieldErrors = (errorList: any[]) => {
    setErrors({ ...errors, nonFieldError: errorList });
  };

  return {
    id,
    data,
    errors,
    setErrors,
    setNonFieldErrors,
    handleChange,
    reset: () => {
      setData(initialData);
    },
  };
};

export { useForm };
