🏷️ URL Shortener — Backend

A minimal, easy-to-run URL shortener backend built with Node.js, Express and MongoDB (Mongoose). It provides endpoints to create short links, manage them, redirect, and fetch access stats.

---

## Table of Contents
- What you'll find
- Quick start
- Environment
- Run
- API reference
- Examples
- Data model
- Notes & next steps

## What you'll find
- `index.js` — app entry point
- `routes/url.route.js` — API routes
- `controllers/url.controller.js` — route handlers
- `models/url.model.js` — Mongoose schema
- `utils/db.js` — MongoDB connect helper
- `utils/validateUrl.js` — URL validator

## Quick start

Prereqs: Node.js (14+), npm, and a MongoDB instance (local or Atlas).

1. From the project root, open the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create or update `backend/.env` with:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:8000
```

4. Start the server:

```bash
# If package.json has a start script
npm start

# Or run directly
node index.js
```

The app will print a message and attempt to connect to MongoDB. By default the API is available at `http://localhost:<PORT>/api`.

## Environment
- PORT — server port (default from `.env`)
- MONGO_URI — MongoDB connection URI
- BASE_URL — used to build the `shortUrl` stored in the DB (e.g. `http://localhost:8000`)

## Run (dev tips)
- Use nodemon for dev: `npm i -D nodemon` and add a script `"dev": "nodemon index.js"` in `backend/package.json`.
- Ensure `BASE_URL` matches where the server is reachable (useful for generated links).

## API reference (base path: /api)

Endpoints (brief):

- POST /api/shorten
  - Body: { "originalUrl": "https://example.com" }
  - Create a short URL (or return existing). Returns 201 for newly created resource.

- GET /api/shorten/:urlId
  - Return the stored URL document (does not redirect).

- PUT /api/shorten/:urlId
  - Body: { "originalUrl": "https://new.example.com" }
  - Update the original URL for the given `urlId` and return the updated doc.

- DELETE /api/shorten/:urlId
  - Delete the record. Returns 204 on success.

- GET /api/:urlId
  - Redirects to `originalUrl` and increments `accessCount`.

- GET /api/stats/:urlId
  - Returns { accessCount: number } for the given `urlId`.

## Examples

Shorten a URL:

```bash
curl -sS -X POST http://localhost:8000/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl":"https://example.com"}' | jq
```

Follow a short link (redirect):

```bash
curl -v http://localhost:8000/<urlId>
```

Get stats for a short link:

```bash
curl http://localhost:8000/api/stats/<urlId>
```

Replace `<urlId>` with the generated 6-character id (see `nanoid(6)` in `controllers/url.controller.js`).

## Data model

Url document fields:

- `urlId` — short id (string)
- `originalUrl` — target URL (string)
- `shortUrl` — full shortened URL (string)
- `accessCount` — number of redirects (number)
