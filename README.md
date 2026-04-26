# Lab Asis

Lab Asis is a free installable mobile web app for students and researchers worldwide, created by Tasnim Gassem. It is designed as a scientific lab and research workspace, not just a notebook. It includes:

- Research Workspace dashboard
- Malassez cell counter
- Experiment timer
- To-do list
- Lab notes
- Protocol library
- Results vault for files and datasets
- Paper summaries and article notes
- Voice notes upload and playback
- Photo OCR with CSV export
- Failures log
- Today I Learned log
- Unit converter
- Article links and article saver
- Calendar
- Pomodoro timer
- Four-language switching
- CSV export and printable PDF export

## Files

- [index.html](./index.html) - app shell
- [styles.css](./styles.css) - design and responsive styles
- [app.js](./app.js) - logic, storage, timers, sync, translations
- [manifest.webmanifest](./manifest.webmanifest) - installable PWA metadata
- [sw.js](./sw.js) - offline cache
- [.nojekyll](./.nojekyll) - prevents GitHub Pages from trying to process the site
- [Languages.csv](./Languages.csv) - requested translation table
- [privacy.html](./privacy.html) - public privacy policy page
- [terms.html](./terms.html) - public terms of use page
- [copyright.html](./copyright.html) - public copyright notice page
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - beginner setup and publishing instructions
- [MAKE_WEBHOOK_GUIDE.md](./MAKE_WEBHOOK_GUIDE.md) - optional Google Sheets sync
- [GOOGLE_PLAY_LAUNCH_GUIDE.md](./GOOGLE_PLAY_LAUNCH_GUIDE.md) - Play publishing path
- [STORE_LISTING_COPY.md](./STORE_LISTING_COPY.md) - ready-to-paste app store text
- [LINKEDIN_LAUNCH_POST.md](./LINKEDIN_LAUNCH_POST.md) - launch post draft
- [COPYRIGHT_AND_BRAND.md](./COPYRIGHT_AND_BRAND.md) - ownership summary

## Quick Start

1. Open `index.html` in a browser.
2. Use the Language screen to choose your language.
3. Use the Language screen again to add your name, email, and optional Make webhook URLs.
4. Install the app from the browser when the install prompt appears.

## Notes

- The app works locally even without Google Sheets sync.
- If you add Make webhook URLs, saves will also post to those webhooks.
- Voice files are stored locally in your browser on the device you use.
