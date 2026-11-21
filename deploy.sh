#!/usr/bin/env bash

# ====================================================
# VOLTIX ESPORTS (VLTX) - 1-CLICK DEPLOYMENT SCRIPT
# ====================================================

echo "===================================================="
echo "⚡ VOLTIX ESPORTS (VLTX) WEBSITE DEPLOYMENT"
echo "===================================================="
echo "Choose your preferred deployment platform:"
echo "1) Vercel (Instant CLI Deploy: npx vercel --prod)"
echo "2) Netlify (Instant CLI Deploy: npx netlify deploy --prod --dir=.)"
echo "3) GitHub Pages (Push to GitHub repo & enable Pages)"
echo "4) Local Preview Server (python3 -m http.server 3000)"
echo "5) Exit"
echo "===================================================="
read -p "Enter choice [1-5]: " choice

case $choice in
  1)
    echo "⚡ Deploying to Vercel..."
    npx vercel --prod
    ;;
  2)
    echo "⚡ Deploying to Netlify..."
    npx netlify deploy --prod --dir=.
    ;;
  3)
    echo "⚡ Setting up for GitHub Pages..."
    git add .
    git commit -m "Deploy Voltix Esports website"
    echo "Now run: git remote add origin <YOUR_GITHUB_REPO_URL>"
    echo "Then run: git push -u origin main"
    echo "In GitHub: Settings > Pages > Source: Deploy from branch 'main' / root"
    ;;
  4)
    echo "⚡ Starting local preview on http://localhost:3000..."
    python3 -m http.server 3000
    ;;
  *)
    echo "Exiting."
    exit 0
    ;;
esac
