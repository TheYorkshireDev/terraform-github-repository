#!/usr/bin/env bash
#
# Copyright 2021 The terraform-docs Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -o errexit
set -o pipefail
set -o errtrace


INPUT_CONFIG_FILE="disabled"
INPUT_RECURSIVE="false"
INPUT_OUTPUT_METHOD="print"


INPUT_OUTPUT_FORMAT="markdown table"
cmd_args=(${INPUT_OUTPUT_FORMAT})

INPUT_INDENTION=2
cmd_args+=(--indent "${INPUT_INDENTION}")

update_doc() {
    local working_dir
    working_dir="$1"
    echo "::debug working_dir=${working_dir}"

    local exec_args
    exec_args=( "${cmd_args[@]}" )

    INPUT_TEMPLATE=$(printf '<!-- BEGIN_TF_DOCS -->\n{{ .Content }}\n<!-- END_TF_DOCS -->')
    exec_args+=(--output-template "${INPUT_TEMPLATE}")

    exec_args+=("${working_dir}")

    local success

    echo "::debug terraform-docs" "${exec_args[@]}"
    echo "::debug \\n\\n"
    terraform-docs "${exec_args[@]}"
    success=$?

    if [ $success -ne 0 ]; then
        exit $success
    fi
}

# Find all tf
INPUT_FIND_DIR=.
for project_dir in $(find "${INPUT_FIND_DIR}" -name '*.tf' -exec dirname {} \; | uniq); do
    update_doc "${project_dir}"
done

exit 0
