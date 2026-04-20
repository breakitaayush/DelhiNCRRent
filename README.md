# Delhi Rent

Anonymous rent directory prototype for Delhi renters.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL editor and run [supabase.sql](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/supabase.sql).
   This is a testing-phase reset script: it drops old `pins`, `flat_hunts`, `flat_lets`, `interest_requests`, and legacy `rent_listings` tables before recreating fresh ones.
3. Copy values from [config.example.js](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/config.example.js) into [config.js](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/config.js).
4. Set your project URL and anon key in `config.js`.
5. Set `GOOGLE_MAPS_API_KEY` in `config.js`.
6. Optionally set `GOOGLE_MAP_ID` in `config.js`. `DEMO_MAP_ID` works for prototype usage.
7. Open [index.html](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/index.html).

## What works

- Public anonymous reads from `pins`
- Public anonymous inserts into `pins`
- Public anonymous inserts into `flat_hunts`
- Public anonymous inserts into `flat_lets`
- Public anonymous inserts into `interest_requests`
- ZIP or area search
- Metro line search
- Real Google Maps basemap
- Area filters and live stats
- Area summary cards built from visible data
- Add-pin form submits to Supabase when configured
- Flat Hunt form submits to Supabase when configured
- Flat Let form submits to Supabase when configured
- `I’m interested` saves an interest request and can trigger a `send-interest-email` Supabase Edge Function if you add one

## Edge Function for interested flow

This repo now includes a Supabase Edge Function scaffold at:
- [supabase/functions/send-interest-email/index.ts](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/supabase/functions/send-interest-email/index.ts)

To use it:
1. Install and log in to the Supabase CLI.
2. Link the project:
   `supabase link --project-ref YOUR_PROJECT_REF`
3. Set function secrets:
   - `RESEND_API_KEY`
   - `INTEREST_FROM_EMAIL`
4. Deploy the function:
   `supabase functions deploy send-interest-email`

What it does:
- receives an interest request payload
- emails the requester with the target contact details
- uses Resend for delivery

Sample test data:
- [supabase.sql](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/supabase.sql) now seeds sample `pins`, `flat_lets`, and `flat_hunts`
- the frontend also includes matching fallback seed data if Supabase is empty
- Click the map to attach an approximate listing location
- Google reverse geocoding auto-fills area and ZIP after map click
- Multiple renters in the same area / BHK can submit independently without being blocked by duplicate detection
- Basic moderation state through `moderation_status`

## Google Maps note

Enable both the Maps JavaScript API and Geocoding API in the same Google Cloud project as your API key. Without a valid Google Maps key, the app falls back to the static overlay UI and map clicks will not geocode.

## Important note

This uses the public anon key in the browser, which is the normal Supabase client pattern when RLS is enabled. Do not put the `service_role` key in frontend code.

## Git and Vercel

Recommended setup:
- GitHub for the codebase
- Vercel for the live website
- Supabase for database and Edge Functions

`vercel.json` is not required right now because this project is a simple static site with no build step.

### What is safe to commit

These values are expected to be public in a browser app:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `GOOGLE_MAPS_API_KEY`
- `GOOGLE_MAP_ID`

Do not commit these to the frontend:
- Supabase `service_role`
- `RESEND_API_KEY`
- any SMTP password
- any admin token

### Before you push to GitHub

1. Make sure [config.js](/Users/aayushpaliwal/PycharmProjects/DelhiNCRRent/config.js) contains only browser-safe keys.
2. Make sure Google Maps key restrictions are enabled.
3. Make sure Supabase RLS is enabled.
4. Keep email secrets only in Supabase Edge Function secrets, never in this repo.

### Google Maps key restrictions

In Google Cloud, restrict the Maps key with HTTP referrers such as:
- `http://localhost:8000/*`
- `http://127.0.0.1:8000/*`
- `http://localhost:63342/*`
- `http://127.0.0.1:63342/*`
- `https://YOUR-PROJECT.vercel.app/*`
- `https://YOUR-DOMAIN/*`

### Deploy checklist

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Use the default static deployment settings.
4. After Vercel gives you a URL, add that URL to Google Maps referrer restrictions.
5. Test:
   - map load
   - search
   - pin details
   - add pin / flat let / flat hunt
   - interested flow
6. If you later enable email sending, deploy the Supabase function and store `RESEND_API_KEY` and `INTEREST_FROM_EMAIL` only in Supabase secrets.

### Minimal git commands

If this folder is not already a git repo:

```bash
git init
git add .
git commit -m "Initial Delhi Rent site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
