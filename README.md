# LAS 44 — lokalna strona crowdfundingowa

## Uruchomienie

Wymagany jest Node.js 20 lub nowszy.

```bash
npm install
npm run dev
```

Vite wyświetli lokalny adres, zwykle `http://localhost:5173/`.

## Edycja treści

Wszystkie dane zmienne znajdują się w `src/content/siteConfig.ts`:

- `hero` — pierwszy ekran i zdjęcie główne;
- `logo` — oficjalny logotyp filmu widoczny w nagłówku, hero i stopce;
- `campaign` — cel oraz integracja Pomagam.pl;
- `teaser` — YouTube, Vimeo albo plik lokalny;
- `story`, `trueStory`, `oneTake` — teksty filmu;
- `production.images` — zdjęcia z realizacji;
- `production.makingOf` — drugi film: ustaw `provider` na `local` lub `embed` i wpisz adres w `source`; dopóki źródło jest puste, widać komunikat „Film w przygotowaniu”;
- `budget.categories` — kategorie budżetu;
- `creator` — informacje o twórcy;
- `partners.logos` — prawdziwe logotypy patronów i sponsorów;
- `timeline`, `faq`, `contact` — harmonogram, pytania i dane kontaktowe.

## Pomagam.pl

Cel jest już ustawiony na `500000`. Dopóki pola `campaignUrl` i
`widgetUrl` pozostają puste, strona pokazuje bezpieczny stan „Zbiórka
wkrótce” bez fikcyjnych wyników.

Po utworzeniu zbiórki wpisz:

```ts
campaign: {
  provider: 'pomagam',
  goalAmount: 500000,
  campaignUrl: 'https://pomagam.pl/ADRES-ZBIORKI',
  widgetUrl: 'https://pomagam.pl/ADRES-ZBIORKI/widget/large/',
}
```

Widget i wszystkie przyciski wsparcia przełączą się automatycznie.

## Teaser

YouTube lub Vimeo:

```ts
teaser: {
  provider: 'youtube',
  source: 'https://www.youtube-nocookie.com/embed/ID-FILMU',
  poster: '/media/teaser-poster.jpg',
}
```

Plik lokalny umieść w `public/media/` i ustaw `provider: 'local'` oraz
`source: '/media/nazwa-pliku.mp4'`.

## Sprawdzenie projektu

```bash
npm run test:run
npm run build
```
