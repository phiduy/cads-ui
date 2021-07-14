import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MButtonGroupProps } from './MButtonGroup';
import MButtonGroup from './MButtonGroup';
import MButton from './MButton';

const meta: Meta = {
  title: '@material-extend/ButtonGroup',
  component: MButtonGroup,
  argTypes: {
    children: {
      description: 'React.Reactnode',
      control: { type: null },
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
    orientation: {
      description: 'The component orientation (layout flow direction).',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
      },
      defaultValue: 'horizontal',
    },
    sx: {
      control: { type: null },
    },
    classes: {
      control: { type: null },
    },
  },
};

export default meta;

const Template: Story<MButtonGroupProps> = (args: MButtonGroupProps) => (
  <MButtonGroup {...args} />
);
export const Default = Template.bind({});

Default.args = {
  children: [
    <MButton>Hello</MButton>,
    <MButton color="info">Hi</MButton>,
    <MButton color="secondary">Go</MButton>,
  ],
  variant: 'contained',
  color: 'primary',
};
