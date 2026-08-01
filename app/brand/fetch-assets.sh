#!/usr/bin/env bash
# Fetch the Higgsfield-generated hero art & splash animations for Snowdraft.
#
# WHY THIS EXISTS: these assets were generated via Higgsfield and live on an account-scoped
# CDN (d8j0ntlcm91z4.cloudfront.net). The Linux cloud container that built the app could not
# reach that host (outbound egress policy), so the raster/video files were never committed —
# only the hand-authored vector art (icon.svg / dmg-background.svg) is in the repo. Run this
# on YOUR machine (no egress policy) to pull the marketing/hero art down.
#
# If a URL 403s or 404s, it has expired or is scoped to another account — re-open the job in
# your Higgsfield account (job IDs below) and replace the URL.

set -euo pipefail
BASE="https://d8j0ntlcm91z4.cloudfront.net/user_3GIUur2SS2F0j4FthvKoUQ8VEFn"
OUT="$(dirname "$0")/higgsfield"
mkdir -p "$OUT"

fetch () { # url  filename
  echo "→ $2"
  curl -fSL "$1" -o "$OUT/$2" || echo "   (failed — job may have expired; re-export from Higgsfield)"
}

# --- Hero / concept images ---
fetch "$BASE/hf_20260720_075433_87413094-bd84-425f-992f-da_HEROARC.png"                 "hero-arc.png"           # job 87413094 (snowflake→…→hero→crown)
fetch "$BASE/hf_20260720_073157_cf8066a2-a91e-45de-9b1e-918466728d38.png"               "soul-scroll.png"        # job cf8066a2
fetch "$BASE/hf_20260720_073739_ffabb0be-a8ed-40fd-9951-c391942dae39.png"               "thaw-vertical.png"      # job ffabb0be
fetch "$BASE/hf_20260720_073201_8f7d8b94-8a89-4187-a253-4d9b8c616d09.svg"               "logotype.svg"           # job 8f7d8b94
fetch "$BASE/hf_20260720_073934_f6078ea4-efd0-466b-9eeb-ee10b185b95b.svg"               "icon-concept.svg"       # job f6078ea4
fetch "$BASE/hf_20260720_075430_0a51549b-0f2d-47e6-b34e-e10582956549.svg"               "dmg-bg-concept.svg"     # job 0a51549b

# --- Animations (mp4) ---
fetch "$BASE/hf_20260720_075815_36d6007f-9ae9-4d4a-b19c-2b838e62a38b.mp4"               "splash-5s.mp4"          # job 36d6007f
# 10s professional splash with embedded boot-up chime (job 4668146b) — URL pattern below;
# confirm the exact filename in your Higgsfield account if it 404s:
fetch "$BASE/hf_20260720_075815_4668146b-6de9-4070-8a78-5c5400a9499a.mp4"               "splash-10s.mp4"         # job 4668146b

echo "Done. Assets in: $OUT"
echo "Note: exact CDN filenames can vary; the authoritative source is your Higgsfield job history (IDs in comments above)."
