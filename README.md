# workspace-lerna-example

## Lerna SemVer

| Commit   | SemVer |
| -------- | :----: |
| feat     | minor  |
| fix      | patch  |
| docs     |  none  |
| style    |  none  |
| refactor | patch  |
| perf     | patch  |
| build    |  none  |
| ci       | patch  |
| chore    | patch  |

### Note

-   Breaking changes causes Major SemVer bump.

### CircleCI

https://circleci.com/docs/2.0/workflows/it-tag-job-execution

https://github.com/CircleCI-Public/aws-ecr-orb

ENV VARS

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_ECR_ACCOUNT_URL

AWS_ECR_REPO_NAME

AWS_REGION_NAME

## semver regex

`\bv?(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)\*)?\b`
Matches: v1.2.2-rc.2, v1.2.2, etc.
