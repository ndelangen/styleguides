const path = require('path');

module.exports = function(storybookBaseConfig, configType) {

  storybookBaseConfig.module.loaders.push({
      test: /.jsx?/,
      loaders: ["babel-loader"],
      include: path.resolve(__dirname, '../../components')
    });

  storybookBaseConfig.module.loaders.push({
    test: /.css/,
    loaders: [ 'style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' ],
    include: path.resolve(__dirname, '../../components')
  });

  return storybookBaseConfig;
};
