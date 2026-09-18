# Iraq Heritage Guide

دليل عربي/متعدد اللغات للمواقع الأثرية والرحلات الثقافية في العراق.

## Added features
- Responsive visual redesign and heritage imagery from remote image URLs.
- Interactive Leaflet overview map and per-site Google Maps panel.
- Google Maps directions links; optionally add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` for Embed API map/directions mode.
- AI heritage assistant with language-aware answers; add `OPENAI_API_KEY` to enable it.
- Language selector for Arabic, English, French, German, Spanish, Turkish, Persian, Urdu, Chinese, Japanese, Korean and Russian.
- Cultural experience ideas for tour operators, hotels and local guides.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## API keys
Never commit `.env.local`. Enable the Google Maps Embed API and restrict its browser key by domain. For the assistant, use a server-side OpenAI key only; do not expose it as a `NEXT_PUBLIC_` variable.

## Content and safety
Images and opening statuses are illustrative and should be verified with official authorities before publishing or visiting. Activities must respect archaeological-site rules, local communities and visitor safety.
