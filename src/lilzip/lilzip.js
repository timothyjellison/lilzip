var fs = require('fs');
var archive = require('archiver')('zip');

module.exports = function(output, destName) {
  fs.createWriteStream(output);

  output.on('close', function() {
    console.log(`Zip complete! ${archive.pointer()} total bytes`);
  });

  archive.on('error', function(err){
    throw err;
  });

  archive.pipe(output);
  archive.directory(destName, false);
  archive.finalize();
}
