'use strict';

const help = require(`./help`);
const generate = require(`./generate`);
const version = require(`./version`);

module.exports = {
  [generate.name]: generate,
  [help.name]: help,
  [version.name]: version,
};
