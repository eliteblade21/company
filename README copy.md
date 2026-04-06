# Junk Services Muskoka

GitHub-ready static site with a serverless quote form.

## What this uses
- Static HTML/CSS/JS for the site
- Vercel serverless function in `api/quote.js`
- Resend for sending quote emails to `contact@junkservicemuskoka.com`

## Setup
1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env.local`
3. Add your Resend API key to `.env.local`
4. Run locally:
   npm run dev

## Deploy on Vercel
1. Push this folder to GitHub
2. Import the repo into Vercel
3. Add `RESEND_API_KEY` in the Vercel project environment variables
4. Make sure `contact@junkservicemuskoka.com` is a real mailbox
5. Verify `junkservicemuskoka.com` inside Resend so the from-address can send properly

## Notes
- The quote form posts to `/api/quote`
- Quote requests are sent to `contact@junkservicemuskoka.com`
- If the sending domain is not verified in Resend, email delivery will fail
