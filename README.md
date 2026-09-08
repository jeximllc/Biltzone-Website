# Biltzone Website

One-page bilingual (KR/EN) marketing site for Biltzone, an infrastructure materials technology company. Built from `BILTZONE_OnePage_Website_Design_v2.pptx`.

## Structure

- `index.html` — all page content and markup, in slide order (Hero → About → Process → Products → Strategy → Applications → Contact)
- `css/style.css` — styling and layout
- `js/main.js` — language toggle (KR/EN) and mobile nav
- `assets/images/` — section photography, sourced from the design deck

## Language toggle

Every translatable element carries `data-ko` / `data-en` attributes. The toggle in the nav (top right) swaps `innerHTML` between the two and remembers the choice in `localStorage`. Default language is Korean.

## Local preview

No build step — open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Status

Review draft — not yet deployed. Product badge claims (PG grade, BW thermal-energy note, RG100 tensile strength, SP standard compliance) are carried over from deck v2 and still need test-standard sign-off before public launch.
