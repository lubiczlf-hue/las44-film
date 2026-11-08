import { siteConfig, type SiteConfig } from './siteConfig'

export const englishSiteConfig: SiteConfig = {
  ...siteConfig,
  social: { ...siteConfig.social, siteUrl: 'https://las44.pl/en/' },
  navigation: [
    { label: 'True story', href: '#prawdziwa-historia' },
    { label: 'About the film', href: '#o-filmie' },
    { label: 'The team', href: '#tworcy' },
    { label: 'Patrons and sponsors', href: '#patroni' },
  ],
  hero: {
    ...siteConfig.hero,
    eyebrow: 'A feature film inspired by true events',
    headline: 'The Battle of Pecynka — my grandfather’s story told in one continuous shot. In tribute to his memory.',
    description: 'During the German encirclement of Home Army soldiers in Puszcza Biała, an eighteen-year-old partisan, paralysed by moral doubt, must kill for the first time to escape and save his friend.',
  },
  story: {
    kicker: 'A story of values stronger than fear',
    heading: 'What the film is about',
    paragraphs: [
      'This is a moving story of comradeship and a friendship tested to its limits. In the brutality of war, a young man loses his childhood innocence and discovers courage he never knew he had. It is a story about enduring values: honour, loyalty and responsibility for another person. At a time when words such as sacrifice and patriotism can lose their meaning, this story recalls the values that helped shape our national identity and can still bring us together.',
    ],
  },
  trueStory: {
    heading: 'The true story',
    paragraphs: [
      'The Battle of Pecynka took place in late August 1944 between the 3rd Battalion of the Polish Home Army’s 13th Infantry Regiment and German Wehrmacht forces with supporting units. It was one of the largest and bloodiest partisan engagements of the German occupation.',
      'Deep in Puszcza Biała, six German infantry battalions, supported by heavy armoured equipment, closed a ring around the Home Army units. The decisive fighting came on 31 August near the Pecynka forester’s lodge. A unit of about one hundred soldiers under Second Lieutenant Alfred Wieczorek, known as “Tatar”, was surrounded on all sides and fought desperately to break out. German troops executed wounded and captured soldiers on the spot and buried them in a mass grave in the forest. After the war, the bodies of the fallen Home Army soldiers were exhumed and reburied with honours at the parish cemetery in Ostrów Mazowiecka. Around 150 Polish soldiers were killed in the battle and many others were wounded. Their sacrifice became a symbol of resolve and courage in the struggle for Poland’s independence.',
    ],
    quote: 'The film treatment grew out of conversations with my grandfather Jerzy and his written recollections. These personal testimonies became the foundation of the story.',
  },
  oneTake: {
    heading: 'One continuous shot.',
    subheading: 'An unprecedented approach to a Polish feature film',
    lead: 'The film will be made as one unbroken shot',
    paragraphs: [
      ' — from the opening scene to the final moment, the camera never leaves Jerzy, following each step, emotion and choice. The audience will not watch from a safe distance; they will be there with him. They will walk beside him, hear his quickening breath, feel the tension before a shot and the weight of decisions on which lives depend. This approach, in the spirit of films such as *1917*, creates an intimate and deeply immersive experience.',
      'A film made to look like one continuous shot may seem expensive and complex, but our project is built around a simpler way of working. The story unfolds in the stark setting of a forest. Careful staging, precise planning and contemporary postproduction techniques will allow us to use the budget efficiently without losing scale or authenticity.',
    ],
    closing: 'Our ambition is to create Poland’s first feature-length war film told entirely in one continuous shot: innovative, raw and truthful.',
  },
  production: {
    heading: 'We have already taken the first step',
    makingOf: { ...siteConfig.production.makingOf, title: 'The filmmakers speak' },
  },
  budget: {
    heading: 'What we are raising funds for',
    paragraphs: [
      'The first stage you can support covers preproduction and the start of filming. The funds raised will go towards developing the screenplay — research, the screenwriter’s work, revisions and script consulting — as well as historical and subject-matter advice to keep the story credible. We will also fund location scouting, logistics and production planning; the work of a professional creative and technical crew; period-appropriate costumes, makeup and props; and camera equipment for cinema-quality filming. Cast and technical rehearsals are essential for a film staged as one continuous shot. After those preparations, we will film part of the story.',
      'Postproduction is a separate stage that will require additional funding.',
    ],
  },
  creators: [
    {
      ...siteConfig.creators[0],
      role: 'Originator, cinematographer and producer',
      bio: [
        'He studied cinematography at the Łódź Film School and at the Warsaw School of Advertising. He has worked on fiction films, documentaries and commercials in Poland and abroad.',
        'His grandfather Jerzy’s recollections became the starting point for Franciszek’s personal story of a boy forced to grow up by war.',
      ],
    },
    {
      ...siteConfig.creators[1],
      role: 'Producer',
      bio: ['Co-founder of the production company Space Films. He makes films with a message, including stories about Polish history and patriotism.'],
    },
    {
      ...siteConfig.creators[2],
      role: 'Director',
      bio: [
        'A director of commercials, music videos and documentary projects. His work combines storytelling with new filmmaking techniques.',
        'His music video for Electric Light Orchestra received international recognition, including a directing award at the European Music Video Awards.',
      ],
    },
    {
      ...siteConfig.creators[3],
      role: 'Composer',
      bio: [
        'A Polish-Bulgarian composer, pianist and music producer. His work brings together orchestral, jazz and electronic sounds with influences from Slavic and Balkan folk music.',
        'He has composed music for the television series “Król” and “Belfer” and for films in the “Polish Legends” series. He has won a Berlinale film-music competition.',
      ],
    },
    {
      ...siteConfig.creators[4],
      role: 'Historical consultant · GRH Zryw',
      bio: [
        'A history enthusiast and collector specialising in the Polish resistance during the Second World War. A graduate of the War Studies University in Warsaw.',
        'Founder and chair of the Zryw Historical Reenactment Group. He received the “Proud of the Insurgents” distinction for his work commemorating the Warsaw Uprising, awarded by the social committee for its 80th anniversary.',
      ],
    },
    {
      ...siteConfig.creators[5],
      role: 'Historical consultant · GRH Zryw',
      bio: [
        'Born on 11 February 1997 in Poznań. A community activist, art dealer, collector and advocate for public history. He specialises in the insignia of Polish Underground State units. His interests also include military decorations, wartime memorabilia, the Polish Armed Forces in the West and the material heritage of the Second World War.',
        'Deputy chair of the Zryw Historical Reenactment Group.',
      ],
    },
  ],
  partners: {
    heading: 'Patrons and sponsors',
    logos: siteConfig.partners.logos.map((logo, index) => ({
      ...logo,
      alt: [
        'Muzeum Dom Rodziny Pileckich — Pilecki Family Home Museum',
        'Muzeum Żołnierzy Wyklętych i Więźniów Politycznych PRL — Museum of the Cursed Soldiers and Political Prisoners',
        'Muzeum Żołnierzy Wyklętych — Museum of the Cursed Soldiers',
        'Grupa Rekonstrukcji Historycznej Zryw — Zryw Historical Reenactment Group',
      ][index],
    })),
  },
  faq: [
    {
      status: 'pending-content',
      title: 'Why are you making this film?',
      answer: [
        'LAS 44 grew out of my grandfather’s memories. He was a soldier of the Polish Home Army and fought in the Battle of Pecynka. He was only eighteen at the time. Like many of his peers, instead of entering adulthood in peace, he had to face war, hunger and the daily fear for his life.',
        'For me, this story began with family conversations and his written recollections. Over time, I came to understand that my grandfather’s story is part of a much larger one: the story of young people who fought for a free Poland, knowing how much they stood to lose.',
        'We want to make this film as a tribute to all of them. We want to show their courage, but also what was most human in their experience: friendship, longing for loved ones, fear and the hope of surviving another day. We want audiences to see them as people whose choices and sacrifices kept the hope of freedom alive.',
        'The Battle of Pecynka was one of the largest partisan battles of the German occupation, yet many people in Poland have never heard of it. We believe a film can bring these events back into public memory and reach younger audiences through the stories of people barely older than they are.',
        'The generation that remembers the war is passing away. With them go the voices of people who could tell us about it in their own words. That is why it matters so much to us to preserve their memories and pass them on.',
        'We have already made a proof of concept that shows the atmosphere and direction of our work. Now we want to develop the screenplay, prepare the production and shoot the film itself. To do that, we need your support.',
        'Every contribution brings us closer to making a film that honours those who fought at Pecynka and helps future generations learn their story.',
      ].join('\n\n'),
    },
    { status: 'pending-content', title: 'What will the money pay for?', answer: 'It will fund preparation and filming: the work of the cast and crew, costumes, props and production logistics. Postproduction is not included in the initial fundraising goal.' },
    { status: 'pending-content', title: 'When will the film be ready?', answer: 'The premiere date depends on raising the funds and on the production schedule. We will announce it once we can confirm a realistic date.' },
    { status: 'pending-content', title: 'Where will I be able to watch it?', answer: 'We would love for LAS 44 to reach cinemas. There is still a long way to go, so we cannot promise that today, but it is what we are working towards. We will announce screenings on the project website and social media.' },
    { status: 'pending-content', title: 'Can a company support the film?', answer: 'Yes. We welcome companies interested in supporting or sponsoring the project. Please write to franek@spacefilms.pl.' },
    { status: 'pending-content', title: 'What if the fundraiser exceeds its goal?', answer: 'The current goal is the minimum needed to prepare and begin filming. If we reach it, we will raise the target. A larger budget will help us refine the film and improve the production.' },
  ],
}
