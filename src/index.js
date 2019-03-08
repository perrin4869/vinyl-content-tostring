import streamToString from 'stream-to-string';

module.exports = (file, enc) => {
  if (
    !file
    || typeof file.isBuffer !== 'function'
    || typeof file.isStream !== 'function'
  ) {
    return Promise.reject(new TypeError('First argument must be a Vinyl file'));
  }

  if (file.isBuffer()) {
    return Promise.resolve(file.contents.toString(enc));
  }

  if (file.isStream()) {
    // TODO: support encoding in streamToString
    return streamToString(file.contents, enc);
  }

  return Promise.resolve('');
};
