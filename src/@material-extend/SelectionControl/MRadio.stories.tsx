import React from 'react';
import { Story, Meta } from '@storybook/react';
import MRadio from './MRadio';
import { MRadioProps } from './MRadio';

const meta: Meta = {
  title: '@material-extend/Radio',
  component: MRadio,
};

export default meta;

const Template: Story<MRadioProps> = (args: MRadioProps) => (
  <MRadio {...args} />
);
export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
