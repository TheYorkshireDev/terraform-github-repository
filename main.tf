resource "github_repository" "repository" {
  name = local.repository_name

  private              = false
  vulnerability_alerts = false
}
