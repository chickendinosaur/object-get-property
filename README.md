Made in response to the amount that I was using lodash.get to update data in a project and needed a better solution. Ability to cache all key chains to avoid garbage and maintain performance. Backwards compatible with lodash.get.

Passing false as the 3rd param will force no cache.

---  

# Specs  

## Overhead  

### @chickendinosaur/object-get-property
minified: 260 bytes  
gzipped: 212 bytes  

### lodash.get
minified: 6138 bytes  
gzipped: 2167 bytes  

## Performance  

### @chickendinosaur/object-get-property

getProperty(objChain, 'one.2.three' x 21,671,985 ops/sec  
getProperty(objChain, 'one.2.three', false) x 3,835,008 ops/sec  
getProperty(arrayChain, 'one[2].three') x 3,774,281 ops/sec  
getProperty(arrayChain, 'one[2].three', false) x 1,777,284 ops/sec  

### lodash.get

lodashGet(objChain, 'one.2.three') x 1,134,805 ops/sec  
lodashGet(arrayChain, 'one.2.three') x 1,274,468 ops/sec  
lodashGet(arrayChain, 'one[2].three') x 1,184,711 ops/sec  
---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/object-get-property

## Usage

```javascript
const getObjectProperty = require('@chickendinosaur/object-get-property');

let obj = {
	one: [
		{
			three: true
		},
		{
			three: true
		},
		{
			three: true
		}
	]
};

// Trim a custom char.
getObjectProperty(obj, 'one.2.three');

// Result

/*
true
*/
```
---  

# Development  

## Installation  

~/project/:

* npm install
* npm run test

## Build  

* npm run build

## Benchmarking  

* npm run benchmark

## Test  

* npm run test

---  

# License  

The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
