import { createContext, useContext } from 'react'

export type Locale = 'pl' | 'en'

export const LocaleContext = createContext<Locale>('pl')

const copy = {
  pl: {
    start: 'początek strony', officialLogo: 'oficjalny logotyp filmu',
    share: 'Udostępnij', support: 'Wesprzyj film', openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu',
    mainNav: 'Główna nawigacja', mobileNav: 'Nawigacja mobilna', menu: 'Menu',
    switchLanguage: 'Switch to English',
    linkCopied: 'Link skopiowany', copyFallback: 'Zaznacz i skopiuj link z pola powyżej',
    closeShare: 'Zamknij udostępnianie', shareTitle: 'Udostępnij stronę LAS 44',
    shareIntro: 'Wyślij link do strony lub udostępnij ją na Facebooku.',
    shareLink: 'Link do strony', copyLink: 'Kopiuj link', shareFacebook: 'Udostępnij na Facebooku',
    honoraryPatronage: 'Patronat honorowy', supportingInstitutions: 'Instytucje wspierające projekt',
    seeTrailer: 'Zobacz zapowiedź filmu', creatorsOnFilm: 'Twórcy o filmie', continue: 'Przejdź dalej',
    fundraiser: 'Zbiórka na Pomagam.pl', campaignHeading: 'Pomóż nam opowiedzieć tę historię',
    campaignProgress: 'Postęp zbiórki LAS 44 na Pomagam.pl', campaignSoon: 'Zbiórka wkrótce',
    campaignSoonText: 'Przygotowujemy stronę zbiórki. Wróć tu niebawem.', goal: 'Cel',
    firstMaterial: 'Zobacz pierwszy materiał', trailer: 'Zapowiedź filmu',
    trailerSoon: 'Zapowiedź filmu pojawi się tutaj wkrótce',
    saveStory: 'Pomóż nam ocalić tę historię od zapomnienia.',
    historicalBackground: 'Rys historyczny', jerzyPortrait: 'Archiwalny portret Jerzego Godwoda',
    romekPortrait: 'Archiwalny portret Romana Tyla', productionForm: 'Forma realizacji',
    partisanImage: 'Partyzant w lesie — ilustracja filmu LAS 44',
    trailerAndPreparations: 'Zapowiedź filmu i przygotowania',
    productionIntro: 'Padał deszcz, a na plan przyjechało 40 osób, które uwierzyły, że tę historię trzeba opowiedzieć. Z ich czasu, energii i uporu powstała zapowiedź filmu. To dopiero początek — zobacz materiał od twórców i posłuchaj, dlaczego tak bardzo zależy nam na tym filmie.',
    filmInPreparation: 'Film w przygotowaniu', filmBudget: 'Budżet filmu',
    peopleBehind: 'Ludzie stojący za projektem', creators: 'Twórcy', portrait: 'Portret',
    historicalGroup: 'Grupa rekonstrukcyjna', questionsAndContact: 'Pytania i kontakt',
    faqHeading: 'Najczęstsze pytania', otherQuestion: 'Masz inne pytanie? Napisz na',
    detailsSoon: 'Szczegóły podamy wkrótce', joinProject: 'Dołącz do projektu – zostań współtwórcą',
    filmProducer: 'Producent filmu', contact: 'Kontakt', facebookAria: 'LAS 44 na Facebooku',
    youtubeAria: 'LAS 44 na YouTube',
  },
  en: {
    start: 'top of page', officialLogo: 'official film logo',
    share: 'Share', support: 'Support the film', openMenu: 'Open menu', closeMenu: 'Close menu',
    mainNav: 'Main navigation', mobileNav: 'Mobile navigation', menu: 'Menu',
    switchLanguage: 'Switch to Polish',
    linkCopied: 'Link copied', copyFallback: 'Select and copy the link above',
    closeShare: 'Close sharing dialog', shareTitle: 'Share the LAS 44 website',
    shareIntro: 'Send this page to someone or share it on Facebook.',
    shareLink: 'Page link', copyLink: 'Copy link', shareFacebook: 'Share on Facebook',
    honoraryPatronage: 'Honorary patrons', supportingInstitutions: 'Institutions supporting the project',
    seeTrailer: 'Watch the film preview', creatorsOnFilm: 'The filmmakers speak', continue: 'Explore the story',
    fundraiser: 'Fundraiser on Pomagam.pl', campaignHeading: 'Help us tell this story',
    campaignProgress: 'LAS 44 fundraising progress on Pomagam.pl', campaignSoon: 'Fundraiser coming soon',
    campaignSoonText: 'We are preparing the fundraising page. Please check back soon.', goal: 'Goal',
    firstMaterial: 'Watch the first footage', trailer: 'Film preview',
    trailerSoon: 'The film preview will appear here soon',
    saveStory: 'Help us keep this story from being forgotten.',
    historicalBackground: 'Historical background', jerzyPortrait: 'Archival portrait of Jerzy Godwod',
    romekPortrait: 'Archival portrait of Roman Tyl', productionForm: 'Filmmaking approach',
    partisanImage: 'A partisan in the forest — an illustration for LAS 44',
    trailerAndPreparations: 'The preview and its making',
    productionIntro: 'It was raining when 40 people arrived on set, united by the belief that this story deserved to be told. Their time, energy and determination made the film preview possible. This is only the beginning — watch the filmmakers speak and hear why this film matters so deeply to us.',
    filmInPreparation: 'Film in preparation', filmBudget: 'Film budget',
    peopleBehind: 'The people behind the project', creators: 'The team', portrait: 'Portrait of',
    historicalGroup: 'Historical reenactment group', questionsAndContact: 'Questions and contact',
    faqHeading: 'Frequently asked questions', otherQuestion: 'Have another question? Write to',
    detailsSoon: 'More details coming soon', joinProject: 'Join the project — become part of the story',
    filmProducer: 'Film producer', contact: 'Contact', facebookAria: 'LAS 44 on Facebook',
    youtubeAria: 'LAS 44 on YouTube',
  },
} as const

export function useCopy() {
  return copy[useContext(LocaleContext)]
}
