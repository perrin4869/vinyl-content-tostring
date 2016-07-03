# vinyl-contents-tostring

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coverage Status][coveralls-badge]][coveralls]
[![Dependency Status][dependency-status-badge]][dependency-status]
[![devDependency Status][dev-dependency-status-badge]][dev-dependency-status]

> Convert vinyl content into string

## Install

```
$ npm install vinyl-contents-tostring
```


## Usage

```js
const vfs = require('vinyl-fs');
const map = require('map-stream');
const vinylToString = require('vinyl-contents-tostring');

vfs.src(['./package.json'])
.pipe(map((file, cb) => (
  vinylToString(file)
  .then(contents => {
    console.log(contents);
  })
  .asCallback(cb)
)));
```

## API

### vinylToString(file, enc)

Returns a promise to the contents of the vinyl file, regardless of stream or buffer files. Optionally, it accepts the encoding of the file

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

[build-badge]: https://img.shields.io/travis/perrin4869/vinyl-contents-tostring/master.svg?style=flat-square
[build]: https://travis-ci.org/perrin4869/vinyl-contents-tostring

[npm-badge]: https://img.shields.io/npm/v/vinyl-contents-tostring.svg?style=flat-square
[npm]: https://www.npmjs.org/package/vinyl-contents-tostring

[coveralls-badge]: https://img.shields.io/coveralls/perrin4869/vinyl-contents-tostring/master.svg?style=flat-square
[coveralls]: https://coveralls.io/r/perrin4869/vinyl-contents-tostring

[dependency-status-badge]: https://david-dm.org/perrin4869/vinyl-contents-tostring.svg?style=flat-square
[dependency-status]: https://david-dm.org/perrin4869/vinyl-contents-tostring

[dev-dependency-status-badge]: https://david-dm.org/perrin4869/vinyl-contents-tostring/dev-status.svg?style=flat-square
[dev-dependency-status]: https://david-dm.org/perrin4869/vinyl-contents-tostring#info=devDependencies
