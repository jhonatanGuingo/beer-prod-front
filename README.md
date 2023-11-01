## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
bun i
```

3. Populate `.env` file based on `.env.example`. `VITE_API_URL` should point to your API server (beer-production-API)

4. Run the back-end in a development environment:

```bash
 go run cmd/main.go
```
## Building and starting for production

```bash
bun run dev
```

## What to do when add new ENV VARIABLES

- Add them to `.env.example` file
- Add them to your local `.env` file
