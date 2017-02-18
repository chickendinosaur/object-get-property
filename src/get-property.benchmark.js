require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const isBrowser = typeof window === 'object';

if (isBrowser) {
    window.Benchmark = Benchmark;
}

/*
Setup.
*/

const mockObject = require('../mocks/deep-object');
const getObjectProperty = require('./get-property');

/*
Teardown.
*/

function teardown() {}

suite
    .add(`getProperty(objChain, 'one.2.three'`, function () {
        getObjectProperty(mockObject.objChain, 'one.2.three');
    })
    .add(`getProperty(objChain, 'one.2.three', false)`, function () {
        getObjectProperty(mockObject.objChain, 'one.2.three', false);
    })
    .add(`getProperty(arrayChain, 'one[2].three')`, function () {
        getObjectProperty(mockObject.arrayChain, 'one[2].three');
    })
    .add(`getProperty(arrayChain, 'one[2].three', false)`, function () {
        getObjectProperty(mockObject.arrayChain, 'one[2].three', false);
    })
    .on('cycle', function (event) {
        var output = String(event.target);
        output = output.substring(0, output.indexOf('ops/sec') + 7);
        console.log('\x1b[33m%s\x1b[0m', output);
    })
    .on('complete', function () {
        if (isBrowser) {
            window.close();
        }
    })
    // Run async
    .run({ 'async': false });

