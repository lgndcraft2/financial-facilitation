## Summary & Motivation

<!-- Describe what changed, why it changed, and the user or business problem it addresses. -->

### Changes

-

### Motivation

-

### Issue Tracker

<!-- Link every related ticket or issue. Use `Closes #123`, `Fixes #123`, or the relevant Jira key when applicable. -->

- Related issues: 

## Type of Change

<!-- Select all that apply. -->

- [ ] Bug fix
- [ ] New feature
- [ ] Refactor or maintenance
- [ ] Breaking change
- [ ] Operations, tooling, or configuration

## Quality Checklist

<!-- Check each item only after verifying it. Explain any exception in the Notes section. -->

- [ ] TypeScript remains strict and passes the repository typecheck.
- [ ] No `any` types, `as any` assertions, or other type-safety bypasses were introduced.
- [ ] Unit tests were added or updated for changed behavior.
- [ ] The relevant unit test suite passes locally.
- [ ] Database migrations are backward-compatible, ordered correctly, and safe to run more than once where applicable.
- [ ] Database schema changes include the required migration and rollback or recovery plan.
- [ ] New or changed environment variables are documented with safe example values.
- [ ] No secrets, credentials, or private configuration values are committed.
- [ ] The change is scoped to this PR and unrelated files were not modified.

### Notes and Exceptions

<!-- Document skipped checks, migration concerns, known limitations, or follow-up work. -->

-

## Verification & Test Protocol

<!-- Reviewers: run these commands from the repository root and record the results. Adjust commands to match the project scripts when they are available. -->

1. Install dependencies from the lockfile:

   ```bash
   npm ci
   ```

2. Check formatting and linting:

   ```bash
   npm run lint
   ```

3. Verify strict TypeScript compliance:

   ```bash
   npm run typecheck
   ```

4. Run unit tests and coverage when available:

   ```bash
   npm test
   npm run test:coverage
   ```

5. Review database changes, if applicable:

   ```bash
   npm run db:migrate
   npm run db:status
   ```

6. Confirm the application or affected workflow works with documented environment variables and no secrets in the diff.

### Verification Results

- Commands run:
- Test results:
- Migration results:
- Environment/configuration notes:

## Reviewer Notes

<!-- Call out the files, behavior, migration steps, or risks that deserve focused review. -->

-