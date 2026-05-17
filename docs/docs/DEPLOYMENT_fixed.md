# Deployment Guide

## Deploying Settled to Vercel

### Prerequisites
- A [Vercel](https://vercel.com) account
- A [Supabase](https://supabase.com) project
- The repository pushed to GitHub/GitLab/Bitbucket

### Step 1: Connect Repository to Vercel

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your Git repository
4. Select the `settled` directory as the root directory

### Step 2: Configure Build Settings

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x or later

### Step 3: Set Environment Variables

Add the following environment variables in Vercel's project settings:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `NEXT_PUBLIC_APP_URL` | Your production URL (e.g., https://settled.vercel.app) |
| `NEXT_PUBLIC_APP_NAME` | Settled |
| `NEXT_PUBLIC_USE_MOCK_DATA` | Set to `false` for production with real APIs |

Optional API keys (if using real data):
| Variable | Description |
|----------|-------------|
| `IMDB_API_KEY` | TMDB API key for film/TV data |
| `GOOGLE_PLACES_API_KEY` | Google Places API key |
| `RAWG_API_KEY` | RAWG API key for video game data |

### Step 4: Deploy

Click "Deploy" and Vercel will build and deploy your application.

---

## Setting Up Supabase

### Step 1: Create a Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Choose your organisation
4. Set a project name (e.g., "settled-production")
5. Set a strong database password
6. Choose a region close to your users (e.g., London for UK users)

### Step 2: Run Database Migrations

1. Install the Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

3. Run migrations:
   ```bash
   supabase db push
   ```

   Or manually run the SQL from `supabase/migrations/001_initial_schema.sql` in the Supabase SQL Editor.

### Step 3: Configure Authentication

1. Go to Authentication → Providers in Supabase Dashboard
2. Enable Email/Password authentication
3. (Optional) Enable social providers:
   - Google OAuth
   - Apple Sign In
4. Configure redirect URLs:
   - Add your production URL: `https://your-domain.com/auth/callback`
   - Add localhost for development: `http://localhost:3000/auth/callback`

### Step 4: Configure Row Level Security (RLS)

RLS policies are included in the migration file. Verify they are active:

1. Go to Database → Tables in Supabase Dashboard
2. Check each table has RLS enabled (shield icon)
3. Review policies under Authentication → Policies

### Step 5: Set Up Realtime (for live room updates)

1. Go to Database → Replication
2. Enable realtime for the following tables:
   - `rooms`
   - `room_participants`
   - `swipe_actions`
   - `matches`

---

## Production Checklist

- [ ] Environment variables set in Vercel
- [ ] Supabase project created and migrations run
- [ ] Authentication providers configured
- [ ] RLS policies verified
- [ ] Realtime enabled for relevant tables
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Error monitoring set up (e.g., Sentry)
- [ ] Analytics configured (GDPR-compliant)
- [ ] Cookie consent banner implemented
- [ ] Privacy policy and terms of service pages added
