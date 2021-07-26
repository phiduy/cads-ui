import React from 'react';
import { Story, Meta } from '@storybook/react';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MBreadcrumbs from './MBreadcrumbs';

import { MBreadcrumbsProps } from './MBreadcrumbs';

const meta: Meta = {
  title: '@material-extend/Breadcrumbs',
  component: MBreadcrumbs,
};

export default meta;

const Template: Story<MBreadcrumbsProps> = (args: MBreadcrumbsProps) => (
  <MBreadcrumbs {...args} />
);
export const Default = Template.bind({});

Default.args = {
  links: [
    { name: 'Home', href: '#', icon: <HomeIcon /> },
    { name: 'Link1', href: '#', icon: <WhatshotIcon /> },
    { name: 'Link2', href: '#', icon: <GrainIcon /> },
    { name: 'Link3', href: '#', icon: <WhatshotIcon /> },
    { name: 'Link4', href: '#', icon: <WhatshotIcon /> },
    { name: 'Link5', href: '#', icon: <WhatshotIcon /> },
  ],
};
