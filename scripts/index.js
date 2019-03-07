#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
var child_process = require('child_process');

let folderName = process.argv[2];
if (folderName) {
  folderName = folderName.toString();
} else {
  console.log(
    'Please specify a directory name to install frontend starter toolkit in'
  );
  process.exit(1);
}
fs.ensureDirSync(folderName);

const frontendStarterToolkitPackacgeVersion = JSON.parse(
  fs.readFileSync('package.json', 'utf8')
).version;

const packageJson = {
  name: folderName,
  version: '0.0.1',
  scripts: {
    start: 'frontend-starter-toolkit start',
    build: 'frontend-starter-toolkit build',
    test: 'frontend-starter-toolkit test',
    eject: 'frontend-starter-toolkit eject',
  },
  dependencies: {
    'frontend-starter-toolkit': frontendStarterToolkitPackacgeVersion,
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
  child_process.execSync('yarnpkg --version', { stdio: 'ignore' });
  isYarnInstalled = true;
} catch (e) {
  isYarnInstalled = false;
}

fs.copySync(path.join(process.argv[1], '../..', 'src'), path.join(root, 'src'));

process.chdir(root);
if (isYarnInstalled) {
  child_process.execSync('yarn', { stdio: 'inherit' });
} else {
  child_process.execSync('npm install', { stdio: 'inherit' });
}
