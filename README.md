# stdin-line-open

[![Greenkeeper badge](https://badges.greenkeeper.io/jihchi/stdin-line-open.svg)](https://greenkeeper.io/)

[![npm](https://img.shields.io/npm/v/stdin-line-open.svg)](https://www.npmjs.com/package/stdin-line-open)
[![Build Status](https://travis-ci.org/jihchi/stdin-line-open.svg?branch=master)](https://travis-ci.org/jihchi/stdin-line-open)
[![Coverage Status](https://coveralls.io/repos/github/jihchi/stdin-line-open/badge.svg?branch=master)](https://coveralls.io/github/jihchi/stdin-line-open?branch=master)
[![Dependency Status](https://david-dm.org/jihchi/stdin-line-open.svg)](https://david-dm.org/jihchi/stdin-line-open)
[![npm](https://img.shields.io/npm/dm/stdin-line-open.svg)](https://www.npmjs.com/package/stdin-line-open)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jihchi/stdin-line-open/master/LICENSE)

> Read line from stdin and trigger open job if line is matched

## Install

```sh
npm i -D stdin-line-open
```

## Usage

```js
import createStdinLineOpen from 'stdin-line-open';

// create a stdin listener
const stdinLineOpen = createStdinLineOpen({
  match: 'open',
  open: 'http://google.com'
});

// starts to listen stdin.
// input "open" and enter on CLI, then it'll
// open "http://google.com" in browser for you.
stdinLineOpen();
```

## License

MIT © [Archie Lee](https://github.com/jihchi/stdin-line-open)
