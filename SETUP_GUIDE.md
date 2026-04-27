# Lab Asis Setup Guide

## 1. What you are getting

This folder already contains a working mobile app. You do **not** need Adalo or Glide to use it.

Why I built it this way:

- Adalo Free currently blocks the key integrations you asked for, especially custom API actions for automatic Google Sheets sync.
- Glide Free currently blocks publishing.
- This version stays at **$0**, works on a phone, can be installed to the home screen, works offline for most features, and can still sync to Google Sheets through Make if you want.

## 2. Files in this folder

- `index.html` - main app file
- `styles.css` - design
- `app.js` - app logic
- `manifest.webmanifest` - installable app settings
- `sw.js` - offline support
- `icon.svg` - app icon
- `Languages.csv` - your requested translation table
- `MAKE_WEBHOOK_GUIDE.md` - Google Sheets sync setup

## 3. Fastest local test on your computer

1. Open this folder.
2. Double-click `index.html`.
3. The app should open in your browser.
4. Click the `Language` screen and choose the language you want.
5. Try the `Cell Counter`, `Timer`, and `To-Do List` first.
6. Then try `Protocols` and `Lab Notes` for your Benchling-style workflow.

Important:

- Local data is saved in the browser on that device.
- If you clear browser storage, use a different browser, or change phones, local-only data does not move automatically.
- If you want your data to live in Google Sheets too, follow `MAKE_WEBHOOK_GUIDE.md`.

## 4. Put it on your phone for free

### Option A: simplest permanent public link with GitHub Pages

You only need a free GitHub account.

### Step 1: create a GitHub account

