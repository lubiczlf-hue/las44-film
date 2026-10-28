export function FinalCta({ supportHref }: { supportHref: string }) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <p className="section-kicker">Dołącz do projektu – zostań współtwórcą</p>
      <h2 id="final-cta-title">Pomóż przenieść tę historię na ekran</h2>
      <a className="button button--gold" href={supportHref}>Wesprzyj film</a>
    </section>
  )
}
