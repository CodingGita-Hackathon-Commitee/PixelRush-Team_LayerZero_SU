# SplitEasy — reference-matched HTML/CSS prototype

Open **index.html** to start at the supplied splash design. No JavaScript, framework, installation, or backend.

## Opening flow
Splash → Get Started → Tour steps 1, 2 and 3 → Sign up → Create Group → Group Details.
Splash / Skip to Login → Log in → My Groups dashboard.
Sign up → Customize avatar → Save Avatar → back to Sign up.

## App flows
Home / Groups → Group Details → Add Expense → Split Options → Expense Review.
Group Details → Balances → Scan → Payment Complete → Dashboard.
Scan links to Calculator, AI Chat, and My QR. Profile links to Avatar, Support, History and Squad Float. Group Details links to the Map and Invite.

## Design
The supplied screenshots drive the 400px mobile artboards, original screen structures, typography, spacing, bright green CTAs, serif financial figures, individual card shapes and shared raised-scan navigation. Each reference screen has its own CSS plus assets/clone.css for corrections and shared navigation. Supporting screens use assets/styles.css.

Local reference PNGs supply only photo/illustration regions through CSS background crops (character, avatars, trip photos, map and tour photograph). Headings, forms, cards, transactions, navigation and actions are HTML elements. The tour photo and map retain their embedded visual annotations. Manrope and Playfair Display load from Google Fonts when online, with Segoe UI and Georgia fallbacks offline.

## Prototype behavior
Links navigate between pages; native forms validate input; CSS radio choices, group filters, FAQs and overlay panels work without scripts. Login and sign-up fields have no name attributes, so entered personal details are not submitted or saved. Use example information only. Forms and selections do not persist between pages. Calculator arithmetic, camera scanning, AI, location tracking, payments and borrowing are visual examples. No services are connected and no money moves.

The original Downloads project is unchanged. This folder is the complete updated copy. Browser visual validation was unavailable; source structure, relative links, local assets and primary navigation paths are checked programmatically.
