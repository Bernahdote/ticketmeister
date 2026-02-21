# TicketMeister

Next.js website for TicketMeister with a lightweight request `proxy.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Request proxy behavior

- Runs before the homepage route (`/`)
- Adds response headers:
  - `x-ticketmeister-middleware: active`
