#!/usr/bin/env bash
# Seeds the Convex database with a demo account and sample data.
# Usage: pnpm seed-demo         (dev — default)
#        pnpm seed-demo prod    (production)
#
# Creates:
#   Login:  test@test.com / test
#   Property: The Lake House (2 pets, 4 sections, contacts, vault items)
#   Trip: Active (started 2 days ago, ends in 5 days)
#   Sitter link: /t/<slug> (password: demo)

set -e

ENV="${1:-dev}"

if [[ "$ENV" != "dev" && "$ENV" != "prod" ]]; then
  echo "Usage: pnpm seed-demo [dev|prod]"
  exit 1
fi

echo "🌱 Seeding demo account ($ENV)..."

if [[ "$ENV" == "dev" ]]; then
  echo "→ Deploying functions..."
  npx convex dev --once

  echo "→ Running seed..."
  npx convex run seed:run --no-push
else
  echo "→ Running seed on production..."
  npx convex run --prod seed:run
fi

echo ""
echo "✓ Done! Sign in with: test@test.com / test"
