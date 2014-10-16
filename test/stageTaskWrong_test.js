'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stage = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  // stage:<stage> simple loading
  testStageTaskWrong: function(test) {
    test.expect(2);
    var stg = grunt.config('stg');
    test.ok(stg.test.fail, 'stage:<stage>:<task> should fail when <task> does not exist.');
    delete stg.test;
    test.deepEqual(stg, {}, "stage:<stage>:<task> should not load anything when <task> does not exist.");
    test.done();
  },
};