package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

const fixtureLocation = "fixtures/basic-repository"

func TestUT_DefaultRepositoryProperties(t *testing.T) {
	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		TerraformDir: fixtureLocation,
		PlanFilePath: "./plan.output",
	})

	// Plan the infrastructure
	planOutput := terraform.InitAndPlanAndShowWithStruct(t, terraformOptions)

	repositoryKey := "module.github_repository.github_repository.repository"
	terraform.AssertPlannedValuesMapKeyExists(t, planOutput, repositoryKey)
	repository := planOutput.ResourcePlannedValuesMap[repositoryKey]

	assert.Equal(t, true, repository.AttributeValues["private"])
	assert.Equal(t, true, repository.AttributeValues["vulnerability_alerts"])
}
