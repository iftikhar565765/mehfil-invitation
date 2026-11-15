# Mehfil — a Muslim Nikah wedding invitation

a garnet-velvet Mughal darbar nikah invitation: Bismillah at the door, the blessed verse of Ar-Rum, brass chandeliers, and an octagonal darbar seal. Built as a static site + API on Cloudflare Workers with a D1 database for published invitations and guest replies.

## The suite

1. **The sealed envelope** — garnet velvet liner, gold lattice, darbar seal.
2. **The arch invitation** — a golden jharokha arch on the velvet darbar.
3. **The chronicle** — the couple's story with a keepsake quote.
4. **The blessed verse** — Surah Ar-Rum 30:21 in Arabic and English.
5. **Save the date** — the golden pavilion, calendar links.
6. **The celebrations** — mayun, mehndi, Nikah, rukhsati, walima on a golden thread.
7. **The palette** — darbar colours and a dress-code note.
8. **The festivities** — a string of chandeliers.
9. **Venue, countdown, RSVP, closing dua** — everything a guest needs.


## Customizer

`customize.html` is a guided studio with a live preview. Step four —
**The celebrations** — edits every Muslim wedding event: name, date, time
(the readable line composes itself) and what happens, for all five events
plus the kindly-reply slot. Publish gives a live link on the worker with
replies collected in D1.

## Stack

- Static assets + `/api/*` served by `worker.js` (Cloudflare Workers)
- D1 database `noor-invitations` (auto-provisioned on first deploy)
- GitHub Actions auto-deploy on push to `main`
  (needs `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` repo secrets)

See `DEPLOY.md` for the one-time setup.
