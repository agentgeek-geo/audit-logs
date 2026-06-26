# Clarivy Public Raw Data Index

Audit: `ord_real_snapshot_20260614_001`
Target brand: `clarivy.ai`
Run date: `2026-06-14`
Measurement mode: `live_engine_data`
Publication status: `approved_public_self_audit`

This index lists every public raw JSON datapoint for this Clarivy-owned self-audit. Empty responses and error states are preserved as part of the measurement record.

## Scope

- Legacy Snapshot self-audit: 3 prompts x 4 engines = 12 datapoints.
- This is not the current Snapshot Baseline contract, which is 5 user-chosen queries x 7 production endpoints = 35 datapoints.
- This package is public because the audited brand is Clarivy itself.

## Per-Engine Counts

| engine | datapoints | ok | empty_response | error | Clarivy mentions | path |
|---|---:|---:|---:|---:|---:|---|
| doubao | 3 | 0 | 0 | 3 | 0 | [raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/) |
| kimi | 3 | 1 | 2 | 0 | 0 | [raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/) |
| deepseek | 3 | 0 | 3 | 0 | 0 | [raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/) |
| qwen | 3 | 1 | 0 | 2 | 0 | [raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/) |

## Datapoints

| evidence_id | engine | prompt_id | prompt_text | result_state | mention_count | sampled_at | raw_json |
|---|---|---|---|---|---:|---|---|
| E-DOUBAO-U01 | doubao | U01 | best GEO audit service | error | 0 | 2026-06-14T04:55:53.693Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U01.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U01.json) |
| E-DOUBAO-U02 | doubao | U02 | 中文 GEO 审计 哪家好 | error | 0 | 2026-06-14T04:55:53.788Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U02.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U02.json) |
| E-DOUBAO-U03 | doubao | U03 | AI search visibility tool reviews 2026 | error | 0 | 2026-06-14T04:55:53.938Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U03.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/U03.json) |
| E-KIMI-U01 | kimi | U01 | best GEO audit service | empty_response | 0 | 2026-06-14T04:55:05.938Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U01.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U01.json) |
| E-KIMI-U02 | kimi | U02 | 中文 GEO 审计 哪家好 | empty_response | 0 | 2026-06-14T04:55:06.394Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U02.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U02.json) |
| E-KIMI-U03 | kimi | U03 | AI search visibility tool reviews 2026 | ok | 0 | 2026-06-14T04:55:14.903Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U03.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/U03.json) |
| E-DEEPSEEK-U01 | deepseek | U01 | best GEO audit service | empty_response | 0 | 2026-06-14T04:55:19.815Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U01.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U01.json) |
| E-DEEPSEEK-U02 | deepseek | U02 | 中文 GEO 审计 哪家好 | empty_response | 0 | 2026-06-14T04:55:19.501Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U02.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U02.json) |
| E-DEEPSEEK-U03 | deepseek | U03 | AI search visibility tool reviews 2026 | empty_response | 0 | 2026-06-14T04:55:27.750Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U03.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/U03.json) |
| E-QWEN-U01 | qwen | U01 | best GEO audit service | error | 0 | 2026-06-14T04:55:23.618Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U01.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U01.json) |
| E-QWEN-U02 | qwen | U02 | 中文 GEO 审计 哪家好 | error | 0 | 2026-06-14T04:56:02.437Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U02.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U02.json) |
| E-QWEN-U03 | qwen | U03 | AI search visibility tool reviews 2026 | ok | 0 | 2026-06-14T04:55:54.167Z | [raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U03.json](../../../raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/U03.json) |

## Interpretation Rules

- Treat `ok` rows as substantive LLM responses.
- Treat `empty_response` and `error` rows as run-state evidence, not confirmed absence of brand visibility.
- Do not compare this package directly against current Clarivy Snapshot Baseline results because the endpoint scope changed after this legacy run.
