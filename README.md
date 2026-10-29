# Pranav Harsh — Portfolio

Personal portfolio site. Static, no build step, no dependencies.

**Live:** https://pranavharsh.github.io/

## Contents

```
index.html          page markup
style.css           all styles, colour tokens at the top
script.js           3D tilt, scroll reveal, header shadow, copy buttons
images/
  hero.jpg          hero portrait
  profile-side.jpg  about section
  ghat.jpg          gallery
```

## Running it locally

Open `index.html` in a browser. Nothing to install.

## Editing

- **Colours** — the `:root` block at the top of `style.css`. Change a token once and it updates everywhere, in both light and dark mode.
- **Fonts** — Archivo for headings, IBM Plex Sans for body text, IBM Plex Mono for labels, loaded from Google Fonts in `index.html`.
- **Content** — plain HTML in `index.html`, in page order: hero, ParkEase, other projects, stack, about, experience, certificates, gallery, contact.

## Deploying

GitHub Pages serves the `main` branch from the repository root.
