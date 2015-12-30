var readChunk = require('read-chunk');
var GzipMagic = new Buffer([0x1f, 0x8b]); // gzip files start with this

module.exports = function(filePath) {
  return readChunk.sync(filePath, 0, 2).equals(GzipMagic)
}
