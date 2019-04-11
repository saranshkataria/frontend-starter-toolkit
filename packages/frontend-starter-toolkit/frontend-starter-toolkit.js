#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
var childProcess = require('child_process');

let folderName = process.argv[2];
if (folderName) {
  folderName = folderName.toString();
} else {
  // eslint-disable-next-line no-console
  console.log(
    'Please specify a directory name to install frontend starter toolkit in'
  );
  process.exit(1);
}
fs.ensureDirSync(folderName);

const frontendStarterToolkitPackacgeVersion = JSON.parse(
  fs.readFileSync('./packages/frontend-starter-toolkit/package.json', 'utf8')
).version;

const packageJson = {
  name: folderName,
  version: '0.0.1',
  scripts: {
    start: 'frontend-starter-scripts start',
    build: 'frontend-starter-scripts build',
    test: 'frontend-starter-scripts test',
    eject: 'frontend-starter-scripts eject',
  },
  dependencies: {
    'frontend-starter-scripts': frontendStarterToolkitPackacgeVersion,
  },
  license: 'MIT',
};

const root = path.resolve(folderName);

fs.writeFileSync(
  path.join(root, 'package.json'),
  JSON.stringify(packageJson, undefined, 2) + os.EOL
);

let isYarnInstalled = false;
try {
  childProcess.execSync('yarnpkg --version', { stdio: 'ignore' });
  isYarnInstalled = true;
} catch (e) {
  isYarnInstalled = false;
}

process.chdir(root);
if (isYarnInstalled) {
  childProcess.execSync('yarn', { stdio: 'inherit' });
} else {
  childProcess.execSync('npm install', { stdio: 'inherit' });
}

require('frontend-starter-scripts/scripts/init.js');
