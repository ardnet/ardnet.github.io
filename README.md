# ardnet.github.io

Personal site of Pratomo Ardianto — served at **https://ardi.squarish.com.sg** via GitHub Pages.

Plain static HTML/CSS/JS, no build step.

```
index.html          main page
404.html            not-found page
CNAME               custom domain for GitHub Pages
assets/css/style.css
assets/js/main.js
assets/img/favicon.svg
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

1. Push to `main` of `ardnet/ardnet.github.io`.
2. Repo → Settings → Pages → Source: *Deploy from a branch*, `main` / root.
3. Custom domain: `ardi.squarish.com.sg` (the `CNAME` file sets this), then tick **Enforce HTTPS** once the cert is issued.

## DNS (at the squarish.com.sg DNS provider)

| Type  | Host | Value              |
|-------|------|--------------------|
| CNAME | ardi | ardnet.github.io.  |

Optional but recommended: verify `squarish.com.sg` under GitHub → Settings → Pages → *Verified domains* to prevent subdomain takeover.

## Theming

Change `--accent` in `assets/css/style.css` (alternatives listed in the comment).
