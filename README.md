# My Digital Bujo

Mobile-first expense tracker built with React, Vite, and Supabase.

## Project structure

```text
.
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI
│   │   ├── pages/            # Full application views
│   │   ├── services/         # Supabase queries
│   │   └── lib/              # Shared clients and configuration
│   └── .env.example
└── supabase/                 # Backend configuration
    ├── migrations/           # Database migrations
    ├── functions/            # Edge Functions
    ├── config.toml
    └── seed.sql
```

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the frontend environment template:

   ```bash
   cp frontend/.env.example frontend/.env.local
   ```

3. Add the URL and publishable key for your Supabase project to
   `frontend/.env.local`.

4. Start the frontend:

   ```bash
   npm run dev
   ```

Do not put a Supabase secret key or `service_role` key in frontend environment
files. Browser code should only use a publishable key.
