resource "github_repository" "repository" {
  name = local.repository_name

  visibility           = "private"
  vulnerability_alerts = true
}
