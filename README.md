# terraform-github-repository

Terraform Module for managing GitHub [Repositories](https://developer.github.com/v3/repos/) and associated resources.

**NOTE:** This module is going to be built iteratively and with defaults that follow my own preferences for a GitHub repository. With that in mind, it may not be feature rich at the moment but new features will be added as and when I need them. If you agree with my defaults and find the module useful, feel free to use and/or contribute to.

## Table of Contents

- [Terraform Module: GitHub Repository](#terraform-module-github-repository)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
  - [Notes](#notes)
  - [Author Information](#author-information)
  - [License](#license)

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_github"></a> [github](#requirement\_github) | >= 4.4.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_github"></a> [github](#provider\_github) | >= 4.4.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [github_repository.repository](https://registry.terraform.io/providers/integrations/github/latest/docs/resources/repository) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | Name of Github Repository | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_name"></a> [name](#output\_name) | n/a |
<!-- END_TF_DOCS -->

## Requirements2

This module requires Terraform version `0.14.0` or newer.

## Dependencies

This module depends on a correctly configured [GitHub Provider](https://www.terraform.io/docs/providers/github/index.html) in your Terraform codebase.

## Usage

### Inputs

### Outputs

## Notes

## Author Information

This module is maintained by the contributors listed on [GitHub](https://github.com/TheYorkshireDev/terraform-github-repository/graphs/contributors).

## License

Licensed under the MIT License.
