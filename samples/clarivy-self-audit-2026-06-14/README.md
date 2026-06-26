# Clarivy Self-Audit Public Evidence Sample

This is the first public, reviewable Clarivy-owned audit evidence package in `agentgeek-geo/audit-logs`.

## What This Package Is

- Target brand: `clarivy.ai`
- Order ID: `ord_real_snapshot_20260614_001`
- Run date: `2026-06-14`
- Measurement mode: `live_engine_data`
- Publication status: `approved_public_self_audit`
- Scope: 3 prompts x 4 engines = 12 datapoints
- Engines: Doubao, Kimi, DeepSeek, Qwen

## Result Boundary

The generated legacy report said `0 / 12` datapoints mentioned `clarivy.ai`. That number is preserved as historical output, but it must be read with the run-state caveat:

- Interpretable responses: 2 / 12
- Empty responses: 5 / 12
- Error responses: 5 / 12
- Total observed Clarivy mentions: 0

Only the `ok` rows are substantive model answers. Empty/error rows prove the endpoint state for this run, not market absence.

## Files

- [Raw data index](../../manifests/2026-06-14/ord_real_snapshot_20260614_001/raw-data-index.md)
- [Customer evidence manifest](../../manifests/2026-06-14/ord_real_snapshot_20260614_001/customer-evidence-manifest.json)
- [Checksums](../../manifests/2026-06-14/ord_real_snapshot_20260614_001/checksums.sha256)
- [Raw doubao JSON files](../../raw/2026-06-14/ord_real_snapshot_20260614_001/doubao/)
- [Raw kimi JSON files](../../raw/2026-06-14/ord_real_snapshot_20260614_001/kimi/)
- [Raw deepseek JSON files](../../raw/2026-06-14/ord_real_snapshot_20260614_001/deepseek/)
- [Raw qwen JSON files](../../raw/2026-06-14/ord_real_snapshot_20260614_001/qwen/)

## Why This Is Public

Clarivy is using its own brand as the first public measured-audit sample. No third-party customer email, billing detail, private storage URL, or customer memory is included.

## Legacy Report Excerpt

The original generated `snapshot.md` is summarized below. The public manifest and raw JSONs are the source of truth for current interpretation.

```markdown
# Clarivy AI Search Visibility Snapshot — clarivy.ai

---

## 0 / 12 prompts mention clarivy.ai

Across 4 engines and 3 prompts (12 engine-prompt pairs), clarivy.ai was not mentioned in any response on this run.

---

## Per-Engine Score

| Engine | Mentions | Prompts Run | Mention Rate |
|--------|----------|-------------|--------------|
| Kimi | 0 | 3 | 0 / 3 |
| DeepSeek | 0 | 3 | 0 / 3 |
| Qwen | 0 | 3 | 0 / 3 |
| Doubao | 0 | 3 | 0 / 3 |
| **Total** | **0** | **12** | **0 / 12** |

---

## Top Cited Domains

No structured citations were returned at this run. Two engines produced substantive responses to prompt U03 ("AI search visibility tool reviews 2026"). In those responses, Kimi named Profound and Brandverity as representative tools in the generative-engine-ranking category (raw: kimi/U03); Qwen named Profound, Otterly.ai, Semrush, Ahrefs, Traction, and Peec AI (raw: qwen/U03). clarivy.ai appeared in neither response. The remaining 10 engine-prompt pairs returned empty responses and are not interpretable as negative signal — they indicate a data-collection gap, not confirmed absence.

---

## Top 3 Prioritized Actions

**1. Establish indexed, crawlable content that answers the exact prompts tested.**
Kimi and Qwen both responded to "AI search visibility tool reviews 2026" by listing named competitors drawn from their training data. clarivy.ai was absent because no sufficiently authoritative, indexed content associates the brand with these query patterns. The immediate lever is a dedicated comparison or category page — structured, factual, and linkable — that positions clarivy.ai within the GEO audit tool category using the same terminology the engines already use (raw: kimi/U03, qwen/U03).

**2. Pursue third-party citation in sources the engines demonstrably draw from.**
The engines cited Profound and Otterly.ai without any prompt instruction to do so. Those brands appear in the engines' training corpora via reviews, analyst write-ups, and community discussions. clarivy.ai needs equivalent coverage in the publications and forums that feed these models. Identify which outlets produced the content the engines are quoting and target them for editorial placement or contributed content.

**3. Investigate and resolve the empty-response rate before re-running.**
8 of 12 engine-prompt pairs returned empty strings. This is a data-collection issue, not a confirmed finding about brand visibility on those pairs. Before drawing conclusions from a follow-up run, confirm that the API connections to Kimi (U01, U02), DeepSeek (U01, U02, U03), Qwen (U02), Doubao (U01, U02, U03) are returning full responses. A re-run with confirmed response capture will produce a more complete picture.

---

**PM notes:** 8 of 12 raw responses are empty strings. The structured_findings correctly records 0 mentions, which is accurate for the data received. However, the 0/12 headline should be interpreted with caution until the empty-response issue is resolved. Recommend flagging to the customer that the score reflects confirmed data on 2 of 12 pairs and unconfirmed data on the remaining 10.

---

*Stochasticity disclosure: This is a snapshot. LLM responses are stochastic; a re-run of the same 3 prompts within 24 hours will vary by ±10% on engines with non-deterministic sampling (Kimi, DeepSeek, Qwen) and ±0% on deterministic configurations (Doubao, where applicable). The counts in this report are exact for this run; they are not projected averages.*

---

**Data Provenance**
- **Who ran:** Claude Code (model: claude-3-5-sonnet-20241022) on a Cloudflare Worker, orchestrated by agentgeek-geo/audit-runner.
- **Where:** 4 engines, CN jurisdiction — Kimi, DeepSeek, Qwen, Doubao — via Hong Kong node.
- **When:** Run timestamp not supplied in input; report generated 2025-07-14T00:00:00+08:00.
- **What inputs:** clarivy.ai + 3 customer queries (U01: "best GEO audit service"; U02: "中文 GEO 审计 哪家好"; U03: "AI search visibility tool reviews 2026").
- **What outputs:** This report + 12 raw JSONs at github.com/agentgeek-geo/audit-logs/{date}/{order\_id}/.
```
