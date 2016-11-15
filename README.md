Object helper methods.  

---  

# Specs  

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
		}
	]
};
```

### get-property
trim(str) x 20,108,670 ops/sec  
trim(str, pattern) x 30,210,867 ops/sec  
String.trim() x 12,210,630 ops/sec  

---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/object-utils

## Usage

```javascript
const getObjectProperty = require('@chickendinosaur/object-utils/get-property');

let obj = {
	one: [
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
