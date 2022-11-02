<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | ~> 1.0 |
| <a name="requirement_github"></a> [github](#requirement\_github) | ~> 5.7.0 |
## Usage
Basic usage of this module is as follows:

```hcl
module "example" {
	source  = "<module-path>"

	 # Optional variables
	repository_name  = "value"
}
```
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