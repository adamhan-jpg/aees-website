# AEES Website

Clean Next.js + Tailwind site package for AEES Consulting.

## Deploy Notes

1. Confirm the logo file is located at:

```bash
/public/aees-logo.png
```

2. In `app/page.jsx`, replace the Formspree placeholder:

```jsx
https://formspree.io/f/YOUR_FORM_ID
```

with the actual Formspree endpoint.

3. Install and run locally:

```bash
npm install
npm run dev
```

4. Build:

```bash
npm run build
```

This package pins Tailwind to v3.4.17 to avoid the Tailwind v4 PostCSS build error on Vercel.
