import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../components/UI/Button/Button';

export default {
  title: 'DIYBA SG/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'SEARCH PROPERTIES',
  classType: 'default'
};

export const SearchProperties = Template.bind({});
SearchProperties.args = {
  label: 'SEARCH PROPERTIES',
  classType: 'btn-search'
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel',
  classType: 'btn-cancel'
};

export const MAS = Template.bind({});
MAS.args = {
  label: 'Mark as sold',
  classType: 'btn-mas'
};

export const Import = Template.bind({});
Import.args = {
  label: 'Import Property',
  classType: 'btn-import'
};

export const CancelLB = Template.bind({});
CancelLB.args = {
  label: 'Cancel',
  classType: 'btn-cancel__lb'
};

export const SaveLB = Template.bind({});
SaveLB.args = {
  label: 'Save',
  classType: 'btn-save__lb'
};

export const HelpLB = Template.bind({});
HelpLB.args = {
  label: 'Get Help From DIYBA',
  classType: 'btn-help__lb'
};
