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
  testTaskLocalWasRun: function(test) {
    test.expect(3);
    var expected = {
      cmd: {
        command: 'loadAndRun',
        args: [null, 'testTask:local'],
      }
    };
    var actual = grunt.config('stg.test');
    test.deepEqual(actual, expected, 'stage:<task> should execute <task>:<stage> when it exists.');
    test.equal(grunt.config('stg.stage'), 'local', "stage 'local' should be loaded");
    test.ok(grunt.file.exists('tmp/local'), 'task testTask:local should have run and created file');
    test.done();
  },
};
