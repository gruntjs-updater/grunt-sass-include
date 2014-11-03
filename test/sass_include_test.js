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

exports.sass_include = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  sass: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.sass');
    var expected = grunt.file.read('test/expected/default_options.sass');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  scss: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.scss');
    var expected = grunt.file.read('test/expected/default_options.scss');

    test.equal(actual, expected, 'should describe what the default behaviour is.');
    test.done();
  }
};
