import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "General/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Example Button</Button>
);

export const Link = Template.bind({});
Link.args = {
  href: "localhost:3000",
};

export const Action = Template.bind({});
export const ActionDisabled = Template.bind({});
ActionDisabled.args = {
  disabled: true,
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  disabled: true,
  href: "localhost:3000",
};
