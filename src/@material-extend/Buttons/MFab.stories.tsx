import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchIcon from '@material-ui/icons/Search';
import MFab from './MFab';
import { MFabProps } from './MFab';

const meta: Meta = {
  title: '@material-extend/Fab',
  component: MFab,
  argTypes: {
    children: {
      description: 'Icon',
    },
  },
};

export default meta;

const Template: Story<MFabProps> = (args: MFabProps) => <MFab {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: <SearchIcon />,
  color: 'primary',
};
