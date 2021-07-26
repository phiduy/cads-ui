import React from 'react';
import { Story, Meta } from '@storybook/react';
import MBadge from './MBadge';
import { MBadgeProps } from './MBadge';

const meta: Meta = {
  title: '@material-extend/Badge',
  component: MBadge,
  argTypes: {
    color: {
      description: 'Change color Badge',
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

const Template: Story<MBadgeProps> = (args: MBadgeProps) => (
  <MBadge {...args} />
);
export const Default = Template.bind({});

Default.args = {
  children: 'Badge',
  color: 'primary',
  variant: 'dot'
};
