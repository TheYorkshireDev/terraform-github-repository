#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o errtrace

update_doc() {
  local working_dir
  working_dir="$1"
  echo "::debug working_dir=${working_dir}"

  INPUT_TEMPLATE=$(printf '<!-- BEGIN_TF_DOCS -->\n{{ .Content }}\n<!-- END_TF_DOCS -->')
  local exec_args
  exec_args=( "markdown" "table" "--indent" "2" "--output-template" "${INPUT_TEMPLATE}" "${working_dir}")

  echo "::debug terraform-docs" "${exec_args[@]}"
  terraform-docs "${exec_args[@]}"
}

# Find all tf

update_doc "."
# for project_dir in $(find "." -name '*.tf' -exec dirname {} \; | uniq); do
#     update_doc "${project_dir}"
# done

exit 0
