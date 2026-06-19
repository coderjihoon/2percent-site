#!/usr/bin/env bash
set -euo pipefail

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg가 필요합니다. macOS: brew install ffmpeg"
  exit 1
fi

if [ $# -lt 1 ]; then
  echo "사용법: npm run compress-video -- input.mp4 [output.mp4]"
  exit 1
fi

INPUT="$1"
OUTPUT="${2:-${INPUT%.*}-compressed.mp4}"

ffmpeg -i "$INPUT" \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -vf "scale='min(1920,iw)':-2" \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -y "$OUTPUT"

echo "완료: $OUTPUT"
