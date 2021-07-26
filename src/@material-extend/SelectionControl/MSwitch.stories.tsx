import React from 'react';
import { Story, Meta } from '@storybook/react';
import MSwitch from './MSwitch';
import { MSwitchProps } from './MSwitch';

const meta: Meta = {
  title: '@material-extend/Switch',
  component: MSwitch,
};

export default meta;

const Template: Story<MSwitchProps> = (args: MSwitchProps) => (
  <MSwitch {...args} />
);
export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
