resource "github_repository" "repository" {
  name = local.repository_name

  private              = true
  vulnerability_alerts = true
}
