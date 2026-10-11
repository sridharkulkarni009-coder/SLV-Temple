# Sri Venkateshwara Swamy Temple, Vijayapura (Bijapur) - Website

Bilingual (Kannada + English) static website. **No database.** All text lives in simple files in `content/`.

## How to update the website (no coding needed)

| I want to change...                          | Edit this file                  |
|----------------------------------------------|---------------------------------|
| Phone, address, timings, UPI, history        | `content/site.yaml`             |
| Navaratri dates, daily programme, each day   | `content/navaratri.yaml`        |
| Announcements / notices (top of the home page) | `content/announcements.yaml`  |
| Photos                                       | `content/gallery.yaml` + `public/images/gallery/` |
| Menu / button words                          | `content/ui.yaml`               |

Every text has `en:` (English) and `kn:` (Kannada). Keep the quotes and the indentation.

**Next year's Navaratri:** change `year`, `edition`, `start`, `end` and each day's `date` in `content/navaratri.yaml`.

**Photos:** copy the image into `public/images/gallery/` (keep each under ~500 KB), then add:
```yaml
- file: "my-photo.jpg"
  caption: { en: "Navaratri alankara", kn: "ನವರಾತ್ರಿ ಅಲಂಕಾರ" }
```
Hero (top banner) picture: save as `public/images/deity.jpg` and set `hero_image: "/images/deity.jpg"` in `content/gallery.yaml`.

## Run on your computer
```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # creates the final site in /dist
```

## Folder structure
```
content/   <- everything you edit (YAML)
public/    <- images, favicon
src/       <- page design (change rarely)
```

## Publish (free)
1. Push to GitHub.
2. In Cloudflare Pages (or Netlify) choose "Connect to Git", select this repo.
3. Build command: `npm run build`, output folder: `dist`.
4. Every `git push` publishes the update automatically.
