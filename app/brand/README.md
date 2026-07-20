# Snowdraft brand assets

The durable, committed art for the app. See [`../BRAND.md`](../BRAND.md) for the concept and
the full catalog (including the Higgsfield hero art & animations that live off-repo).

## Committed here (build offline, license-clear)
| File | Purpose |
|---|---|
| `icon.svg` | Master app-icon vector (snowflake → tributaries → sprout) |
| `icon-1024.png` | Rasterized 1024² source for `npm run tauri icon` |
| `dmg-background.svg` | Master installer-window backdrop vector |
| `dmg-background.png` / `dmg-background@2x.png` | Rasterized DMG backgrounds (also copied to `../src-tauri/dmg/`) |

## Regenerating the icon set
Edit `icon.svg`, then:
```bash
cd app
rsvg-convert -w 1024 -h 1024 brand/icon.svg -o brand/icon-1024.png
npm run tauri icon brand/icon-1024.png      # regenerates src-tauri/icons/* (icns, ico, png, mobile)
cp src-tauri/icons/128x128.png public/icon.png   # refresh the web favicon
```

## Regenerating the DMG background
Edit `dmg-background.svg`, then:
```bash
cd app
rsvg-convert -w 1320 -h 800 brand/dmg-background.svg -o brand/dmg-background@2x.png
rsvg-convert -w 660  -h 400 brand/dmg-background.svg -o brand/dmg-background.png
cp brand/dmg-background.png    src-tauri/dmg/background.png
cp brand/dmg-background@2x.png src-tauri/dmg/background@2x.png
```
The window geometry (660×400, app at 180,170, Applications at 480,170) is set in
`../src-tauri/tauri.conf.json` under `bundle.macOS.dmg`.

## Fetching the Higgsfield hero art & animations
Those assets are on an account-scoped CDN this build container can't reach. On your own
machine (not behind the egress policy), run:
```bash
cd app/brand
./fetch-assets.sh      # downloads the hero images + splash videos into ./higgsfield/
```
See `fetch-assets.sh` for the URLs and job IDs. If any URL has expired, re-open the job in
your Higgsfield account and update the script.
