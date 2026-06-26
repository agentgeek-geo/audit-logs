#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [date = "2026-06-14", orderId = "ord_real_snapshot_20260614_001"] = process.argv.slice(2);
const root = process.cwd();
const manifestPath = join(root, "manifests", date, orderId, "customer-evidence-manifest.json");

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

function readJson(file) {
  return JSON.parse(readFileSync(file, "utf8"));
}

function sha256(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

if (!existsSync(manifestPath)) {
  fail(`manifest missing: ${manifestPath}`);
  process.exit(1);
}

const manifest = readJson(manifestPath);
if (manifest.schema !== "clarivy-public-evidence-manifest/v1") fail("unexpected manifest schema");
if (manifest.order_id !== orderId) fail("manifest order_id does not match path");
if (manifest.measurement_mode !== "live_engine_data") fail("manifest measurement_mode must be live_engine_data");
if (manifest.publication_status !== "approved_public_self_audit") fail("manifest publication_status must be approved_public_self_audit");

const files = Array.isArray(manifest.files) ? manifest.files : [];
if (!files.length) fail("manifest files list is empty");

const stateCounts = { ok: 0, empty_response: 0, error: 0 };
let mentions = 0;
for (const entry of files) {
  const file = join(root, entry.path);
  if (!existsSync(file)) {
    fail(`raw file missing: ${entry.path}`);
    continue;
  }

  if (entry.sha256 && sha256(file) !== entry.sha256) fail(`checksum mismatch: ${entry.path}`);

  const raw = readJson(file);
  if (raw.schema !== "clarivy-public-raw-response/v1") fail(`unexpected raw schema: ${entry.path}`);
  if (raw.order_id !== orderId) fail(`raw order_id mismatch: ${entry.path}`);
  if (raw.measurement_mode !== "live_engine_data") fail(`raw measurement_mode mismatch: ${entry.path}`);
  if (raw.publication_status !== "approved_public_self_audit") fail(`raw publication_status mismatch: ${entry.path}`);
  if (!["ok", "empty_response", "error"].includes(raw.result_state)) fail(`invalid result_state: ${entry.path}`);
  if (typeof raw.response !== "string") fail(`response must be a string: ${entry.path}`);
  if (raw.raw_request !== undefined || raw.raw_response !== undefined) fail(`transport payload should not be public: ${entry.path}`);

  const rawText = JSON.stringify(raw);
  if (/file:\/\/|\/Users\/|r2:\/\/|AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9_-]{20,}/.test(rawText)) {
    fail(`private path or secret-like value found: ${entry.path}`);
  }

  stateCounts[raw.result_state] += 1;
  mentions += Number(raw.mention_count || 0);
}

const summary = manifest.result_summary || {};
const total = stateCounts.ok + stateCounts.empty_response + stateCounts.error;
if (summary.total_datapoints !== total) fail("summary total_datapoints mismatch");
if (summary.interpretable_datapoints !== stateCounts.ok) fail("summary interpretable_datapoints mismatch");
if (summary.empty_responses !== stateCounts.empty_response) fail("summary empty_responses mismatch");
if (summary.error_responses !== stateCounts.error) fail("summary error_responses mismatch");
if (summary.total_mentions_of_clarivy !== mentions) fail("summary mention count mismatch");

if (!process.exitCode) {
  console.log(`OK ${orderId}: ${total} datapoints, ${stateCounts.ok} ok, ${stateCounts.empty_response} empty, ${stateCounts.error} error, ${mentions} Clarivy mentions`);
}
