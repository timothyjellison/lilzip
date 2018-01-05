const path = require('path');

module.exports = function(srcName, destName) {
  const endsInZip = /\.zip$/;

  if (destName) {
    if (endsInZip.test(destName)) {
      return destName;
    } else {
      return `${destName}.zip`
    }
  } else {
    return `${srcName.split(path.sep).pop()}.zip`;
  }
}
