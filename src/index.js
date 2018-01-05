var initialize = require('./initialize/initialize');
var lilzip = require('./lilzip/lilzip')

var srcName = process.argv[2] || __dirname;
var destName = process.argv[3] || srcName;

lilzip(initialize(srcName, destName), destName);
