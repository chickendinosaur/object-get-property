'use strict';

const tape = require('tape');
const tapes = require('tapes');
const test = tapes(tape, {
	delimiter: '->'
});

/*
Setup
*/

const getObjectProperty = require('./get-property');
const mockObject = require('../mocks/deep-object');

/*
Test
*/

test('Class', function (t) {

	/*
	beforeEach
	*/

	t.beforeEach(function (t) {
		t.end();
	});

	/*
	afterEach
	*/

	t.afterEach(function (t) {
		t.end();
	});

	/*
	Tests
	*/

	t.test('.method', function (t) {
		t.equal(getObjectProperty(mockObject.objChain, 'one.2.three'), true, 'More than one level deep.');
		t.equal(getObjectProperty(mockObject.arrayChain, 'one[2].three'), true, 'Array query.');
		t.equal(getObjectProperty(undefined, 'one.2.three'), undefined, 'Exits on undefined as first param.');
		t.equal(getObjectProperty(mockObject.objChain, 'one.2.four'), undefined, 'Returns undefined on property not found.');

		t.end();
	});

	t.end();
});
