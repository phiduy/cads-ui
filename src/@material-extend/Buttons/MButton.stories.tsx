import React from 'react';
import { Story, Meta } from '@storybook/react';
import MButton from './MButton';
import { MButtonProps } from './MButton';

const meta: Meta = {
  title: '@material-extend/Button',
  component: MButton,
  argTypes: {
    // label: {
    //   name: 'label',
    //   type: { name: 'string', required: false },
    //   defaultValue: 'Hello',
    //   description: 'demo description',
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: 'Hello' },
    //   },
    //   control: {
    //     type: 'text'
    //   }
    // }
    children: {
      description: 'Label',
    },
    size: {
      description: 'Set the size of button',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'small | medium | large',
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    variant: {
      description: 'Set the type of button',
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'contained | outlined | text',
        },
        defaultValue: {
          summary: 'contained',
        },
      },
    },
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
    loading: {
      description: 'If true, the button will show loading icon and disabled',
      control: { type: 'boolean' },
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    block: {
      description:
        'If true, the buttons will take up the full width of its container.',
      control: { type: 'boolean' },
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
  },
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

// export const Loading = Template.bind({});
// Loading.args = {
//   children: 'Button',
//   variant: 'contained',
//   color: 'primary',
//   loading: true,
// };
