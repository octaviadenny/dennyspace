# dennyspace.com

Personal website for Denny Musa Irawan. It is intentionally framework-free: the site is a small static bundle, ready for Cloudflare Pages.

## Local preview

```bash
npx wrangler pages dev .
```

Open `/id/` or `/en/`. The root URL redirects to Indonesian.

## Deploy to Cloudflare Pages

1. Create a Pages project named `dennyspace` and connect this repository (or run `npx wrangler pages deploy . --project-name dennyspace`).
2. Set the production branch to `main` if using Git integration; no build command is needed and the output directory is `.`.
3. In Cloudflare Pages, add `dennyspace.com` and `www.dennyspace.com` under **Custom domains**. Cloudflare will create or validate the required DNS records.
4. Make `dennyspace.com` the primary domain and optionally redirect `www` to it in Pages.

The source includes security headers, canonical URLs, language alternates, responsive styles, and high-density-vector artwork.
