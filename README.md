# LAS 44 — oficjalna strona filmu

Strona jest przygotowana do publikacji pod adresem **https://las44.pl/** przez GitHub Pages.
Wersja angielska ma osobny adres: **https://las44.pl/en/**. Obie wersje są połączone przełącznikiem języka.

## Szybkie zmiany

- Polskie teksty, linki, filmy, cel zbiórki i dane twórców: `src/content/siteConfig.ts`.
- Angielskie tłumaczenie: `src/content/siteConfig.en.ts`. Krótkie napisy interfejsu w obu językach: `src/content/locale.ts`.
- Zdjęcia i logotypy: `public/media/`. Po dodaniu pliku wpisz jego ścieżkę w `siteConfig.ts` jako `/media/nazwa-pliku.jpg`.
- Wygląd i układ: `src/styles/` oraz `src/components/`.
- Polski tytuł, opis i obraz udostępniania: `index.html`. Angielskie metadane powstają podczas budowania w `scripts/prerender.mjs`.

Po zatwierdzeniu zmian na gałęzi `main` GitHub Actions automatycznie buduje stronę i publikuje ją na GitHub Pages. Przebieg publikacji można sprawdzić w zakładce **Actions** repozytorium `lubiczlf-hue/las44-film`.

## Lokalny podgląd

Wymagany jest Node.js 22 lub nowszy i pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Podgląd jest zwykle dostępny pod adresem `http://localhost:5173/`.

## Sprawdzenie zmian

```bash
pnpm test:run
pnpm build
```

## Domena

W ustawieniach repozytorium GitHub Pages domena niestandardowa to `las44.pl`. Rekordy DNS dla `las44.pl` i `www.las44.pl` dodaje się w strefie DNS u operatora domeny. Samo ustawienie serwerów nazw w KRU nie kieruje strony na GitHub Pages — potrzebna jest działająca strefa DNS z rekordami A i CNAME.
