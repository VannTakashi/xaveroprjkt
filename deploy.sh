#!/bin/bash
set -e
echo "🚀 Build project..."
npm run build
echo "🌐 Deploy ke GitHub Pages..."
npm run deploy
echo "✅ Selesai! Website sudah online di GitHub Pages."
