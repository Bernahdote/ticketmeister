# TicketMeister

Next.js website for TicketMeister with a lightweight request middleware.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Middleware behavior

- Runs before app routes (excluding Next static/image assets and `favicon.ico`)
- Adds response headers:
  - `x-ticketmeister-middleware: active`
  - `x-request-path: <pathname>`
