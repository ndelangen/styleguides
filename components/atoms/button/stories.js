import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Component from './index';

import * as lengths from './data/lengthcases';
import * as sizes from './css/size.css';
import * as colors from './css/color.css';

storiesOf('Atom button', module)
  .add('empty', () => (
    <Component>HELLO TESTING</Component>
  ))
  .add('lengths', () => <div>
    {Object.values(lengths).map(string => <Component>{string}</Component>)}
  </div>)
  .add('sizes', () => <div>
    {Object.keys(sizes).map(size => <Component size={size}>{lengths.length3}</Component>)}
  </div>)
  .add('colors', () => <div>
    {Object.keys(colors).map(color => <Component color={color}>{lengths.length3}</Component>)}
  </div>);
