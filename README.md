# Clarivy Audit Logs

Public evidence archive for Clarivy AI visibility audits.

Canonical URL target:

```text
https://github.com/agentgeek-geo/audit-logs
```

## Status

This repository is the public landing repository for Clarivy evidence packages.
It is safe to publish. It does not contain customer raw responses yet.

Customer-facing evidence claims must come from a delivered order package with:

- `measurement_mode=live_engine_data`
- `raw-data-index.md`
- raw JSON evidence for each endpoint x prompt datapoint
- a customer evidence manifest or approved evidence-store URL

Mock, sample, demo, and smoke-test artifacts are structure-only and must not be
cited as live AI visibility evidence.

## Intended Layout

```text
raw/YYYY-MM-DD/<order_id>/<engine>/<prompt_id>.json
manifests/YYYY-MM-DD/<order_id>/customer-evidence-manifest.json
samples/
```

## Publication Rules

Do not commit:

- API keys, auth tokens, cookies, or vendor credentials
- customer emails, contact names, billing data, tax IDs, addresses, or payment details
- private R2 bucket hostnames or signed URLs that should remain private
- mock output presented as real measurement evidence
- raw responses from a customer order unless the order is approved for public evidence publication

Every public raw datapoint should preserve:

- order ID
- endpoint / engine
- prompt ID and prompt text
- sampled timestamp
- model metadata when available
- response text
- citations
- error state when applicable
- measurement mode

## Current Source of Truth

Clarivy public product and methodology facts:

- https://clarivy.ai/llms.txt
- https://clarivy.ai/audit/methodology.html
- https://clarivy.ai/measured-ai-visibility-audit/
- https://clarivy.ai/agent-feed/

Last initialized: 2026-06-26T03:18:27Z
