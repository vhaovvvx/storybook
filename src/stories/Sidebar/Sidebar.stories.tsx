import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from '../../components/UI/Sidebar/Sidebar';

export default {
  title: 'DIYBA SG/Sidebar',
  component: Sidebar,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const WebApp = Template.bind({});
