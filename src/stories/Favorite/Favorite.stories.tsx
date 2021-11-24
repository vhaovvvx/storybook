import { ComponentStory, ComponentMeta } from '@storybook/react';
import Favorite from '../../components/UI/Favorite/Favorite';

export default {
  title: 'DIYBA SG/Favorite',
  component: Favorite,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = () => <Favorite />;

export const Default = Template.bind({});
