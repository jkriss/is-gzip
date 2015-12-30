var test = require('tape');
var isGzip = require('../index');
var path = require('path');

test('recognize gzip', function(t) {
  t.plan(1);
  t.true(isGzip(path.join(__dirname, './hello.txt.gz')), 'hello.txt.gz is gzipped');
})

test('recognize non-gzip', function(t) {
  t.plan(1);
  t.false(isGzip(path.join(__dirname, './hello.txt')), 'hello.txt is not gzipped');
})
