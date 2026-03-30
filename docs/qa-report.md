# Etap 7. QA Report

## Zakres

Przeprowadzono QA dla aktualnej wersji strony `Pieczone z Sercem` po wdrożeniu:

- fundamentu projektu
- statycznego layoutu mobile first
- motion foundation na bazie `GSAP + ScrollTrigger`

## Środowisko

- lokalny dev server Next.js
- weryfikacja kodowa przez `npm run lint`
- weryfikacja builda przez `npm run build`
- przegląd interfejsu przez Playwright na desktopie i mobile

## Wynik ogólny

Status: `PASS z uwagami nieblokującymi`

## Co zostało potwierdzone

- strona uruchamia się lokalnie
- `lint` przechodzi bez błędów
- `build` przechodzi bez błędów
- strona renderuje się na desktopie i mobile
- brak błędów konsoli w trakcie podstawowej weryfikacji
- H1 renderuje się poprawnie
- sekcja `Co dziś pieczemy` renderuje się z 6 kartami
- branding w headerze renderuje się poprawnie
- kontakt i główna struktura strony są obecne

## Artefakty QA

Pliki wygenerowane podczas QA:

- `web/qa-artifacts/desktop.png`
- `web/qa-artifacts/mobile.png`
- `web/qa-artifacts/report.json`

## Uwagi i ryzyka

### 1. Like button jest na razie tylko warstwą UI

Przyciski polubień są już obecne wizualnie, ale nie mają jeszcze logiki stanu ani zapisu danych.

Ocena:

- to nie jest błąd na obecnym etapie
- to jest świadomie zostawiony etap do późniejszej implementacji

### 2. Sekcja kontaktu nie zawiera jeszcze telefonu ani e-maila

Na ten moment strona pokazuje adres i godziny otwarcia. To wystarcza do pierwszej wersji, ale finalnie warto dodać przynajmniej jeden bezpośredni kanał kontaktu.

### 3. Visual polish nie jest jeszcze finalny

Architektura jest poprawna, ale część scen nadal ma charakter fundamentu, a nie finalnej reżyserii wizualnej. Dotyczy to przede wszystkim:

- hero
- przejść między sekcjami
- ekspozycji `Co dziś pieczemy`

### 4. Favicon i assety marki są jeszcze tymczasowe

Projekt działa poprawnie, ale branding assetów nie jest jeszcze domknięty.

## Wniosek

Aktualna wersja jest stabilna technicznie i gotowa do następnego kroku po planie:

- poprawki po QA
- dalszy visual polish
- rozwój warstwy motion

