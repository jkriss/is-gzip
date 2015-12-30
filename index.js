var fs = require('fs');
var isGzip = require('is-gzip');

module.exports = function(filePath) {
  var buf = new Buffer(3);
  var fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buf, 0, 3);
  fs.closeSync(fd);
  return isGzip(buf);
}
