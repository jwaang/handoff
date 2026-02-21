#!/usr/bin/env bash
# Clears all data from the Convex dev database.
# Usage: pnpm nuke-db

set -e

echo "⚠️  This will delete ALL data from the Convex dev database."
read -r -p "Type 'yes' to confirm: " confirm

if [[ "$confirm" != "yes" ]]; then
  echo "Aborted."
  exit 0
fi

echo "→ Deploying functions..."
npx convex dev --once

echo "→ Nuking database..."
npx convex run devClearAll:clearAllData --no-push

echo "✓ Done. Database is empty."
