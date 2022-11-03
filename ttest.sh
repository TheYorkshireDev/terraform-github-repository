for terraform_dir in $(find . -type f -name '*.tf' -exec dirname {} \; | sort -u); do
  echo "${terraform_dir}"
done
