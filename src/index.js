import Promise from 'bluebird';
import File from 'vinyl';
import streamToString from 'stream-to-string';

module.exports = (file, enc) => {
  if (!(file instanceof File)) {
    return Promise.reject(new TypeError('First argument must be a Vinyl file'));
  }

  if (file.isBuffer()) {
    return Promise.resolve(file.contents.toString(enc));
  } else if (file.isStream()) {
    // TODO: support encoding in streamToString
    return streamToString(file.contents);
  }

  return Promise.resolve('');
};
