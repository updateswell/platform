# Upwell platform plans

Plans for this repo. They're part of one numbered series shared with
[`updateswell/upwell`](https://github.com/updateswell/upwell/tree/main/docs/plans), which keeps
the architecture (00) and the library plans (01, 02, 05, 06). Read
[00 · Architecture and decisions](https://github.com/updateswell/upwell/blob/main/docs/plans/00-architecture.md)
first.

> Moved here from `upwell/docs/plans/` on 2026-10-22, when plan 03 finished.

## Order

| #   | Plan                                                                                                        | Repo                 | Depends on                 | Status      |
| --- | ----------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------- | ----------- |
| 00  | [Architecture and decisions](https://github.com/updateswell/upwell/blob/main/docs/plans/00-architecture.md) | both                 | —                          | Read first  |
| 01  | Restructure `upwell` into a workspace                                                                       | `upwell`             | —                          | Done        |
| 02  | `@upwell/core`                                                                                              | `upwell`             | 01                         | Done        |
| 03  | [`platform` repo and the landing page](03-platform-and-landing.md)                                          | `platform`           | 01                         | Done        |
| 04  | [API: hosting on Cloudflare](04-api.md)                                                                     | `platform`           | 02, 03                     | Not started |
| 05  | [CLI](https://github.com/updateswell/upwell/blob/main/docs/plans/05-cli.md)                                 | `upwell`             | 02 (04 for cloud commands) | Not started |
| 06  | [SDK cloud integration](https://github.com/updateswell/upwell/blob/main/docs/plans/06-sdk-cloud.md)         | `upwell`             | 04                         | Not started |
| 07  | [Analytics](07-analytics.md)                                                                                | `platform`, `upwell` | 04, 06                     | Not started |
| 08  | [Accounts and auth](08-accounts-and-auth.md)                                                                | `platform`           | 04                         | Later       |
| 09  | [Dashboard](09-dashboard.md)                                                                                | `platform`           | 07, 08                     | Last        |

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
