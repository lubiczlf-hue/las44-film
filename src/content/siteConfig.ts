import type { CampaignConfig } from '../lib/campaign'

export type PendingContent = {
  status: 'pending-content'
  title: string
  answer?: string
}

export type SiteConfig = {
  title: string
  logo: string
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
    phone: string
  }
  producer: {
    name: string
    address: string
    nip: string
    regon: string
    krs: string
  }
}

export const siteConfig: SiteConfig = {
  title: 'LAS 44',
  logo: '/media/las44-official-logo.png',
  navigation: [
    { label: 'Prawdziwa historia', href: '#prawdziwa-historia' },
    { label: 'O filmie', href: '#o-filmie' },
    { label: 'Twórcy', href: '#tworcy' },
    { label: 'Patroni i sponsorzy', href: '#patroni' },
  ],
  hero: {
    eyebrow: 'Film fabularny oparty na prawdziwych wydarzeniach',
    headline: 'Bitwa pod Pecynką. Jedno ujęcie o honorze, braterstwie i walce o wolność.',
    description:
      'Podczas niemieckiej obławy na żołnierzy AK w Puszczy Białej osiemnastoletni partyzant sparaliżowany moralnymi wątpliwościami musi zabić pierwszy raz, by wydostać się z oblężenia i ocalić przyjaciela.',
    image: '/media/hero-czujna-para-got.jpg',
  },
  campaign: {
    provider: 'pomagam',
    goalAmount: 500000,
    campaignUrl: '',
    widgetUrl: '',
  },
  teaser: {
    provider: 'none',
    source: '',
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
      title: 'Making of i wypowiedzi twórców',
      provider: 'none',
      source: '',
    },
  },
  budget: {
    heading: 'Na co zbieramy 500 000 zł',
    paragraphs: [
      'Każda wpłata finansuje konkretny etap realizacji. Podział kwot dodamy po zamknięciu planu produkcyjnego.',
      'Zbieramy 500 000 zł na preprodukcję i realizację zdjęć do filmu. Środki przeznaczymy na przygotowanie planu i pracę ekipy podczas zdjęć. Postprodukcja nie jest objęta tą zbiórką. Historia rozgrywa się głównie w lesie, z niewielką liczbą bohaterów i ograniczoną scenografią. Pozwala to skupić środki na tym, co najważniejsze na ekranie.',
      'Formuła jednego ujęcia wymaga starannych prób i precyzyjnej organizacji, ale może ograniczyć liczbę dni zdjęciowych. Narzędzia AI chcemy wykorzystać pomocniczo przy planowaniu ujęć i organizacji produkcji. Dzięki temu zakładamy budżet zdjęciowy niższy niż przy tradycyjnym filmie fabularnym osadzonym w epoce, bez rezygnacji z historycznej wiarygodności i jakości obrazu.',
    ],
  },
  creators: [
    {
      name: 'Franciszek Lubicz-Łapiński',
      role: 'Autor scenariusza, operator i producent',
      bio: [
        'Absolwent Wydziału Operatorskiego PWSFTviT im. Leona Schillera w Łodzi oraz Warszawskiej Szkoły Reklamy. Realizował filmy fabularne, dokumentalne i reklamowe w Polsce i za granicą.',
        'Zanim powstał scenariusz, były rozmowy z dziadkiem Jerzym. Jego wspomnienia stały się dla Franciszka początkiem osobistej opowieści o chłopaku, którego wojna zmusza do dorosłości.',
      ],
      image: '/media/creator.jpg',
    },
    {
      name: 'Krystian Parol',
      role: 'Producent',
      bio: [
        'Współzałożyciel firmy producenckiej Space Films. Tworzy filmy z przesłaniem, w tym opowieści o polskiej historii i patriotyzmie.',
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
        src: '/media/patron-muzeum-wiezniow.png',
        alt: 'Muzeum Żołnierzy Wyklętych i Więźniów Politycznych PRL',
      },
      {
        src: '/media/patron-muzeum-wykletych.png',
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
    { status: 'pending-content', title: 'Dlaczego powstaje ten film?' },
    { status: 'pending-content', title: 'Na co zostaną przeznaczone pieniądze?' },
    { status: 'pending-content', title: 'Kiedy film będzie gotowy?' },
    { status: 'pending-content', title: 'Gdzie będzie można go zobaczyć?' },
    { status: 'pending-content', title: 'Czy film można wesprzeć jako firma?' },
    { status: 'pending-content', title: 'Co stanie się, jeżeli zbiórka przekroczy cel?' },
  ],
  contact: {
    email: 'franek@spacefilms.pl',
    phone: '+48 735 244 398',
  },
  producer: {
    name: 'Space Films Sp. z o.o.',
    address: 'ul. Żegiestowska 18C, 02-924 Warszawa',
    nip: '5213913394',
    regon: '387617634',
    krs: '0000869613',
  },
}
