import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Component from './index';

import * as defaultData from './data/default';
import * as detailedData from './data/detailed';

storiesOf('Molecule Header', module)
  .add('default', () => (
    <Component {...defaultData} />
  ))
  .add('detailed', () => (
    <Component {...detailedData} />
  ));
