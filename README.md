# is-gzip-file

**isGzipFile** reads the first two bytes of a file to see if they match the [magic number for gzip](https://en.wikipedia.org/wiki/Gzip#File_format) (`1f 8b`).

This is useful if you have a gzip task that shouldn't reprocess files, or if you have a web
server that is server pre-gzipped files (without a `.gz` suffix).

## Installation

`npm install is-gzip`

## Usage

    var isGzip('is-gzip');

    var isGzipped = isGzip('./some-file') // returns true or false
