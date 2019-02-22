#!/usr/bin/env node
const spawn = require('cross-spawn');

const [script, ...args] = process.argv.slice(2);

if (script) {
  const result = spawn.sync('node', [script, ...args], {
    stdio: 'inherit',
  });
  if (result.signal) {
    process.exit(1);
  } else {
    process.exit(result.status);
  }
}
