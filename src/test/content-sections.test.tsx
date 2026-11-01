import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from '../App'

it('renders the complete editorial path without a rewards area', () => {
  render(<App />)

  expect(screen.getByRole('heading', { name: 'Temat filmu' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Prawdziwa historia' })).toBeInTheDocument()
  expect(within(document.getElementById('prawdziwa-historia') as HTMLElement).getByText('Rys historyczny')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Jedno nieprzerwane ujęcie.' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Na co zbieramy' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Patroni i sponsorzy' })).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: 'Harmonogram realizacji' })).not.toBeInTheDocument()
  expect(screen.queryByText(/pakiety wsparcia/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/^nagrody$/i)).not.toBeInTheDocument()
  expect(document.querySelector('.story__names')).toBeNull()
})

it('presents the updated one-take concept with emphasized lead and closing', () => {
  render(<App />)

  const section = screen.getByRole('heading', { name: 'Jedno nieprzerwane ujęcie.' }).closest('section') as HTMLElement

  expect(within(section).getByText('Pierwszy w Polsce film fabularny zrealizowany w ten sposób')).toBeInTheDocument()
  expect(within(section).getByText(/Film będzie zrealizowany w jednym, nieprzerwanym ujęciu/)).toBeInTheDocument()
  expect(within(section).getByText('„1917”').tagName).toBe('EM')
  expect(within(section).getByText(/To projekt absolutnie wyjątkowy na polskim rynku/)).toBeInTheDocument()
  expect(within(section).queryByText(/Od pierwszej sceny aż do finału kamera nie opuści Jerzego/)).not.toBeInTheDocument()
})

it('puts the extended war image behind the one-take text', () => {
  render(<App />)

  const section = screen.getByRole('heading', { name: 'Jedno nieprzerwane ujęcie.' }).closest('section') as HTMLElement
  const copy = section.querySelector('.one-take__content') as HTMLElement
  const image = within(section).getByRole('img', { name: 'Partyzant w lesie — ilustracja filmu LAS 44' })

  expect(image).toHaveAttribute('src', '/media/one-take-forest-extended.jpg')
  expect(image).toHaveClass('one-take__backdrop')
  expect(image.compareDocumentPosition(copy) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
})

it('shows both archive photos at their full panoramic proportions', () => {
  render(<App />)

  const romek = within(document.getElementById('temat-filmu') as HTMLElement).getByRole('img', { name: 'Archiwalny portret Romana Tyla' })
  const jerzy = within(document.getElementById('prawdziwa-historia') as HTMLElement).getByRole('img', { name: 'Archiwalny portret Jerzego Godwoda' })

  expect(romek).toHaveAttribute('src', '/media/romek-archive.jpg')
  expect(romek).toHaveAttribute('width', '2048')
  expect(romek).toHaveAttribute('height', '869')
  expect(jerzy).toHaveAttribute('src', '/media/jerzy-archive.jpg')
  expect(jerzy).toHaveAttribute('width', '2000')
  expect(jerzy).toHaveAttribute('height', '900')
})

it('places the true story title over Jerzys panoramic photo', () => {
  render(<App />)

  const section = document.getElementById('prawdziwa-historia') as HTMLElement
  const visual = section.querySelector('.true-story__visual') as HTMLElement

  expect(within(visual).getByRole('img', { name: 'Archiwalny portret Jerzego Godwoda' })).toBeInTheDocument()
  expect(within(visual).getByText('Rys historyczny')).toBeInTheDocument()
  expect(within(visual).getByRole('heading', { name: 'Prawdziwa historia' })).toBeInTheDocument()
  expect(within(visual).queryByText(/Bitwa pod Pecynką rozegrała się/)).not.toBeInTheDocument()
})

it('places Romeks story and its title after the true story', () => {
  render(<App />)

  const trueStory = document.getElementById('prawdziwa-historia') as HTMLElement
  const story = document.getElementById('temat-filmu') as HTMLElement
  const visual = story.querySelector('.story__visual') as HTMLElement

  expect(trueStory.compareDocumentPosition(story) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  expect(within(visual).getByRole('img', { name: 'Archiwalny portret Romana Tyla' })).toBeInTheDocument()
  expect(within(visual).getByText('Opowieść o wartościach silniejszych niż strach')).toBeInTheDocument()
  expect(within(visual).getByRole('heading', { name: 'Temat filmu' })).toBeInTheDocument()
  expect(within(story).getByText(/To przejmująca opowieść o braterstwie broni/)).toBeInTheDocument()
})

it('opens Zapowiedź filmu i przygotowania from O filmie and puts Forma realizacji below it', () => {
  render(<App />)

  const link = within(screen.getByRole('navigation', { name: 'Główna nawigacja' })).getByRole('link', { name: 'O filmie' })
  const section = document.getElementById('o-filmie') as HTMLElement
  const oneTake = screen.getByRole('heading', { name: 'Jedno nieprzerwane ujęcie.' }).closest('section') as HTMLElement

  expect(link).toHaveAttribute('href', '#o-filmie')
  expect(within(section).getByText('Zapowiedź filmu i przygotowania')).toBeInTheDocument()
  expect(within(section).getByRole('heading', { name: 'Pierwszy krok już zrobiliśmy' })).toBeInTheDocument()
  expect(section.compareDocumentPosition(oneTake) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
})

it('reserves the second film for the creators and their interviews', () => {
  render(<App />)

  const section = document.getElementById('o-filmie') as HTMLElement
  const film = within(section).getByRole('heading', { name: 'Od twórców' }).closest('#making-of') as HTMLElement
  const copy = section.querySelector('.production__heading') as HTMLElement

  expect(within(film).getByText('Film w przygotowaniu')).toBeInTheDocument()
  expect(within(copy).getByText(/Zobacz materiał od twórców i posłuchaj ich wypowiedzi/)).toBeInTheDocument()
  expect(copy.compareDocumentPosition(film) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  expect(within(film).queryByText('Drugi film')).not.toBeInTheDocument()
  expect(section.querySelector('.production__images')).toBeNull()
})

it('shows the supplied FAQ answers without placeholders', () => {
  render(<App />)

  expect(screen.queryByText('Szczegóły podamy wkrótce')).not.toBeInTheDocument()
  expect(screen.getByText(/Chcę przenieść na ekran wspomnienia mojego dziadka/)).toBeInTheDocument()
})

it('explains the production goal without a speculative cost breakdown', () => {
  render(<App />)

  const section = screen.getByRole('heading', { name: 'Na co zbieramy' }).closest('section') as HTMLElement
  expect(within(section).getByText(/Zbieramy środki na preprodukcję i realizację zdjęć do filmu/)).toBeInTheDocument()
  expect(within(section).getByText(/Postprodukcja nie jest objęta tą zbiórką/)).toBeInTheDocument()
  expect(within(section).getByText(/Narzędzia AI chcemy wykorzystać pomocniczo/)).toBeInTheDocument()
  expect(within(section).queryByRole('list')).not.toBeInTheDocument()
  expect(within(section).queryByText('Zdjęcia i wynagrodzenia ekipy')).not.toBeInTheDocument()
})

it('shows partner artwork without repeated captions', () => {
  render(<App />)

  const logos = document.querySelectorAll('.partners__logo img')

  expect(logos).toHaveLength(4)
  expect(within(document.getElementById('patroni') as HTMLElement).getByText('Patronat honorowy')).toBeInTheDocument()
  expect(screen.getByText('Grupa rekonstrukcyjna')).toBeInTheDocument()
  expect(logos[1]).toHaveAttribute('src', '/media/patron-muzeum-wiezniow-transparent.png')
  expect(logos[3]).toHaveAttribute('src', '/media/grh-zryw-white.png')
  expect(document.querySelectorAll('.hero__patron img')).toHaveLength(3)
  logos.forEach((logo) => {
    expect(logo.parentElement).toHaveClass('partners__mark')
    expect(logo.closest('.partners__logo')).not.toBeNull()
    expect(logo.closest('.partners__logo')).not.toHaveTextContent(logo.getAttribute('alt')!)
  })
})

it('shows the six film creators in order with portraits beside their bios', () => {
  render(<App />)

  const section = document.getElementById('tworcy') as HTMLElement
  expect(within(section).getByRole('heading', { name: 'Twórcy' })).toBeInTheDocument()

  const names = within(section).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
  expect(names).toEqual([
    'Franciszek Lubicz-Łapiński',
    'Krystian Parol',
    'Martinez Swystun',
    'Atanas Valkov',
    'Patryk Stefański',
    'Mikołaj Paciorek',
  ])

  const portraits = within(section).getAllByRole('img')
  expect(portraits).toHaveLength(6)
  portraits.forEach((portrait) => expect(portrait.closest('.creator__person')).not.toBeNull())

  const mikolaj = within(section).getByRole('heading', { name: 'Mikołaj Paciorek' }).closest('.creator__person') as HTMLElement
  expect(mikolaj).toHaveTextContent('Konsultant historyczny · GRH Zryw')
  expect(within(mikolaj).getByRole('img')).toHaveAttribute('src', '/media/mikolaj-paciorek.png')
})
