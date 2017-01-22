const path = require('path');

module.exports = function(storybookBaseConfig, configType) {

  storybookBaseConfig.module.loaders.push({
    test: /.js/,
    loaders: ["babel-loader"],
    include: path.resolve(__dirname, '../../components')
  });

  return storybookBaseConfig;
};
