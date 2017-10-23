const env = process.env.NODE_ENV || 'production';

module.exports = {
  presets: [['env', { targets: { node: 4 } }]],
  plugins: [...(env === 'test' ? ['istanbul'] : [])],
};
