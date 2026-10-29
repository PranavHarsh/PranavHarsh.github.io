# Pranav Harsh — Portfolio

Personal portfolio site. Static, no build step, no dependencies.

**Live:** https://pranavharsh.github.io/

## Contents

```
index.html          the whole site — markup, styles and script in one file
images/
  hero.jpg          hero portrait
  profile-side.jpg  about section
  ghat.jpg          gallery
```

## Running it locally

Open `index.html` in a browser. That's it — nothing to install.

## Editing

Everything lives in `index.html`:

- **Colours** — the `:root` block at the top of `<style>`. Change a token once and it updates everywhere, in both light and dark mode.
- **Fonts** — Archivo for headings, IBM Plex Sans for body text, IBM Plex Mono for labels. Loaded from Google Fonts in the `<link>` at the top.
- **Content** — plain HTML below the `<style>` block. Sections are in page order: hero, ParkEase, other projects, stack, about, experience, certificates, gallery, contact.

## Deploying

Pushed to the `main` branch, with GitHub Pages set to serve from `main` / `root`.

## Built with

HTML, CSS and vanilla JavaScript. No framework, no bundler.
