#!/usr/bin/env node
const fs = require('fs-extra');
const folderName = process.argv.slice(2);
fs.ensureDirSync('./' + folderName);
