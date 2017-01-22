import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Component from './index';

import * as defaultData from './data/default';

storiesOf('Page Home', module)
  .add('default', () => (
    <Component {...defaultData} />
  ));
