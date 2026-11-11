# Upwell platform plans

Plans for this repo. They're part of one numbered series shared with
[`updateswell/upwell`](https://github.com/updateswell/upwell/tree/main/docs/plans), which keeps
the architecture (00) and the library plans (01, 02, 05, 06). Read
[00 · Architecture and decisions](https://github.com/updateswell/upwell/blob/main/docs/plans/00-architecture.md)
first.

> Moved here from `upwell/docs/plans/` on 2026-10-22, when plan 03 finished.

> **Plan B (2026-11-12):** no hosted backend. Upwell is the library plus the CLI; `upwell publish`
> puts the policy on a GitHub gist or public repo instead of our own API. Plans 04, 07, 08 and 09
> are parked, 05 and 06 were rewritten. Why: [00 · Architecture](https://github.com/updateswell/upwell/blob/main/docs/plans/00-architecture.md#product).

## Order

| #   | Plan                                                                                                        | Repo                 | Depends on | Status      |
| --- | ----------------------------------------------------------------------------------------------------------- | -------------------- | ---------- | ----------- |
| 00  | [Architecture and decisions](https://github.com/updateswell/upwell/blob/main/docs/plans/00-architecture.md) | both                 | —          | Read first  |
| 01  | Restructure `upwell` into a workspace                                                                       | `upwell`             | —          | Done        |
| 02  | `@upwell/core`                                                                                              | `upwell`             | 01         | Done        |
| 03  | [`platform` repo and the landing page](03-platform-and-landing.md)                                          | `platform`           | 01         | Done        |
| 04  | [API: hosting on Cloudflare](04-api.md)                                                                     | `platform`           | 02, 03     | Parked      |
| 05  | [CLI](https://github.com/updateswell/upwell/blob/main/docs/plans/05-cli.md)                                 | `upwell`             | 02         | Not started |
| 06  | [SDK without hosting](https://github.com/updateswell/upwell/blob/main/docs/plans/06-sdk-without-hosting.md) | `upwell`             | —          | Not started |
| 07  | [Analytics](07-analytics.md)                                                                                | `platform`, `upwell` | 04, 06     | Parked      |
| 08  | [Accounts and auth](08-accounts-and-auth.md)                                                                | `platform`           | 04         | Parked      |
| 09  | [Dashboard](09-dashboard.md)                                                                                | `platform`           | 07, 08     | Parked      |

## How to use these plans

- Each plan has **sessions**: a chunk of work sized for one sitting, ending in something
  committed and working. Do them in order inside a plan.
- Tick the checkboxes as you go and commit the plan with the work. Update the status column here
  (and in `upwell/docs/plans/README.md`) when a plan starts or finishes.
- Every plan ends with a **definition of done** and **open questions**. Answer open questions
  before the session that needs them, and move the answer into the plan's decisions.
- Decisions marked **(proposed)** are recommendations, not settled. Confirm or change them when
  the plan starts.
- When something here turns out wrong, fix the plan instead of working around it.
