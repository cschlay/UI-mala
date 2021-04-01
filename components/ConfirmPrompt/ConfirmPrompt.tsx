import styles from "./ConfirmPrompt.module.css";
import { Button } from "../Button/Button";

export interface ConfirmPromptProps {
  message: string;
  display: boolean;
  onCancel: () => any;
  onConfirm: () => any;
}

export const ConfirmPrompt = ({
  display,
  message,
  onCancel,
  onConfirm,
}: ConfirmPromptProps) => {
  if (display) {
    return (
      <div className={styles.background}>
        <div className={styles.foreground}>
          <p>{message}</p>
          <div className={styles.actions}>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onConfirm} primary>
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
