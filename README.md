# InstaBiz

Premium puppy showroom web app — browse available pups, profiles, happy families, FAQ, and contact.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript · Turbopack
- Tailwind CSS v4 (`app/globals.css`, `app/extra.css`)
- Client interactions for menu, filters, gallery, FAQ, enquiry form

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Project layout

```
app/                  Next.js routes + global styles
components/
  layout/             App shell (header scroll state)
  site/               Header, Footer, Curtain, page views
  fx/                 Animations, paw trail, interactions
src/config/           Site brand + contact placeholders
public/
  brand/              Logo assets
  img/ · o/           Photos & static assets
```

## Notes

- Brand and contact details live under `src/config/site.ts` — swap placeholders for your own WhatsApp, email, and socials before going live.
- No third-party author/company identity is wired into this repo; clone leftovers were removed.
