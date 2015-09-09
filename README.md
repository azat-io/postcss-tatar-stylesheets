# [postcss][postcss]-tatar-stylesheets [![Build Status](https://travis-ci.org/azat-io/postcss-tatar-stylesheets.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-tatar-stylesheets.svg)][npm] [![Dependency Status](https://gemnasium.com/azat-io/postcss-tatar-stylesheets.svg)][deps]

> PostCSS plugin for writing Tatar Style Sheets

## Install

With [npm](https://npmjs.org/package/postcss-tatar-stylesheets) do:

```
npm install postcss-tatar-stylesheets --save
```

## Example

### Input

```css
h1 {
    color: red;
}
```

### Output

```css
h1{color:red}
```

## API

### tatarStylesheets([options])

#### options

##### foo

Type: `boolean`
Default: `true`

Description of what it does. An example:

```js
var css = 'h1 { color: red }';
console.log(postcss([ require('postcss-tatar-stylesheets')({foo: true}) ]).process(css).css);

// => 'h1{color:red}'
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## Contributing

Pull requests are welcome. If you add functionality, then please add unit tests
to cover it.

## License

MIT © [Azat S.](https://github.com/azat-io/postcss-tatar-stylesheets)

[ci]:      https://travis-ci.org/azat-io/postcss-tatar-stylesheets
[deps]:    https://gemnasium.com/azat-io/postcss-tatar-stylesheets
[npm]:     http://badge.fury.io/js/postcss-tatar-stylesheets
[postcss]: https://github.com/postcss/postcss
