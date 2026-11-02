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
app/                     Next.js routes + global styles
components/
  layout/                App shell
  ui/                    Header, Footer, Curtain, page views
  effects/               Animations & interactions
lib/                     Site config
public/                  Brand + photo assets
```
