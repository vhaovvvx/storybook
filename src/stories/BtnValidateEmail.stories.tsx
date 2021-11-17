import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputValidateEmail } from '../components/view/InputEmail/InputValidateEmail';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InputValidateEmail',
  component: InputValidateEmail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // onClick: { action: 'asdasd' },
    // clickHandler: { action: 'asdasdasd' },
    numberOfWidth: {
      control: { min: 50, max: 1000, type: 'number', value: 70 },
    },
    backgroundColor: { control: 'color' },
  },
  // parameters: {
  //   actions: {
  //     handles: ['mouseover', 'click .btn'],
  //   },
  // },
} as ComponentMeta<typeof InputValidateEmail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputValidateEmail> = (args) => (
  <InputValidateEmail {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'text',
  size: 300,
  backgroundColor: 'transparent',
  numberOfWidth: 50,
};
