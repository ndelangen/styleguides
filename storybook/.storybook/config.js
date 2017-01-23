import React from 'react';
import { configure, setAddon } from '@kadira/storybook';

import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

import { setOptions } from '@kadira/storybook-addon-options';
setOptions({
  name: 'PROJECT DEMO',
  url: 'https://github.com/ndelangen/styleguides',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

const loadStories = () => {
  // require all files that match /story.js$/ in the components folder
  const context = require.context(__dirname + './../../components', true, /stories\.js$/);
  context.keys().forEach(key => context(key));
}

configure(loadStories, module);
