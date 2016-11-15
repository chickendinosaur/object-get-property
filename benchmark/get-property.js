require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const mockObject = require('../mocks/deep-object');
const getObjectProperty = require('../lib/get-property');
const lodashGet = require('lodash.get');

/*
Setup.
*/

/*
Teardown.
*/

function teardown() {}

suite
	.add(`getProperty(obj, 'one.2.three')`, function () {
		getObjectProperty(mockObject, 'one.2.three');
	})
	.add(`lodashGet(obj, 'one.2.three')`, function () {
		lodashGet(mockObject, 'one[2].three');
	})
	.on('cycle', function (event) {
		console.log(String(event.target));
		teardown();
	})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));

		if (typeof window === 'object') {
			window.close();
		}
	})
	// Run async
	.run({ 'async': false });
