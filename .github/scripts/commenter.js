module.exports = ({github, context}) => {
  const path = require('node:path');
  const globSearch = require('glob');

  function findTerraformDirectories() {
    var directories = []
  
    let files = []
    files = globSearch.sync("**/*.tf", {})
    files.forEach(file => {
      var directory = path.dirname(file)
      if (directories.indexOf(directory) === -1)
        directories.push(directory)
    });
  
    return directories.sort()
  }

  // Run:
  var directories = findTerraformDirectories();
  console.log(directories)
}
