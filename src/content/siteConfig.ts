import type { CampaignConfig } from '../lib/campaign'

export type PendingContent = {
  status: 'pending-content'
  title: string
  answer?: string
  bankTransfer?: boolean
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
    goalAmount: 300000,
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
      'Pierwszy etap, który możesz wesprzeć, obejmuje preprodukcję i rozpoczęcie produkcji filmu. Zebrane środki przeznaczymy na rozwój scenariusza — dokumentację, pracę scenarzysty, redakcję kolejnych wersji i script doctoring — oraz konsultacje historyczne i merytoryczne, dzięki którym zadbamy o wiarygodność opowieści. Sfinansujemy także wybór lokacji, logistykę i organizację planu, pracę profesjonalnej ekipy twórczej i technicznej, kostiumy, charakteryzację i rekwizyty zgodne z realiami epoki oraz wynajem sprzętu potrzebnego do zdjęć w kinowej jakości. Przeprowadzimy próby aktorskie i techniczne niezbędne do realizacji filmu w jednym nieprzerwanym ujęciu, a następnie zrealizujemy część zdjęć.',
      'Postprodukcja będzie kolejnym etapem, wymagającym dodatkowego finansowania.',
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
        '„Las ’44” wyrasta ze wspomnień mojego dziadka — żołnierza Armii Krajowej, uczestnika bitwy pod Pecynką. Miał wtedy zaledwie osiemnaście lat. Tak jak wielu jego rówieśników, zamiast spokojnie wchodzić w dorosłość, musiał zmierzyć się z wojną, głodem i codziennym strachem o życie.',
        'Dla mnie ta historia zaczęła się od rodzinnych rozmów i zapisanych wspomnień. Z czasem zrozumiałem, że opowieść mojego dziadka jest częścią znacznie większej historii — historii młodych ludzi, którzy stanęli do walki o wolną Polskę, choć wiedzieli, jak wiele mogą stracić.',
        'Chcemy stworzyć film w hołdzie im wszystkim. Pokazać ich odwagę, ale też to, co w ich doświadczeniu było najbardziej ludzkie: przyjaźń, tęsknotę za bliskimi, strach i nadzieję, że uda się przeżyć kolejny dzień. Chcemy, aby widzowie zobaczyli w nich ludzi, których wybory i poświęcenie pozwoliły zachować nadzieję na wolność.',
        'Bitwa pod Pecynką była jednym z największych starć partyzanckich podczas niemieckiej okupacji, a mimo to wielu Polaków nigdy o niej nie słyszało. Wierzymy, że film może przywrócić pamięć o tych wydarzeniach i dotrzeć także do młodych widzów — poruszyć ich historią bohaterów, którzy byli niewiele starsi od nich.',
        'Pokolenie, które pamięta wojnę, odchodzi. Razem z nim znikają głosy ludzi, którzy mogliby opowiedzieć nam o niej własnymi słowami. Dlatego tak ważne jest dla nas, by zachować ich wspomnienia i przekazać je dalej.',
        'Zrealizowaliśmy już materiał demonstracyjny, pokazujący klimat i kierunek naszej pracy. Teraz chcemy rozwinąć scenariusz, przygotować produkcję i zrealizować właściwe zdjęcia. Aby to było możliwe, potrzebujemy Twojego wsparcia.',
        'Każda wpłata przybliża nas do stworzenia filmu, który odda hołd uczestnikom bitwy pod Pecynką i pomoże kolejnym pokoleniom poznać ich historię.',
      ].join('\n\n'),
    },
    { status: 'pending-content', title: 'Na co zostaną przeznaczone pieniądze?', answer: 'Na przygotowanie i realizację zdjęć — pracę aktorów i ekipy, kostiumy, rekwizyty oraz organizację planu. Postprodukcja nie jest objęta podstawowym celem zbiórki.' },
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