1. Go to [github.com](https://github.com).
2. Click `Sign up`.
3. Create your account.

### Step 2: create a new repository

1. After logging in, click the `+` icon at the top right.
2. Click `New repository`.
3. Repository name: `lab-asis`
4. Set visibility to `Public`
5. Check `Add a README file`
6. Click `Create repository`

### Step 3: upload the app files

1. Open your new repository.
2. Click `Add file`.
3. Click `Upload files`.
4. Drag these files into the upload area:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `.nojekyll`
   - `Languages.csv`
   - `privacy.html`
   - `terms.html`
   - `copyright.html`
5. Scroll down to the commit box.
6. In the message, type: `Add Lab Asis app files`
7. Click `Commit changes`

### Step 4: turn on GitHub Pages

1. In the repository, click `Settings`.
2. In the left menu, click `Pages`.
3. Under `Build and deployment`, find `Source`.
4. Choose `Deploy from a branch`.
5. Under `Branch`, choose:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click `Save`
7. Wait 1 to 3 minutes.
8. Refresh the `Pages` screen until you see your site link.

Your app URL will look like:

`https://YOUR-GITHUB-USERNAME.github.io/lab-asis/`

### Step 5: install it on your phone

#### On Android in Chrome

1. Open your GitHub Pages link.
2. Tap the browser menu.
3. Tap `Install app` or `Add to Home screen`.
4. Confirm.

#### On iPhone in Safari

1. Open your GitHub Pages link.
2. Tap the `Share` button.
3. Tap `Add to Home Screen`.
4. Tap `Add`.

## 5. First-time setup inside the app

### Language

1. Open `Language`.
2. Tap one of:
   - `تونسي`
   - `عربي`
   - `English`
   - `Français`

### Researcher profile

1. Still on the `Language` screen, find `Researcher Profile`.
2. Enter your name.
3. Enter your email.
4. Tap `Save Profile`.

### Optional Google Sheets sync

1. Stay on the `Language` screen.
2. Scroll to `Optional Google Sheets Sync Through Make`.
3. Paste the webhook URLs you create from `MAKE_WEBHOOK_GUIDE.md`.
4. Tap `Save Sync Settings`.

## 6. How each screen works

## Home

- This is your launcher screen.
- Tap any card to open a tool.
- `Today I Learned` is available from the support card and also from the Failures screen.

## Cell Counter

1. Tap `Cell Counter`.
2. Use `+1`, `+5`, `+10` to increase the cell count.
3. Use `Clear` to reset the current count.
4. Default values are:
   - Squares = `10`
   - Dilution = `2`
5. Tap `Calculate` if needed.
6. Tap `Save` to store the result.
7. Tap `Save to Excel` to download a CSV file that opens in Excel.

Formula used:

`(Total Cells × Dilution × 10000) ÷ Number of squares`

## Timer

1. Tap `Timer`.
2. Enter the experiment name.
3. Enter minutes and seconds.
4. Tap `Start`.
5. Tap `Stop` to pause.
6. Tap `Save Time` to log it.
7. Tap `Save to Excel` to download the timer log.

## To-Do List

1. Tap `To-Do List`.
2. Add task title.
3. Add due date.
4. Choose priority.
5. Tap `Add Task`.
6. Use the task button to mark it `Done` or return it to `Pending`.
7. Use `Delete` to remove it.

## Lab Notes

1. Tap `Lab Notes`.
2. Add a note title.
3. Pick the date.
4. Add experiment name.
5. Optionally choose a linked protocol.
6. The dropdown now shows both:
   - protocols you created yourself
   - starter templates already included in the app
7. If you choose one, the app can prefill some note fields to save time.
8. Add tags, observations, results, and next steps.
9. Tap `Save Note`.
10. Review saved notes in the list.

## Protocols

1. Tap `Protocols`.
2. Add protocol title.
3. Choose category.
4. Fill objective, materials, steps, duration, and safety notes.
5. Tap `Save Protocol`.
6. Tap `Use in Note` on a saved protocol if you want to start a linked lab note quickly.

## Voice Notes

1. Record audio in your phone’s voice recorder app.
2. Save it as MP3 if possible.
3. Open `Voice Notes`.
4. Enter experiment name.
5. Add notes.
6. Upload the audio file.
7. Tap `Save`.
8. Play it back from the saved recordings list.
9. Use `Save to PDF` if you want a document-style report.

## Photo to Data

1. Tap `Photo to Data`.
2. Choose an image.
3. Tap `Extract Text`.
4. If OCR fails, tap `Open GroupDocs` to use the free image-to-Excel web tool.
5. Tap `Export CSV` to save the extracted text.

## Failures Log

1. Tap `Failures Log`.
2. Fill:
   - What went wrong?
   - Why did it happen?
   - Proposed solution?
3. Tap `Save`.
4. Review old failure entries below.

## Today I Learned

1. Open it from Home or from Failures Log.
2. Write one learning point from the day.
3. Choose category:
   - Experiment
   - Paper
   - Idea
   - Mistake
   - Other
4. Tap `Save`.

## Unit Converter

1. Choose conversion type.
2. Enter value.
3. Tap `Convert`.

## Articles

1. Open `Articles`.
2. Tap any research source button:
   - PubMed
   - PMC
   - CORE
   - Open Access Button
   - Sci-Hub
3. To save a paper manually:
   - Enter title
   - Enter URL
   - Enter summary
   - Tap `Save Article`

## Calendar

1. Open `Calendar`.
2. Use `Prev` and `Next` to move between months.
3. Tap a date square.
4. Add title, date, time, and notes.
5. Tap `Add Event`.
6. Events for the selected day appear below.

## Pomodoro

1. Open `Pomodoro`.
2. Tap `Start`.
3. Work timer is 25 minutes.
4. Break timer is 5 minutes.
5. Tap `Pause` if needed.
6. Tap `Reset` to start over.
7. Tap `Save Sessions` to log completed sessions.

## 7. Export and backup

### Export one module

Most major screens include a `Save to Excel` button.

What it does:

- Downloads a `.csv` file
- You can open that file directly in Excel
- You can also import it into Google Sheets

### Export as PDF

Most major screens now also include a `Save to PDF` button.

What it does:

- Opens a clean printable report in a new tab
- Your browser print dialog opens
- Choose `Save as PDF`
- This is useful when you want a report that feels more like a document

### Export everything

1. Open `Language`.
2. Scroll to sync settings.
3. Tap `Export Full Backup`.

This downloads one `.json` backup file containing your app data.

## 8. How to share with another researcher later

If you want someone else to use your app:

1. Give them your GitHub Pages link.
2. Tell them to open it on their phone.
3. Tell them to add it to their home screen.

Important:

- Their local data will be separate from yours.
- If you want shared central data, use the Make webhook setup so everyone writes to the same Google Sheets workbook.

## 9. Best practice for daily lab use

Use this rhythm:

1. Start the day in `Calendar` and `To-Do List`.
2. Use `Cell Counter` during bench work.
3. Use `Timer` and `Pomodoro` during protocols and writing.
4. Save quick thoughts in `Voice Notes`.
5. End the day with `Failures Log` and `Today I Learned`.
6. Export a backup every few days.

## 10. If you want the app to look more “Arabic-first”

You can ask for a second version focused on:

- Larger Arabic typography
- More right-to-left visual emphasis
- Tunisian Darija helper text everywhere
- Brain/lab themed icons and illustrations
- Separate researcher/team mode
