const env = process.env.NODE_ENV || 'production';

const plugins = env === 'test' ? ['istanbul'] : [];

module.exports = {
  presets: [['env', { targets: { node: 4 } }]],
  plugins,
};
