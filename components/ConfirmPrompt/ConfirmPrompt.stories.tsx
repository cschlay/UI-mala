import { ConfirmPrompt, ConfirmPromptProps } from "./ConfirmPrompt";
import { Story } from "@storybook/react";
import { useConfirm } from "../hooks/useConfirm";

export default {
  title: "General/ConfirmPrompt",
  component: ConfirmPrompt,
};

const Container = (args) => {
  const [confirm, setConfirm] = useConfirm();

  const handleSetConfirm = () => {
    setConfirm("sda", {
      onCancel: () => {},
      onConfirm: () => {},
    });
  };

  return (
    <>
      <button onClick={handleSetConfirm}>Show</button>
      <ConfirmPrompt {...confirm} />
    </>
  );
};

const Template: Story<ConfirmPromptProps> = (args) => <Container {...args} />;

export const Display = Template.bind({});
Display.args = {};
