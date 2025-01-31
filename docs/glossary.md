---
id: glossary
title: Glossary of Terms
hide_title: true
description: Glossary of all the terms used throughout our application and documentation.
keywords:
  - gloassary
  - syntax
  - definition
  - meaning
---

# Glossary of Terms

## Definitions

[**Blueprint Library**](reference/blueprint-library/blueprint-library) is a location for pre-made Custom Blueprints developed by Shipyard staff.

[**Blueprints**](/reference/blueprints) are the foundation of the application. They contain the design specifications for a repeatable task. In other applications, these may be referenced as templates, macros, or operators.

[**Vessels**](/reference/vessels) are built using either [Blueprints](/reference/blueprints) or [Code](/reference/code/code-overview). In other applications, these may be referenced as tasks, jobs, or steps.

**Dependent Vessels** - Vessels that are built on a specific Blueprint. They depend on the underlying code and structure of the Blueprint.

[**Fleets**](/reference/fleets) are built by connecting multiple Vessels together. In other applications, these may be referenced as flows, workflows, or DAGs.

**Paths** are the lines that connect Vessels together in a Fleet, evaluating the status of the connected Vessel.

**Voyages** are a single run of a Vessel or Fleet. In other applications, these may be referenced as an execution. Metadata about a Voyage is stored as a [Log](reference/logs/logs-overview).

[**Logs**](reference/logs/logs-overview) are a historical record of how a Fleet or Vessel ran at a specific point in time. A [Fleet Log](reference/logs/fleet-logs) will consist of one or more [Vessel Logs](reference/logs/vessel-logs).

[**Triggers**](reference/triggers/triggers-overview) are the logic that determines when a Vessel or Fleet should begin running.

[**Projects**](reference/projects) are used to categorize Vessels and Fleets pertaining to specific teams, functions, or use cases. Each project is associated with its own [timezone](reference/other-functions/timestamps-and-timezones) used for [Schedule Triggers](reference/triggers/schedule-triggers).

[**Organizations**](reference/organizations) contain all of your Projects and Blueprints. This is the highest grouping structure in the platform that users can control.

**Element** is a generic term used to refer to any of the above bolded words.

**Platform** refers to the Shipyard application as a whole. Elements that live under the Platform level are controlled and managed by Shipyard staff.

**Home Directory** refers to the default location where scripts and files are saved. By default, this location is `/home/shipyard/` and can be accessed using the environment variable `HOME`.

**Upstream** refers to connected Vessels that ran immediately preceding the current Vessel.

**Currentstream** refers to Vessels that are running at the same time, due to being branched off of the immediately preceding Vessels. If two or more Vessels are running simultaneously, but were not attached to the same upstream Vessel, they are not considered to be in the same currentstream.

**Downstream** refers to connected Vessels that will run immediately after the current Vessel.

**Duration** refers to the total length of real time that a Vessel or Fleet took to be completed.

[**Billable Runtime**](faqs.md#how-do-you-calculate-billable-runtime) refers to the cumulative length of execution time that a Vessel or Fleet took while running. For Fleets with high concurrency, it is possible for the billable runtime to exceed duration. For Vessels with retries, it is possible for the billable runtime to be less than duration.

## Visuals

### Shipyard Platform Diagram

![Structural Elements of the Shipyard Platform](.gitbook/assets/image_71.png)

### Fleet Stream Examples

#### No Upstream Vessels

![Example with no upstream Vessels](.gitbook/assets/no_upstream_example.png)

#### No Downstream Vessels

![Example with no downstream Vessels](.gitbook/assets/no_downstream_example.png)

#### Vessels at Every Level

![Example with Vessels at every stream level](.gitbook/assets/every_stream_example.png)
