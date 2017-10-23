import File from 'vinyl';
import { PassThrough } from 'stream';
import chai, { expect } from 'chai';

import vinylToString from '../src';

chai.use(require('chai-as-promised'));

describe('vinyl-contents-tostring', () => {
  describe('in streaming mode', () => {
    it('should return stream content', () => {
      // create the fake file
      const vinylFile = new File({
        path: 'foo',
        contents: new PassThrough(),
      });
      vinylFile.contents.end('test stream content');

      return expect(vinylToString(vinylFile)).become('test stream content');
    });

    it('should correctly use encoding', () => {
      // create the fake file
      const vinylFile = new File({
        path: 'bar',
        contents: new PassThrough(),
      });
      vinylFile.contents.end('this is a tést');

      return expect(vinylToString(vinylFile, 'ascii')).to.become('this is a tC)st');
    });
  });

  describe('in buffer mode', () => {
    it('should return buffer content', () => {
      // create the fake file
      const vinylFile = new File({
        path: 'bar',
        contents: Buffer.from('test buffer content'),
      });

      return expect(vinylToString(vinylFile)).become('test buffer content');
    });

    it('should correctly use encoding', () => {
      // create the fake file
      const vinylFile = new File({
        path: 'bar',
        contents: Buffer.from('this is a tést'),
      });

      return expect(vinylToString(vinylFile, 'ascii')).to.become('this is a tC)st');
    });
  });

  describe('misc tests', () => {
    it('should return an empty string', () => {
      const vinylFile = new File({ path: 'baz' });

      return expect(vinylToString(vinylFile)).become('');
    });

    it('should throw a type error', () => (
      expect(vinylToString({})).to.be.rejectedWith(TypeError, /First argument must be a Vinyl file/)
    ));
  });
});
