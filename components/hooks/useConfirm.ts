import { useState } from "react";
import { ConfirmPromptProps } from "../ConfirmPrompt/ConfirmPrompt";

interface handlers {
  onCancel: () => any;
  onConfirm: () => any;
}

type hook = () => [
  ConfirmPromptProps,
  (message: string, handlers: handlers) => void
];

export const useConfirm: hook = () => {
  const [state, setState] = useState({
    display: false,
    message: "",
    onConfirm: () => {},
    onCancel: () => {},
  });

  const setConfirm = (message, { onConfirm, onCancel }) => {
    setState({
      display: true,
      message,
      onCancel: () => {
        setState({ ...state, display: false });
        onCancel();
      },
      onConfirm: () => {
        setState({ ...state, display: false });
        onConfirm();
      },
    });
  };

  return [state, setConfirm];
};
