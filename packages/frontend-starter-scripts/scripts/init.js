#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const path = require('path');

const init = function(root, cwd) {
  console.log(cwd);
  console.log(path.resolve(process.cwd(), 'src'));
  // fs.copySync(
  //   path.join(cwd, '../../frontend-starter-scripts', 'src'),
  //   path.join(root, 'src')
  // );
};
module.exports = init;
