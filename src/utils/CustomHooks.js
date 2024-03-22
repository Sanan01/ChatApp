// @flow
import { useRef } from "react";

export const useInputProps = (formObj, name) => {
  const { control, handleSubmit, formState: { errors } } = formObj;
  const inputRef = useRef(null);
  return { forwardRef: inputRef, control: control, handleSubmit, name, error: errors[name] };
};