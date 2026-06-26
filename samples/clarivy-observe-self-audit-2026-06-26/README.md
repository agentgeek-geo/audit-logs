# Clarivy Observe Public Self-Audit Evidence

This directory is a public, redacted evidence package for a Clarivy-owned self-audit.

## Package

- Sample slug: `clarivy-observe-self-audit-2026-06-26`
- Order: `ord_clarivy_observe_selfaudit_20260626_001`
- Date: `2026-06-26`
- Target: `clarivy.ai`
- Measurement mode: `live_engine_data`
- Public release gate: 35/35 content-bearing datapoints

## Files

- Manifest: `manifests/2026-06-26/ord_clarivy_observe_selfaudit_20260626_001/customer-evidence-manifest.json`
- Raw data index: `manifests/2026-06-26/ord_clarivy_observe_selfaudit_20260626_001/raw-data-index.md`
- Checksums: `manifests/2026-06-26/ord_clarivy_observe_selfaudit_20260626_001/checksums.sha256`
- Redacted raw JSON responses: `raw/2026-06-26/ord_clarivy_observe_selfaudit_20260626_001/`

## Verification

Run from the repository root:

```bash
node scripts/verify-public-package.mjs 2026-06-26 ord_clarivy_observe_selfaudit_20260626_001
```

The public files remove transport payloads, local paths, signed URLs, and secret-like values. Customer raw evidence is not public unless the specific order is approved for publication.

## Provenance

Successful content-bearing datapoints are treated as immutable for this package.
If a live run had failed datapoints during recovery, only later content-bearing
live attempts are eligible for publication. Public raw JSON exposes the final
`sampled_at` timestamp for each datapoint; private retry history remains in
the internal engine-health ledger.
