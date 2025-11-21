#!/bin/sh

# Setup git hooks to use .githooks directory (local to this repository only)
git config core.hooksPath .githooks

echo "✅ Git hooks configured to use .githooks directory"
echo "The pre-push hook will now run 'npm run fmt' before every push"
echo "Note: This configuration is local to this repository only"

