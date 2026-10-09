# Yannawut Roumsuk — Portfolio

A motion-rich portfolio for Yannawut's public products, DevOps work, automation, and AI experiments. The landing page keeps the original mint-led visual identity while presenting all 14 public repositories as one coherent body of work.

## Highlights

- Apple-inspired editorial layout, glass navigation, scroll reveals, and product mockups
- Full GitHub project archive with animated category filters
- Pointer-reactive project cards, animated number tickers, and interactive CTAs
- Responsive mobile navigation and reduced-motion support
- Railway-ready standalone Next.js output with a health endpoint

The primary CTA interaction is adapted from Magic UI's [Interactive Hover Button on 21st.dev](https://21st.dev/@dillionverma/components/interactive-hover-button). The pointer-glow and glass treatments follow the interaction patterns catalogued by [21st.dev](https://21st.dev/), then are reworked around this project's existing mint, white, and black theme.

## Stack

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS and custom CSS
- Framer Motion
- Lucide icons
- Railway Railpack

## Local development

Use Node.js 22.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run check
npm run build
npm audit --omit=dev
```

The build produces a self-contained server in `.next/standalone` and copies both `public` and `.next/static` into it.

## Railway deployment

The repository includes `railway.json`, a Node 22 engine constraint, standalone output, an explicit `0.0.0.0` bind, and `GET /api/health`.

```bash
railway login
railway init
railway up
```

Railway uses the included health check before promoting a deployment. Generate a public domain in the service's Networking settings after the first successful deploy.
