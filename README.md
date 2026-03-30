# Pieczone z Sercem

Projekt strony internetowej dla piekarni `Pieczone z Sercem`.

Repozytorium zawiera gotową aplikację `Next.js` w katalogu głównym oraz dokumentację projektową w folderze `docs`.

## Założenia projektu

- język strony: polski
- poprawne kodowanie UTF-8
- priorytet: mobile first
- nacisk na design, atmosferę i scroll-driven storytelling
- osobny moduł `Co dziś pieczemy`

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP + ScrollTrigger

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run lint
npm run build
```

## Struktura repozytorium

- `src/app` — layout, globalne style i strona główna
- `src/components` — komponenty sekcji i UI
- `src/data` — dane startowe strony
- `docs` — brief, plan, treści, UI system i QA

## Dokumenty robocze

- `docs/master-brief.md`
- `docs/project-plan.md`
- `docs/content-draft-pl.md`
- `docs/ui-system.md`
- `docs/qa-report.md`

## Deploy

Projekt jest przygotowany do bezpośredniego deployu na Vercel z katalogu głównego repozytorium.
