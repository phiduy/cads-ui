import React from 'react';
import { Story, Meta } from '@storybook/react';
import MAvatar from './MAvatar';
import { MAvatarProps } from './MAvatar';

const meta: Meta = {
  title: '@material-extend/Avatar',
  component: MAvatar,
  argTypes: {
    color: {
      description: 'Change color avatar',
      control: { type: 'select' },
      options: [
        'inherit',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
      ],
      table: {
        type: {
          summary:
            'inherit | primary | secondary | info | success | warning | error',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
};

export default meta;

const Template: Story<MAvatarProps> = (args: MAvatarProps) => (
  <MAvatar {...args} />
);
export const Default = Template.bind({});

Default.args = {
  children: 'OP',
  color: 'info',
};
