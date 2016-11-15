'use strict';

const test = require('tape');
const getObjectProperty = require('../../lib/get-property');
const mockObject = require('../../mocks/deep-object');

test('get-property', function (assert) {
	assert.equal(getObjectProperty(mockObject, 'one.2.three'), true, 'More than one level deep.');
	assert.equal(getObjectProperty(undefined, 'one.2.three'), undefined, 'Exits on undefined as first param.');
	assert.equal(getObjectProperty(mockObject, 'one.2.four'), undefined, 'Returns undefined on property not found.');

	assert.end();
});
