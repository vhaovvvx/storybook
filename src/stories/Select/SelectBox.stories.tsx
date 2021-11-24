import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectBox from '../../components/UI/Select/SelectBox';

export default {
  title: 'DIYBA SG/SelectBox',
  component: SelectBox,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof SelectBox>;

const Template: ComponentStory<typeof SelectBox> = () => <SelectBox />;

export const Default = Template.bind({});
