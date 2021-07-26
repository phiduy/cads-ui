import React from 'react';
import { Story, Meta } from '@storybook/react';
import MTimelineDot from './MTimelineDot';
import { MTimelineDotProps } from './MTimelineDot';

const meta: Meta = {
  title: '@material-extend/TimelineDot',
  component: MTimelineDot,
};

export default meta;

const Template: Story<MTimelineDotProps> = (args: MTimelineDotProps) => (
  <MTimelineDot {...args} />
);
export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
