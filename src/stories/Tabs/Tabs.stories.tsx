import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tabs from '../../components/UI/Tabs/Tabs';
import {
  HomeOutlined,
  HeartOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

export default {
  title: 'DIYBA SG/Tabs',
  component: Tabs,
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const arr1 = [
  {
    icon: <HomeOutlined />,
    name: 'properties'
  },
  {
    icon: <HeartOutlined />,
    name: 'markets'
  },
  {
    icon: <EnvironmentOutlined />,
    name: 'saved'
  }
];

const arr2 = [
  {
    icon: <HomeOutlined />,
    name: 'properties'
  },
  {
    icon: <HeartOutlined />,
    name: 'markets'
  }
];

export const Default = Template.bind({});
Default.args = {
  mw: '1500px',
  lists: arr1
};

export const TwoItems = Template.bind({});
TwoItems.args = {
  mw: '1500px',
  lists: arr2
};

export const TwoItemsV2 = Template.bind({});
TwoItemsV2.args = {
  mw: '900px',
  lists: arr2
};
