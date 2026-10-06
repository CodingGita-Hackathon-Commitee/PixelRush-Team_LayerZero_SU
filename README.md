# SplitEasy — reference-matched HTML/CSS prototype

Open **index.html** to start the prototype. It uses plain HTML, CSS, and a small JavaScript file for the shared theme control and visual effects; no framework, installation, or backend is required.

## Opening flow
Splash → Get Started → Tour steps 1, 2 and 3 → Sign up → Create Group → Group Details.
Splash / Skip to Login → Log in → My Groups dashboard.
Sign up → Customize avatar → Save Avatar → back to Sign up.

## App flows
Home / Groups → Group Details → Add Expense → Split Options → Expense Review.
Group Details → Balances → Scan → Payment Complete → Dashboard.
Scan links to Calculator, AI Chat, and My QR. Profile links to Avatar, Support, History and Squad Float. Group Details links to the Map and Invite.

## Design
The supplied screenshots drive the 400px mobile artboards, original screen structures, typography, spacing, bright green CTAs, serif financial figures, individual card shapes, and shared raised-scan navigation. The first visit opens in the dark emerald theme to match the references. Use the sun/moon control in the page header to switch themes; the selection is saved between pages. Each screen has its own CSS, with assets/clone.css for shared layout corrections and assets/pro.css for common theme styling.

Local reference PNGs supply only photo/illustration regions through CSS background crops (character, avatars, trip photos, map and tour photograph). Headings, forms, cards, transactions, navigation and actions are HTML elements. The tour photo and map retain their embedded visual annotations. Manrope and Playfair Display load from Google Fonts when online, with Segoe UI and Georgia fallbacks offline.

## Prototype behavior
Links navigate between pages; native forms validate input; CSS radio choices, group filters, FAQs and overlay panels work without scripts. The theme selection is the only preference saved locally. Login and sign-up fields are sample UI; personal details are not submitted or saved. Use example information only. Other forms and selections do not persist between pages. Calculator arithmetic, camera scanning, AI, location tracking, payments and borrowing are visual examples. No services are connected and no money moves.

Local HTML, CSS, and image links were checked, and the welcome, home, balances, and avatar screens were reviewed in a browser at mobile width.
