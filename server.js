const Parser = require('./paser');
const config = require('./config');

new Parser(config.parseUrl).parseTop();
new Parser(config.parseUrl).parseNews();