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
		PlanFilePath: "./plan.out",
	})

	// Plan the infrastructure
	plan := terraform.InitAndPlanAndShowWithStruct(t, terraformOptions)

	private := plan.RawPlan.Variables["private"].Value

	assert.Equal(t, "true", private)
}
