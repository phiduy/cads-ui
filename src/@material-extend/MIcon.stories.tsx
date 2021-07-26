import React from 'react';
import { Story, Meta } from '@storybook/react';
import MIcon from './MIcon';
import icCharts from '../assets/icons/ic_charts.svg';
import { MIconProps } from './MIcon';
// const path = (name: string) => `../assets/icons/${name}.svg`;

const meta: Meta = {
  title: '@material-extend/Icon',
  component: MIcon,
};

export default meta;

const Template: Story<MIconProps> = (args: MIconProps) => <MIcon {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: icCharts,
  color: 'primary',
};
