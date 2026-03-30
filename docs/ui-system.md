# UI System

## Kierunek ogólny

System wizualny dla `Pieczone z Sercem` ma być:

- ciepły
- czytelny
- nowoczesny
- miękki w odbiorze
- spójny na mobile i desktopie

To nie jest styl luksusowej cukierni premium ani technicznego landing page. To estetyka lokalnej piekarni z charakterem i domową atmosferą.

## Typografia

### Font nagłówków

Rekomendacja główna:

- `Fraunces`

Rola:

- H1
- H2
- większe cytaty i mocne akcenty sekcyjne

Dlaczego:

- ma charakter
- daje ciepło i elegancję
- dobrze pasuje do marki spożywczej i bardziej emocjonalnych sekcji
- wspiera polskie znaki

### Font tekstu użytkowego

Rekomendacja główna:

- `Manrope`

Rola:

- akapity
- opisy kart
- dane kontaktowe
- badge
- mikrocopy

Dlaczego:

- jest bardzo czytelny
- dobrze działa na mobile
- daje nowoczesny kontrapunkt dla serifowych nagłówków
- wspiera polskie znaki

### Hierarchia typograficzna

- `H1`: wyrazisty, duży, miękko łamany
- `H2`: mocny, ale lżejszy niż H1
- `Lead`: krótszy tekst wspierający nagłówek
- `Body`: tekst podstawowy
- `Meta`: małe opisy, badge, informacje pomocnicze

## Kolory bazowe

### Główna paleta

- `--color-cream: #F9E5C7`
- `--color-accent: #E94F3C`
- `--color-soft: #EBABA3`
- `--color-brown: #4F2D1E`

### Kolory pomocnicze

- `--color-cream-light: #FFF8F1`
- `--color-brown-soft: #7A5A4D`
- `--color-brown-deep: #2E1A12`
- `--color-line: rgba(79, 45, 30, 0.12)`
- `--color-shadow: rgba(79, 45, 30, 0.14)`

## Theme States sekcji

### Theme 1. Hero

- tło: `--color-cream`
- tekst: `--color-brown-deep`
- akcent: `--color-accent`

### Theme 2. Smak

- tło: gradient oparty na `--color-cream` i `--color-soft`
- tekst: `--color-brown-deep`
- akcent: `--color-accent`

### Theme 3. Składniki

- tło: `--color-cream-light`
- tekst: `--color-brown`
- akcent: `--color-soft`

### Theme 4. Z sercem

- tło: miks `--color-soft` i `--color-cream`
- tekst: `--color-brown-deep`
- akcent: `--color-accent`

### Theme 5. Co dziś pieczemy

- tło: `--color-cream-light`
- tekst: `--color-brown-deep`
- akcent: `--color-accent`

## Spacing

### Skala podstawowa

- `4`
- `8`
- `12`
- `16`
- `20`
- `24`
- `32`
- `40`
- `56`
- `72`
- `96`

### Zasady

- mobile: mniejsze odstępy, ale dużo oddechu między blokami
- desktop: sekcje oddzielone mocniej niż komponenty
- tekst i obraz nie mogą się zlewać

## Promienie i kształty

### Radius

- małe elementy: `14px`
- badge i mikroprzyciski: `999px`
- karty: `24px`
- większe sekcyjne powierzchnie: `32px`

### Zasada

System ma być miękki, ale nie przesłodzony. Unikamy zarówno ostrych rogów, jak i przesadnie “cukierkowych” kształtów.

## Cienie i głębia

### Shadow 1

Delikatny cień dla kart:

- miękki
- krótki
- ciepły

### Shadow 2

Większy cień dla głównych powierzchni:

- spokojny
- szeroki
- bez zimnego szarego tonu

### Zasada

Nie używamy ciężkich futurystycznych glow ani szkła. Głębia ma być spokojna i przyjemna.

## Kontener sekcji

### Section Shell

Każda główna sekcja powinna mieć:

- maksymalną szerokość treści
- spójne pionowe odstępy
- logiczny podział na część tekstową i wizualną
- własne tło lub stan kolorystyczny

### Układ

- mobile: jedna kolumna
- tablet: przejście do luźniejszej siatki
- desktop: większa swoboda kompozycji, ale bez chaosu

## Navbar

- tylko nazwa marki
- prosty układ
- sticky lub lekko przyklejony przy scrollu
- bez ciężkiej obudowy
- kolor tekstu zależny od tła sekcji

## Przyciski

### Primary

- tło: `--color-accent`
- tekst: jasny lub ciemnobrązowy po teście kontrastu
- radius: `999px`
- padding: wygodny pod mobile

### Secondary

- tło: transparent lub `--color-cream-light`
- obramowanie: delikatne, ciepłe
- tekst: `--color-brown-deep`

### Ghost

- bez mocnego wypełnienia
- używany oszczędnie

## Badge

### Typy

- `Dziś`
- `Świeżo wypiekane`
- `Sezonowe`
- `Ulubione`
- `Szybko znika`

### Styl

- pill shape
- mały rozmiar
- wyraźny kontrast
- bez przesadnego cienia

## Karta wypieku

### Zawartość

- nazwa
- krótki opis
- badge
- licznik polubień
- ewentualna miniatura lub dekoracyjny detal

### Styl

- jasne tło
- wyraźna hierarchia
- radius `24px`
- cienka linia lub delikatny cień
- dużo oddechu

### Mobile

- jedna kolumna
- większy klik target
- prostszy układ bez przeładowania

## Like Button

### Budowa

- ikona serca
- liczba polubień
- stan aktywny i nieaktywny

### Styl

- stan domyślny: neutralny ciepły
- stan aktywny: `--color-accent`
- animacja: subtelny scale lub pulse po kliknięciu

## Ikony

Rekomendacja:

- `Lucide`
  lub
- `Tabler Icons`

Zasada:

- lekkie
- outline
- spójne
- bez zbyt technicznego charakteru

## Obrazy

### Zasady użycia

- mniej zdjęć, ale lepiej użytych
- lepsze są detale niż przypadkowe szerokie kadry
- zdjęcie ma wspierać layout, a nie go ratować

### Obróbka w layoutcie

- ciepłe kadrowanie
- miękkie maski
- brak galerii przeładowanej słabymi ujęciami

## Zasady dostępności

- wysoki kontrast tekstu względem tła
- przyciski i lajki muszą mieć wygodny rozmiar dotyku
- tekst podstawowy musi być czytelny na telefonie
- żaden ważny komunikat nie może opierać się tylko na kolorze

## Gotowość do layoutu

Na podstawie tego UI systemu można przejść do następnego etapu:

- budowy statycznego layoutu strony
- zaprojektowania komponentów bazowych
- przygotowania pierwszej wersji mobile-first

