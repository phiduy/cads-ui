import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchIcon from '@material-ui/icons/Search';
import MIconButton from './MIconButton';
import { MIconButtonProps } from './MIconButton';

const meta: Meta = {
  title: '@material-extend/IconButton',
  component: MIconButton,
  argTypes: {
    children: {
      description: 'Icon',
    },
  },
};

export default meta;

const Template: Story<MIconButtonProps> = (args: MIconButtonProps) => (
  <MIconButton {...args} />
);
export const Default = Template.bind({});

Default.args = {
  children: <SearchIcon />,
  color: 'primary',
};
