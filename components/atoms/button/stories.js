import React from 'react';

import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs';

import Component from './index';

import * as lengths from './data/lengthcases';
import * as sizes from './css/size.css';
import * as colors from './css/color.css';


const getProps = () => ({
  text: text('Text', 'HELLO BUTTON TEXT'),
  color: select('Color', Object.keys(colors)),
  size: select('Sizes', Object.keys(sizes))
});

storiesOf('Atom button', module)
  .addDecorator(withKnobs)
  .addWithInfo('info', `
    ## a heading

    A paragraph with some text

    Possible sizes:
    ${Object.keys(sizes)}

    Possible colors:
    ${Object.keys(colors)}`, () => (
      <Component size={getProps().size} color={getProps().color}>{getProps().text}</Component>
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
