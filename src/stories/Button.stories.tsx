import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './component/Btn/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    numberOfWidth: {
      control: { min: 100, max: 1000, type: 'range' },
    },
    checked: {
      // control: { type: 'radio' },
    },

    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BtnNormal = Template.bind({});
BtnNormal.args = {
  backgroundColor: 'transparent',
  label: 'Button',
  numberOfWidth: 100,
  colorBorder: 'blue',
  checked: false,
};
