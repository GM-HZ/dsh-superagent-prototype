# Personal agent adaptation branch

This fork keeps reusable superagent runtime changes on `codex/sayact-personal-agent`.
The official project remains the `upstream` remote; the fork is `origin`.

The initial adaptation is based on fork commit
`8c32a9dc5d72c033816c6a8110b37f40cf94fba4`. Its tracked source tree is identical to
the previously consumed official snapshot
`6337fc823ce20251c8de8085948165c81aaa701e`; the histories have different root commits.
Consumers should pin an exact adaptation commit and retain source checksums.

## Initial runtime extensions

- Note inputs record `deliveredTo` and `readAt` separately, just like trigger
  inputs. These are delivery receipts, not proof of semantic task completion.
- `AgentDelivery.status` distinguishes absent, queued and context-admitted
  requests. Optional explicit source attribution preserves user RPC identity;
  the default remains an internal superagent source. Existing persistence and
  request-ID deduplication apply to both.
- Effects optionally rank due unordered entries. Equal ranks preserve queue
  order; ordered effects keep their original behavior; running work is not
  preempted.

These extensions were previously maintained as two consumer patches. They now
live here with regression tests so consumers do not apply those patches again.

## Intended embedding boundary

The next adaptation is one embeddable superagent main backed by DSH, with
host-provided input/output, execution adapters, approval and resource controls.
Personal-agent prompts and role configuration must support conversation,
memory and quick tasks while delegating lengthy work. The existing repository
router policy is not automatically the personal-agent policy.

Voice, calls, wake-word detection, speaker verification, native UI, credentials
and product-specific memory remain consumer plugins or host services. This
branch does not yet implement the full personal profile or switch a consumer's
main session. Importing the branch alone must not be presented as that migration.

## Updates

Merge or selectively port official changes into this adaptation branch, retain
the focused tests, and validate a consumer's bundle before updating its pinned
commit. Do not rewrite the already-consumed branch history or make production
builds follow a moving branch head implicitly.
