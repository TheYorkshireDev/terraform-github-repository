package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func TestExamplesBasicGithubRepository(t *testing.T) {
	expectedOutput := "initial_output"

	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		TerraformDir: "../examples/basic-github-repository",
	})

	// At the end of the test, run `terraform destroy` to clean up any resources that were created
	defer terraform.Destroy(t, terraformOptions)

	// Apply the infrastructure
	terraform.InitAndApply(t, terraformOptions)
	output := terraform.Output(t, terraformOptions, "initial_output")
	assert.Equal(t, expectedOutput, output)

	// Run perpetual diff
	planResult := terraform.Plan(t, terraformOptions)

	// Make sure the plan shows zero changes
	assert.Contains(t, planResult, "No changes.")
}
