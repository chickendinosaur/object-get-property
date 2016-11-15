Retrieves the property value from an object or nested objects. Caches all key chains to avoid garbage and maintain performance.  

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

Test object: 
```javascript
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
```

### @chickendinosaur/object-get-property
getProperty(obj, 'one.2.three') x 28,143,940 ops/sec  

### lodash.get
lodashGet(obj, 'one[2].three') x 1,278,243 ops/sec  

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
