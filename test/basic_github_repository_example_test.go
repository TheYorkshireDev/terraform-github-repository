package test

import (
	"testing"

	"github.com/jaswdr/faker"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func TestIT_BasicGithubRepositoryExample(t *testing.T) {
	faker := faker.New()

	repositoryName := faker.RandomStringWithLength(8)

	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		TerraformDir: "../examples/basic-github-repository",
		Vars: map[string]interface{}{
			"repository_name": repositoryName,
		},
	})

	// At the end of the test, run `terraform destroy` to clean up any resources that were created
	defer terraform.Destroy(t, terraformOptions)

	// Apply the infrastructure
	terraform.InitAndApply(t, terraformOptions)
	actualRepositoryName := terraform.Output(t, terraformOptions, "repository_name")
	assert.Equal(t, repositoryName, actualRepositoryName)

	// Run perpetual diff
	planResult := terraform.Plan(t, terraformOptions)

	// Make sure the plan shows zero changes
	assert.Contains(t, planResult, "No changes.")
}
