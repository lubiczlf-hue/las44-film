import type { CampaignConfig } from '../lib/campaign'

export type PendingContent = {
  status: 'pending-content'
  title: string
  answer?: string
  bankTransfer?: boolean
  fundingPlan?: {
    heading: string
    introduction: string[]
    stages: Array<{ threshold: string; name: string; description: string }>
    conclusion: string[]
  }
}

export type SiteConfig = {
  title: string
  logo: string
  social: { siteUrl: string; facebookUrl: string; youtubeUrl: string }
  navigation: Array<{ label: string; href: string }>
  hero: {
    eyebrow: string
    headline: string
    description: string
    image: string
  }
  campaign: CampaignConfig
  teaser: {
    provider: 'none' | 'youtube' | 'vimeo' | 'local'
    source: string
    poster: string
  }
  story: {
    kicker: string
    heading: string
    paragraphs: string[]
  }
  trueStory: {
    heading: string
    paragraphs: string[]
    quote: string
  }
  oneTake: {
    heading: string
    subheading: string
    lead: string
    paragraphs: string[]
    closing: string
  }
  production: {
    heading: string
    makingOf: {
      title: string
      provider: 'none' | 'local' | 'embed'
      source: string
    }
  }
  budget: {
    heading: string
    paragraphs: string[]
  }
  creators: Array<{
    name: string
    role: string
    bio: string[]
    image: string
    imagePosition?: string
    imageCredit?: string
    imageSourceUrl?: string
    filmpolskiUrl?: string
    showreelUrl?: string
  }>
  partners: {
    heading: string
    logos: Array<{ src: string; alt: string; showInHero?: boolean }>
  }
  faq: PendingContent[]
  contact: {
    email: string
  }
  producer: {
    name: string
    address: string
    nip: string
    regon: string
    krs: string
  }
  donations: {
    recipient: string
    accountNumber: string
    reference: string
  }
}

