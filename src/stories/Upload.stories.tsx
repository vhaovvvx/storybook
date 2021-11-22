import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UploadFile from '../components/view/Button/Upload/UploadFile';

export default {
  title: 'Example/Upload',
  component: UploadFile,
  
} as ComponentMeta<typeof UploadFile>;

const Template: ComponentStory<typeof UploadFile> = (args) => (
  <UploadFile {...args} />
);

export const Uploadfile = Template.bind({});
Uploadfile.args = {
  //   typeChart: 'line',
  //   title: 'Portfolio performance',
  //   user: {},
};
