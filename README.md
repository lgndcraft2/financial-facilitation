# Financial Facilitation

A project for financial facilitation.

## Repository Governance

This repository uses automated commit and pull request checks to keep changes reviewable, traceable, and consistent.

### Pull Request Template

Every pull request should follow the [pull request template](.github/PULL_REQUEST_TEMPLATE.md). It guides authors and reviewers through:

- A clear summary, motivation, and issue tracker links
- The type of change being proposed
- Strict TypeScript and type-safety checks
- Unit test coverage and verification expectations
- Database migration safety
- Environment variable documentation
- Reviewer verification steps and results

Complete the template before requesting review. Explain any skipped checklist item or exception in the notes section.

### Pull Request Governance Workflow

The [PR Governance Check](.github/workflows/pr-convention-check.yml) runs for pull requests targeting:

- `dev`
- `stage`
- `main`

The workflow verifies:

- The pull request title uses an approved conventional type
- The source branch contains the latest target branch commit
- GitHub reports the pull request as mergeable
- Protected files are approved with the `infra-approved` label

Workflow files under `.github/workflows/`, `package.json`, and `package-lock.json` are protected. Changes to those files require the `infra-approved` label.

### Branch and Pull Request Process

1. Create a feature branch from the latest target branch.
2. Make focused changes and use a conventional commit message.
3. Push the feature branch to GitHub.
4. Open a pull request into `dev`, `stage`, or `main` as appropriate.
5. Complete the [pull request template](.github/PULL_REQUEST_TEMPLATE.md).
6. Resolve workflow failures, review comments, and merge conflicts before merging.

Direct pushes to protected branches may be rejected by repository rules. Changes should be merged through a pull request.

## Commit Conventions

Commit messages are checked by [Commitlint](https://commitlint.js.org/) through the Husky `commit-msg` hook at `.husky/commit-msg`.

Allowed commit types are:

```text
feat, fix, chore, docs, refactor, test, build, ci, perf, revert
```

Commit messages must:

- Use an approved lowercase type
- Include a non-empty subject
- Keep the header at 100 characters or fewer
- Avoid a full stop at the end of the subject

Examples:

```text
feat: add account summary view
fix: handle missing transaction data
docs: document pull request governance
ci: add pull request validation
```

The complete rules are defined in [.commitlintrc.json](.commitlintrc.json).

## Local Setup

Install dependencies from the lockfile:

```bash
npm ci
```

Husky is initialized automatically by the `prepare` script in [package.json](package.json). After installation, commit messages are checked automatically when creating commits.

## Current Validation Scope

The repository currently defines the Husky setup and commit-message validation. Application test, lint, and TypeScript typecheck scripts have not yet been added to `package.json`; those checks should be added as the application grows and then reflected in the pull request template.
