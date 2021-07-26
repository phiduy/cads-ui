import React from 'react';
import { Story, Meta } from '@storybook/react';
import MCheckbox from './MCheckbox';
import { MCheckboxProps } from './MCheckbox';

const meta: Meta = {
  title: '@material-extend/Checkbox',
  component: MCheckbox,
  argTypes: {
    color: {
      description: 'Change color button',
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

const Template: Story<MCheckboxProps> = (args: MCheckboxProps) => (
  <MCheckbox {...args} />
);
export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
