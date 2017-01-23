import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';

import Component from './index';

import * as defaultData from './data/default';
import * as detailedData from './data/detailed';

const getProps = () => ({
  id: text('Id', 'fe'),
  name: text('Name', 'John Jacksson')
});

storiesOf('Molecule ListItem', module)
  .addDecorator(withKnobs)
  .add('dynamic', () => (
    <Component {...getProps()} />
  ))
  .add('default', () => (
    <Component {...defaultData} />
  ))
  .add('detailed', () => (
    <Component {...detailedData} />
  ));
