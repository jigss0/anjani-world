# for Anjani ♡

A small, private, mobile-first website — chapters, a diagnostic, a quiz, private files,
a memory gallery, a song, and a letter.

It works completely with elegant placeholders right now. You never need to touch
React or CSS — everything personal lives in **`src/content.js`**.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`) — or open it on your
phone by visiting `http://<your-computer's-local-IP>:5173` while on the same Wi-Fi.

## Add your real photos

1. Put image files into `public/photos/` — e.g. `photo1.jpg`.
2. Open `src/content.js`, find the `photos` array, and set `src: "/photos/photo1.jpg"`
   for the memory you want it to be. Write a `caption` and, optionally, a `date`.
3. Save. That's it — no other file needs to change.

Any photo entry left with `src: ""` automatically shows an elegant placeholder
instead of a broken image, so it's always safe to add photos gradually.

## Add your real videos

1. Put video files into `public/videos/` — e.g. `video1.mp4`.
2. In `src/content.js`, find the `videos` array and set `src: "/videos/video1.mp4"`.

## Add your song

In `src/content.js`, set `music.url` to a direct audio file link, e.g.
`/music/oursong.mp3` (put the file in a `public/music/` folder you create) or a
direct `https://...mp3` URL. Leave it as `""` to keep the "coming soon" placeholder.
The song never autoplays.

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the finished site.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Run:
   ```bash
   npm run deploy
   ```
   This uses `gh-pages` to publish the `dist/` folder to the `gh-pages` branch.
3. In your repo settings → Pages, set the source to the `gh-pages` branch.

The Vite config already uses a relative base path (`base: './'`), so it works
correctly whether it's served from the domain root or a GitHub Pages project
subfolder — no extra configuration needed.

## Project structure

```
src/
  content.js        ← the only file you need to edit for personal content
  App.jsx            the chapter flow / state machine
  components/         one file per chapter + shared pieces (buttons, cards, petals)
public/
  photos/            put your real photos here
  videos/            put your real videos here
```
