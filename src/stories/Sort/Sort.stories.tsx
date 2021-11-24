import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sort from '../../components/UI/Sort/Sort';

export default {
  title: 'DIYBA SG/Sort',
  component: Sort,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = () => <Sort />;

export const Default = Template.bind({});
