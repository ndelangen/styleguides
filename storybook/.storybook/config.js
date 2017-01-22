import { configure } from '@kadira/storybook';

function loadStories() {
  // require all files that match /.story.js$/ in the components folder
  const context = require.context(__dirname + './../../components', true, /\.story\.js$/);
  context.keys().forEach(key => context(key));

  require('../stories/index')
}

configure(loadStories, module);
