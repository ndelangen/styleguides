import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Component from './index';

storiesOf('Molecule Searchbar', module)
  .add('empty', () => (
    <Component />
  ))
  .add('empty search', () => (
    <Component searchKey="" />
  ))
  .add('long search', () => (
    <Component searchKey="This is a super long text that was put into the searchbar" />
  ));
