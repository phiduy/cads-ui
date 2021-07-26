import React from 'react';
import { Story, Meta } from '@storybook/react';
import MChip from './MChip';
import { MChipProps } from './MChip';

const meta: Meta = {
  title: '@material-extend/Chip',
  component: MChip,
};

export default meta;

const Template: Story<MChipProps> = (args: MChipProps) => <MChip {...args} />;
export const Default = Template.bind({});

Default.args = {
  color: 'default',
  label: 'hello',
};
