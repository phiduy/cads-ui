import React from 'react';
import { Story, Meta } from '@storybook/react';
import MLabel from './MLabel';

import { MLabelProps } from './MLabel';

const meta: Meta = {
  title: '@material-extend/Label',
  component: MLabel,
};

export default meta;

const Template: Story<MLabelProps> = (args: MLabelProps) => (
  <MLabel {...args} />
);
export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  variant: 'filled',
  children: 'label1',
};
