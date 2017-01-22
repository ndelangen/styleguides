import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import InteractiveComponent from './interactive';

storiesOf('Dummy Interactive', module)
  .add('with some emoji', () => (
    <InteractiveComponent />
  ));
