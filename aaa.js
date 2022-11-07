const path = require('node:path');
const glob = require('glob');
const execSync = require('child_process').execSync;

var directories = []

let files = []
files=glob.sync("**/*.tf", {})
console.log(files)
files.forEach(file => {
  var directory = path.dirname(file)
  if (directories.indexOf(directory) === -1)
    directories.push(directory)
});
console.log(directories.sort())

const output = execSync('terraform-docs markdown table --indent 2 .', { encoding: 'utf-8' });  // the default is 'buffer'
console.log(output);
