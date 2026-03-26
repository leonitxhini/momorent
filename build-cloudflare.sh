#!/bin/bash
set -e
npm install -g pnpm
BASE_PATH=/ pnpm --filter @workspace/momo-rent run build
