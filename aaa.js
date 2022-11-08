const path = require('node:path');
const globSearch = require('glob');
const execSync = require('child_process').execSync;

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

function isDocumentationOutdated(directory) {
  try {
    execSync(`terraform-docs markdown table --indent 2 --output-check --output-file README.md ${directory}`, { encoding: 'utf-8' });
  }
  catch (err) {
    return true
  }

  return false
}

function getTerraformDocumentation(directory) {
  return execSync(`terraform-docs markdown table --indent 2 ${directory}`, { encoding: 'utf-8' });  // the default is 'buffer'
}

function buildCommentOutput(directory, documentationOutput) {
  return `#### Update \`${directory}/README.md\` 📖
<details><summary>Show Markdown</summary>

\`\`\`
${documentationOutput}
\`\`\`
</details>

`;
}

function reviewTerraformDocumentation(directory) {
  if (isDocumentationOutdated(directory)) {
    if (commentBody === "") {
      commentBody += `### ⚠️ Terraform Documentation Outdated
`;
    }

    readmeDocumentation = getTerraformDocumentation(directory);
    commentBody += buildCommentOutput(directory, readmeDocumentation);
  }
}

// Run:
var directories = findTerraformDirectories();
console.log(directories)

var commentBody = ``

directories.forEach(directory => {
  reviewTerraformDocumentation(directory)
});

console.log(commentBody)





// var output = reviewTerraformDocumentation();



// try {
//   execSync('terraform-docs markdown table --indent 2 --output-check --output-file README.md .', { encoding: 'utf-8' });
// }
// catch (err) {
//   console.log("README.md is out of date")
//   const output = execSync('terraform-docs markdown table --indent 2 --output-file README.md .', { encoding: 'utf-8' });  // the default is 'buffer'
//   console.log(output);
// }

// const isValid = execSync('terraform-docs markdown table --indent 2 --output-check --output-file README.md .', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log(isValid)
// const output = execSync('terraform-docs markdown table --indent 2 --output-file README.md .', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log(output);

//terraform-docs markdown table --config .terraform-docs.yml --output-mode inject --output-file README.md --output-template <!-- BEGIN_TF_DOCS --> {{ .Content }} <!-- END_TF_DOCS --> .

//terraform-docs markdown table --output-check true --output-file README.md .