export const siteConfig: SiteConfig = {
  title: 'LAS 44',
  logo: '/media/las44-official-logo.png',
  social: {
    siteUrl: 'https://las44.pl/',
    facebookUrl: 'https://www.facebook.com/profile.php?id=61588352177926',
    youtubeUrl: 'https://www.youtube.com/@FilmLas44',
  },
  navigation: [
    { label: 'Prawdziwa historia', href: '#prawdziwa-historia' },
    { label: 'O filmie', href: '#o-filmie' },
    { label: 'Twórcy', href: '#tworcy' },
    { label: 'Patroni i sponsorzy', href: '#patroni' },
  ],
  hero: {
    eyebrow: 'Film fabularny oparty na prawdziwych wydarzeniach',
    headline: 'Bitwa pod Pecynką — historia mojego dziadka opowiedziana w jednym nieprzerwanym ujęciu. W hołdzie jego pamięci.',
    description:
      'Podczas niemieckiej obławy na żołnierzy AK w Puszczy Białej osiemnastoletni partyzant sparaliżowany moralnymi wątpliwościami musi zabić pierwszy raz, by wydostać się z oblężenia i ocalić przyjaciela.',
    image: '/media/hero-czujna-para-nowe.jpg',
  },
  campaign: {
    provider: 'pomagam',
    goalAmount: 400000,
    campaignUrl: 'https://pomagam.pl/9crd9m',
    widgetUrl: 'https://pomagam.pl/las44/widget/stream-progress',
  },
  teaser: {
    provider: 'youtube',
    source: 'https://www.youtube-nocookie.com/embed/LL-cucqRc_g',
    poster: '/media/teaser-poster.jpg',
  },
  story: {
    kicker: 'Opowieść o wartościach silniejszych niż strach',
    heading: 'Temat filmu',
    paragraphs: [
      'To przejmująca opowieść o braterstwie broni – o przyjaźni najczystszej próby. W brutalnym świecie wojny młody chłopak traci dziecięcą niewinność, odkrywając w sobie odwagę, o jaką nigdy by się nie podejrzewał. To historia o wartościach, które nie przemijają – o honorze, lojalności i odpowiedzialności za drugiego człowieka. W dzisiejszym świecie, w którym słowa takie jak poświęcenie czy patriotyzm tracą swój dawny sens, ta historia przypomina o wartościach, które tworzyły fundament naszej narodowej tożsamości i wciąż mogą nas jednoczyć.',
    ],
  },
  trueStory: {
    heading: 'Prawdziwa historia',
    paragraphs: [
      'Bitwa pod Pecynką rozegrała się pod koniec sierpnia 1944 roku między III batalionem 13. Pułku Piechoty Armii Krajowej a niemieckim Wehrmachtem i wspierającymi go jednostkami. Była to jedna z największych i najkrwawszych potyczek partyzanckich podczas niemieckiej okupacji.',
      'W gęstwinie Puszczy Białej sześć niemieckich batalionów piechoty, wspieranych ciężkim sprzętem pancernym, zamknęło pierścień okrążenia wokół oddziałów AK. Decydujące starcie nastąpiło 31 sierpnia w rejonie Leśniczówki Pecynka. Oddział dowodzony przez podporucznika Alfreda Wieczorka „Tatara”, liczący około stu żołnierzy, znalazł się w beznadziejnej sytuacji – otoczony z każdej strony, podjął desperacką walkę o wyrwanie się z okrążenia. Rannych i wziętych do niewoli Niemcy rozstrzelali na miejscu, grzebiąc ich w zbiorowej mogile w lesie. Po wojnie ciała poległych żołnierzy Armii Krajowej zostały ekshumowane i z honorami przeniesione na cmentarz parafialny w Ostrowi Mazowieckiej. W bitwie zginęło około 150 polskich żołnierzy, a wielu innych zostało rannych. Ich ofiara stała się symbolem niezłomności i odwagi w walce o niepodległość ojczyzny.',
    ],
    quote:
      'Treatment powstał na bazie rozmów z moim dziadkiem Jerzym i jego zapisanych wspomnień – te osobiste świadectwa stały się fundamentem opowieści.',
  },
  oneTake: {
    heading: 'Jedno nieprzerwane ujęcie.',
    subheading: 'Pierwszy w Polsce film fabularny zrealizowany w ten sposób',
    lead: 'Film będzie zrealizowany w jednym, nieprzerwanym ujęciu',
    paragraphs: [
      ' – od pierwszej sceny aż po finał – w którym kamera nie opuszcza bohatera ani na chwilę, śledząc każdy jego krok, emocję i wybór. Widz nie obserwuje wydarzeń z boku – on w nich uczestniczy. Idzie obok Jerzego, słyszy jego przyspieszony oddech, czuje napięcie przed strzałem i ciężar decyzji, od których zależy życie. Ten sposób narracji – w duchu filmów takich jak *„1917”* – buduje doświadczenie intymne, immersyjne i głęboko poruszające.',
      'Choć może wydawać się, że film nakręcony w jednym ujęciu wymaga ogromnego budżetu i skomplikowanej realizacji, ten projekt udowadnia coś przeciwnego. To kino, które powstaje z prostoty. Cała historia rozgrywa się w surowej scenerii lasu. Dzięki przemyślanej koncepcji inscenizacji, precyzyjnemu planowaniu i wykorzystaniu nowoczesnych technik postprodukcyjnych, film można zrealizować w sposób efektywny finansowo, nie tracąc nic z rozmachu i autentyzmu.',
    ],
    closing: 'To projekt absolutnie wyjątkowy na polskim rynku – pierwszy fabularny film wojenny zrealizowany w całości w formule jednego ujęcia. Innowacyjny, surowy i prawdziwy.',
  },
  production: {
    heading: 'Pierwszy krok już zrobiliśmy',
    makingOf: {
      title: 'Twórcy o filmie',
      provider: 'embed',
      source: 'https://www.youtube-nocookie.com/embed/8i_yz6MN8GQ',
    },
  },
  budget: {
    heading: 'Na co zbieramy',
    paragraphs: [
      'Chcemy zebrać 400 000 zł na przygotowanie i realizację zdjęć do pełnometrażowego filmu wojennego. Wierzymy, że możemy zmieścić się w tym budżecie dzięki przemyślanej formie filmu. Przy odpowiednio długich próbach i precyzyjnym planowaniu jedno nieprzerwane ujęcie może ograniczyć liczbę dni zdjęciowych. Akcja rozgrywa się głównie w lesie, bez budowy kosztownej scenografii, i skupia się na dwóch głównych bohaterach. W wybranych scenach efekty cyfrowe i narzędzia AI mogą ograniczyć wydatki na broń filmową, wybuchy i pirotechnikę.',
      'Zbiórkę prowadzimy w pięciu etapach. Na etapie developmentu dopracujemy scenariusz, skorzystamy z konsultacji historycznych i sprawdzimy lokacje. Preprodukcja obejmie castingi, próby, kostiumy i rekwizyty. Kolejny etap zabezpieczy sprzęt filmowy i sceny batalistyczne; następny — pracę ekipy i obsługę techniczną planu. Ostatni etap obejmie obsadę, logistykę i dokończenie zdjęć.',
      'Każdy próg oznacza łączną sumę zebraną do tego momentu. Cel obejmuje przygotowanie i realizację zdjęć; postprodukcja będzie finansowana oddzielnie. Każda wpłata przybliża nas do filmu, który ocali tę historię od zapomnienia.',
    ],
  },
  creators: [
    {
      name: 'Franciszek Lubicz-Łapiński',
      role: 'Pomysłodawca, operator i producent',
      bio: [
        'Kształcił się na Wydziale Operatorskim Szkoły Filmowej w Łodzi oraz w Warszawskiej Szkole Reklamy. Realizował filmy fabularne, dokumentalne i reklamowe w Polsce i za granicą.',
        'Wspomnienia dziadka Jerzego stały się dla Franciszka początkiem osobistej opowieści o chłopaku, którego wojna zmusza do dorosłości.',
      ],
      image: '/media/creator.jpg',
    },
    {
      name: 'Krystian Parol',
      role: 'Producent',
      bio: [
        'Od początku zaangażowany w powstanie „Las ’44”. Odpowiada za organizację i koordynację produkcji, wspierając rozwój projektu od pierwszych etapów jego realizacji.',
      ],
      image: '/media/krystian-parol.jpg',
    },
    {
      name: 'Martinez Swystun',
      role: 'Reżyser',
      bio: [
        'Reżyser filmów reklamowych, teledysków i projektów dokumentalnych. W swojej pracy łączy opowiadanie historii z nowymi technikami produkcji filmowej.',
        'Jego teledysk dla Electric Light Orchestra zdobył międzynarodowe wyróżnienia, w tym nagrodę reżyserską European Music Video Awards.',
      ],
      image: '/media/martinez-swystun.jpg',
    },
    {
      name: 'Atanas Valkov',
      role: 'Kompozytor',
      bio: [
        'Polsko-bułgarski kompozytor, pianista i producent muzyczny. Łączy brzmienia orkiestralne, jazzowe, elektroniczne oraz inspiracje słowiańskim i bałkańskim folklorem.',
        'Stworzył muzykę m.in. do seriali „Król” i „Belfer” oraz filmów z serii „Legendy Polskie”. Jest laureatem konkursu muzyki filmowej Berlinale.',
      ],
      image: '/media/atanas-valkov.jpeg',
    },
    {
      name: 'Patryk Stefański',
      role: 'Konsultant historyczny · GRH Zryw',
      bio: [
        'Pasjonat i kolekcjoner specjalizujący się w historii polskiego ruchu oporu podczas II wojny światowej. Absolwent Akademii Sztuki Wojennej w Warszawie.',
        'Założyciel i przewodniczący Grupy Rekonstrukcji Historycznej „Zryw”. Za działalność na rzecz upamiętnienia Powstańców Warszawskich otrzymał odznaczenie „Dumni z Powstańców” przyznane przez Komitet Społeczny ds. obchodów 80. rocznicy Powstania Warszawskiego.',
      ],
      image: '/media/patryk-stefanski.jpg',
    },
    {
      name: 'Mikołaj Paciorek',
      role: 'Konsultant historyczny · GRH Zryw',
      bio: [
        'Urodzony 11 lutego 1997 roku w Poznaniu. Działacz społeczny, marszand, kolekcjoner i popularyzator historii. Specjalizuje się w badaniu odznak oddziałów Polskiego Państwa Podziemnego. Interesuje się także falerystyką, pamiątkami wojskowymi, historią Polskich Sił Zbrojnych na Zachodzie oraz materialnym dziedzictwem II wojny światowej.',
        'Zastępca przewodniczącego Grupy Rekonstrukcji Historycznej „Zryw”.',
      ],
      image: '/media/mikolaj-paciorek.png',
    },
  ],
  partners: {
    heading: 'Patroni i sponsorzy',
    logos: [
      {
        src: '/media/patron-dom-pileckich.png',
        alt: 'Muzeum Dom Rodziny Pileckich',
      },
      {
        src: '/media/patron-muzeum-wiezniow-transparent.png',
        alt: 'Muzeum Żołnierzy Wyklętych i Więźniów Politycznych PRL',
      },
      {
        src: '/media/patron-muzeum-wykletych-official-white.png',
        alt: 'Muzeum Żołnierzy Wyklętych',
      },
      {
        src: '/media/grh-zryw-white.png',
        alt: 'Grupa Rekonstrukcji Historycznej „Zryw”',
        showInHero: false,
      },
    ],
  },
  faq: [
    {
      status: 'pending-content',
      title: 'Dlaczego powstaje ten film?',
      answer: [
        'Bitwa pod Pecynką była jednym z najkrwawszych starć partyzanckich w regionie, a mimo to jej historia pozostaje niemal nieznana. Chcemy ocalić pamięć o młodych ludziach, którzy walczyli i oddawali życie za wolną Polskę.',
        'Wierzymy, że takie filmy są dziś szczególnie potrzebne. Przypominają o odwadze, poświęceniu, odpowiedzialności i wartościach, które powinny być przekazywane kolejnym pokoleniom. Postawy ludzi, którzy również dzisiaj potrafią wykazać się niezwykłą odwagą, pokazują, jak ważne są te wartości.',
        'Chcemy stworzyć pierwszy w Polsce pełnometrażowy film wojenny zrealizowany w jednym nieprzerwanym ujęciu, bez ani jednego cięcia. To ambitne przedsięwzięcie artystyczne i techniczne, ale przede wszystkim historia, która zasługuje na opowiedzenie.',
      ].join('\n\n'),
    },
    {
      status: 'pending-content',
      title: 'Na co zostaną przeznaczone pieniądze?',
      fundingPlan: {
        heading: 'Nasz cel – 400 000 zł. Zbieramy etapami!',
        introduction: [
          'Chociaż 400 000 zł może wydawać się niewielką kwotą na realizację pełnometrażowego filmu wojennego, nasza koncepcja pozwala znacząco ograniczyć koszty produkcji. Film chcemy zrealizować w jednym nieprzerwanym ujęciu, co przy odpowiednim przygotowaniu umożliwi skrócenie okresu zdjęciowego. Akcja rozgrywa się głównie w lesie, bez kosztownej scenografii, a historia koncentruje się na dwóch głównych bohaterach. Wykorzystanie sztucznej inteligencji (AI) i efektów cyfrowych pozwoli nam również ograniczyć wydatki na broń filmową, wybuchy i pirotechnikę.',
          'Zbiórkę podzieliliśmy na 5 etapów finansowania. Zaczynamy od 20 000 zł, a każdy kolejny próg pozwoli nam zabezpieczyć środki na konkretne elementy produkcji.',
        ],
        stages: [
          { threshold: 'ETAP I – 20 000 zł', name: 'Development – rozwój projektu', description: 'Dopracowanie i script doctoring scenariusza, konsultacje historyczne, dokumentacja lokacji oraz pokrycie niezbędnych kosztów prac producenckich i organizacyjnych.' },
          { threshold: 'ETAP II – 50 000 zł', name: 'Preprodukcja – przygotowanie filmu', description: 'Organizacja castingów i prób aktorskich, zakup i wypożyczenie umundurowania, broni filmowej i rekwizytów, przygotowanie kostiumów i charakteryzacji oraz niezbędne prace przy lokacjach zdjęciowych.' },
          { threshold: 'ETAP III – 150 000 zł', name: 'Sprzęt filmowy i sceny batalistyczne', description: 'Wynajem sprzętu kamerowego, oświetleniowego i dźwiękowego, realizacja efektów specjalnych i pirotechnicznych, przygotowanie scen kaskaderskich oraz wynagrodzenia kaskaderów i specjalistów odpowiedzialnych za bezpieczeństwo scen batalistycznych.' },
          { threshold: 'ETAP IV – 250 000 zł', name: 'Ekipa filmowa i obsługa techniczna', description: 'Wynagrodzenia ekipy kamerowej, oświetleniowej i dźwiękowej, obsługi technicznej planu, dyżurnych oraz pozostałych specjalistów odpowiedzialnych za sprawną realizację zdjęć.' },
          { threshold: 'ETAP V – 400 000 zł', name: 'Obsada i realizacja zdjęć', description: 'Wynagrodzenia aktorów, udział rekonstruktorów i statystów, zakwaterowanie i wyżywienie ekipy, transport oraz pozostałe koszty logistyczne i organizacyjne niezbędne do przeprowadzenia całego okresu zdjęciowego.' },
        ],
        conclusion: [
          'Podane kwoty oznaczają łączne progi zbiórki, a nie dodatkowe sumy. Docelowe 400 000 zł obejmuje przygotowanie i realizację zdjęć. Postprodukcja będzie finansowana oddzielnie.',
          'Każda wpłata przybliża nas do stworzenia filmu i ocalenia tej historii od zapomnienia.',
        ],
      },
    },
    { status: 'pending-content', title: 'Kiedy film będzie gotowy?', answer: 'Termin premiery zależy od zebrania środków i harmonogramu produkcji. Podamy go, gdy będziemy mogli potwierdzić realną datę.' },
    { status: 'pending-content', title: 'Gdzie będzie można go zobaczyć?', answer: 'Bardzo chcielibyśmy, żeby „LAS 44” trafił do kin. Przed nami jeszcze długa droga i nie możemy tego dziś obiecać, ale będziemy do tego dążyć. O pokazach będziemy informować na stronie projektu i w mediach społecznościowych.' },
    { status: 'pending-content', title: 'Czy film można wesprzeć jako firma?', answer: 'Tak — zapraszamy firmy zainteresowane wsparciem lub współpracą sponsorską. Napisz na franek@spacefilms.pl.' },
    { status: 'pending-content', title: 'Czy mogę wesprzeć film bezpośrednim przelewem?', bankTransfer: true },
    { status: 'pending-content', title: 'Co stanie się, jeżeli zbiórka przekroczy cel?', answer: 'Obecny cel to minimalna kwota potrzebna na przygotowanie i realizację zdjęć. Jeśli ją osiągniemy, podniesiemy cel zbiórki — większy budżet pozwoli nam lepiej dopracować film i podnieść jakość realizacji.' },
  ],
  contact: {
    email: 'franek@spacefilms.pl',
  },
  producer: {
    name: 'Space Films Sp. z o.o.',
    address: 'ul. Żegiestowska 18C, 02-924 Warszawa',
    nip: '5213913394',
    regon: '387617634',
    krs: '0000869613',
  },
  donations: {
    recipient: 'Space Films sp. z o.o.',
    accountNumber: '35 1140 2004 0000 3602 8718 7339',
    reference: 'Darowizna na film LAS44',
  },
}
