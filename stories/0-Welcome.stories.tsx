import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import {addDecorator} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Test from "../pages/"
export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Test/>;

ToStorybook.story = {
  name: 'to Storybook',
};
