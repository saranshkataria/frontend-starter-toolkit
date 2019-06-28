#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const path = require('path');

const init = function(root) {
  // copying the src directory
  fs.copySync(path.resolve(__dirname, '..', 'src'), path.join(root, 'src'));
};
module.exports = init;
