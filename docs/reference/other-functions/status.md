---
id: status
title: Status
hide_title: true
description: Information about the different statuses of Vessels and Fleets.
keywords:
  - status
  - state
  - end result
  - exit code
---

# Status

## Definition

**Status** refers to the final outcome of a single run for a Vessel, tied to an individual [log](../logs/). The following statuses are currently possible:

| Name           | Definition                                                                                                                    |
| :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Success**    | This run completed with an exit code of 0.                                                                                    |
| **Errored**    | This run completed with an exit code from 1 to 255.                                                                           |
| **Terminated** | This run was manually stopped by a user.                                                                                      |
| **Canceling**  | This run is currently happening, but has been requested to manually stop by a user.                                           |
| **Retrying**   | This run has previously failed and is running again based on options selected in the Guardrails.                              |
| **Running**    | This run is currently occuring.                                                                                               |
| **Scheduled**  | This run has not yet occurred, but is scheduled to occur in the next 24 hours                                                 |
| **Incomplete** | This run will never occur. This status can only be seen on Fleet logs, when upstream Vessels failed to take a branching path. |

## Screenshots

![From Top to Bottom: Scheduled, Running, Errored, Success, Terminated, Retrying](../../.gitbook/assets/image_25.png)
