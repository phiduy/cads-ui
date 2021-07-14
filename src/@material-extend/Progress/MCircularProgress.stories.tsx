import React from 'react';
import { Story, Meta } from '@storybook/react';
import MCircularProgress from './MCircularProgress';
import { MCircularProgressProps } from './MCircularProgress';

const meta: Meta = {
  title: '@material-extend/Progress',
  component: MCircularProgress,
  argTypes: {
    color: {
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    variant: {
      table: {
        defaultValue: {
          summary: 'indeterminate',
        },
      },
    },
  },
};

export default meta;

const Template: Story<MCircularProgressProps> = (
  args: MCircularProgressProps
) => <MCircularProgress {...args} />;
export const Default = Template.bind({});

Default.args = {
  color: 'primary',
};
