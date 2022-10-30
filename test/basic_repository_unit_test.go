package test

import (
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/stretchr/testify/assert"
)

func TestUT_DefaultRepositoryProperties(t *testing.T) {
	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		TerraformDir: "fixtures/basic-repository",
	})

	// Plan the infrastructure
	plan := terraform.InitAndPlanAndShowWithStruct(t, terraformOptions)

	private := plan.RawPlan.Variables["private"].Value

	assert.Equal(t, "true", private)
}
