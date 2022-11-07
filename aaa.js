const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('terraform-docs markdown table --indent 2 .', { encoding: 'utf-8' });  // the default is 'buffer'


console.log(output);
