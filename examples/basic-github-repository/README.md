# Create a repository on Github using defaults

## Usage

The code in [main.tf] defines the following code and additional resources to create a private repository.

```hcl
module "basic-github-repository" {
  source  = "TheYorkshireDev/repository/github"
  version = "~> 0.2.0"

  name = "basic-github-repository"
}
```

## Running the example

### Cloning the repository

```bash
git clone https://github.com/TheYorkshireDev/terraform-github-repository.git
cd terraform-github-repository/examples/basic-github-repository
```

### Initializing Terraform

Run `terraform init` to initialize the example and download providers and the module.

### Planning the example

Run `terraform plan` to see a plan of the changes.

### Applying the example

Run `terraform apply` to create the resources.
You will see a plan of the changes and Terraform will prompt you for approval to actually apply the changes.

### Destroying the example

Run `terraform destroy` to destroy all resources again.

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.0 |
| <a name="requirement_github"></a> [github](#requirement\_github) | ~> 5.7.0 |

## Providers

No providers.

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_github_repository"></a> [github\_repository](#module\_github\_repository) | ../../ | n/a |

## Resources

No resources.

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_repository_name"></a> [repository\_name](#input\_repository\_name) | Name of Github Repository | `string` | `"value"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_repository_name"></a> [repository\_name](#output\_repository\_name) | n/a |
<!-- END_TF_DOCS -->
