import { configure } from '@kadira/storybook';

const loadStories = () => {
  // require all files that match /story.js$/ in the components folder
  const context = require.context(__dirname + './../../components', true, /stories\.js$/);
  context.keys().forEach(key => context(key));
}

configure(loadStories, module);
