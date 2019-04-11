#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const path = require('path');

fs.copySync(path.join(process.argv[1], '../..', 'src'), path.join(root, 'src'));
