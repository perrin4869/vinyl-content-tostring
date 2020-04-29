const { isVinyl } = require('vinyl');
const streamToString = require('stream-to-string');

module.exports = (file, enc) => (!isVinyl(file) // eslint-disable-line no-nested-ternary
  ? Promise.reject(new TypeError('First argument must be a Vinyl file'))
  : file.isBuffer() // eslint-disable-line no-nested-ternary
    ? Promise.resolve(file.contents.toString(enc))
    : file.isStream()
      ? streamToString(file.contents, enc)
      : Promise.resolve(''));
