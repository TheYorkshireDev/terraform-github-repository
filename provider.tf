# https://github.com/integrations/terraform-provider-github/issues/696
terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = ">= 4.4.0"
    }
  }
}
