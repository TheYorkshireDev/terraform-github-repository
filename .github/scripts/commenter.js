module.exports = ({github, context}) => {
// module.exports = () => {
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
\<\!\-\- BEGIN_TF_DOCS \-\-\>
${documentationOutput}
\<\!\-\- END_TF_DOCS \-\-\>
\`\`\`
</details>

`;
  }

  function reviewTerraformDocumentation(directory) {
    console.log(`
Reviewing Directory: ${directory}`)

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

  // Exclude test files
  directories = directories.filter(d => !d.includes("test/"));

  var commentBody = ``

  directories.forEach(directory => {
    reviewTerraformDocumentation(directory)
  });

  github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: commentBody
  })
}
