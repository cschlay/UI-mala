import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "General/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>asd</Button>;

export const Link = Template.bind({});
Link.args = {
  href: "localhost:3000",
};
