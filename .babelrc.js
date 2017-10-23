const env = process.env.NODE_ENV || 'production';

module.exports = {
  presets: ['es2015'],
  plugins: [...(env === 'test' ? ['istanbul'] : [])],
};
