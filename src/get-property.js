/**
@license
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
*/

'use strict';

const keyChainCache = {};

module.exports = function (object, keyChainString, cacheKeys) {
	if (object === undefined) {
		return undefined;
	}

	if (keyChainString === undefined) {
		return object;
	}

	if (cacheKeys === false) {
		var keyChain = keyChainString.indexOf('[') === -1 ? keyChainString.split('.') : parseKeyChainString(keyChainString);
	} else {
		var keyChain = keyChainCache[keyChainString];
		if (keyChain === undefined) {
			keyChain = keyChainCache[keyChainString] = keyChainString.indexOf('[') === -1 ? keyChainString.split('.') : parseKeyChainString(keyChainString);
		}
	}

	var i = 0;

	while (i < keyChain.length) {
		object = object[keyChain[i]];

		if (object === undefined) {
			break;
		}

		++i;
	}


	return object;
};

function parseKeyChainString(keyChainString) {
	var i = 0;
	var strQueue = '';
	var n = keyChainString.length;
	var currChar = null;
	var keyChain = [];
	var beginArrayQueue = false;

	while (i < n) {
		currChar = keyChainString.charAt(i);

		if (beginArrayQueue === false) {
			if (currChar === '[' ||
				currChar === '.') {
				if (currChar === '[') {
					beginArrayQueue = true;
				}

				if (i > 0) {
					keyChain[keyChain.length] = strQueue;
					strQueue = '';
				}
			} else {
				strQueue += currChar;
			}
		} else if (currChar === ']') {
			beginArrayQueue = false;
			keyChain[keyChain.length] = strQueue;
			strQueue = '';

			if (keyChainString.charAt(i + 1) === '.') {
				i++;
			}
		} else {
			strQueue += currChar;
		}

		i++;
	}

	keyChain[keyChain.length] = strQueue;

	return keyChain;
}
