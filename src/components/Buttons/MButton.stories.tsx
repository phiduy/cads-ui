import React from 'react';
import { Story, Meta } from '@storybook/react';
import MButton from './MButton';
import { MButtonProps } from './MButton';

const meta: Meta = {
  title: 'Components/Button',
  component: MButton,
};

export default meta;

const Template: Story<MButtonProps> = (args: MButtonProps) => (
  <MButton {...args} />
);
export const Default = Template.bind({});

Default.args = {
  children: 'Default',
  variant: 'contained',
  color: 'primary',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  variant: 'contained',
  color: 'primary',
  loading: true,
};
