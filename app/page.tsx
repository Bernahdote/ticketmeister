import Link from "next/link";

const categoryLinks = [
  "Konserter",
  "Sport",
  "Familj",
  "Teater",
  "Festivaler",
  "Standup"
];

const featuredEvents = [
  {
    title: "Sabaton",
    area: "3Arena, Stockholm",
    date: "12 mars 2026",
    tag: "Rock"
  },
  {
    title: "Sverige vs Norge",
    area: "Friends Arena, Solna",
    date: "18 mars 2026",
    tag: "Sport"
  },
  {
    title: "Mamma Mia! The Party",
    area: "Tyrol, Stockholm",
    date: "Varje fredag",
    tag: "Show"
  },
  {
    title: "Way Out West 2026",
    area: "Slottsskogen, Goteborg",
    date: "13 aug 2026",
    tag: "Festival"
  }
];

const upcomingEvents = [
  {
    date: "26 feb",
    title: "Laleh",
    venue: "Scandinavium, Goteborg"
  },
  {
    date: "01 mar",
    title: "Disney On Ice",
    venue: "Malmo Arena, Malmo"
  },
  {
    date: "05 mar",
    title: "SHL Slutspel",
    venue: "Lulea Energi Arena, Lulea"
  },
  {
    date: "08 mar",
    title: "The Weeknd",
    venue: "Tele2 Arena, Stockholm"
  }
];

const genreHighlights = [
  { name: "Pop", count: "114 events" },
  { name: "Rock", count: "84 events" },
  { name: "Musikal", count: "49 events" },
  { name: "Fotboll", count: "62 events" },
  { name: "Barn & Familj", count: "37 events" },
  { name: "Humor", count: "29 events" }
];

export default function HomePage() {
  return (
    <div className="tm-app">
      <header className="tm-header">
        <div className="tm-meta">
          <p>Sverige - SEK</p>
          <div className="tm-meta-links">
            <Link href="/">Presentkort</Link>
            <Link href="/">Kundservice</Link>
            <Link href="/">Mina biljetter</Link>
          </div>
        </div>

        <div className="tm-main-bar">
          <Link className="tm-logo" href="/">
            ticketmaster
          </Link>
          <nav className="tm-main-nav">
            <Link href="/">Evenemang</Link>
            <Link href="/">Stader</Link>
            <Link href="/">Specialerbjudanden</Link>
          </nav>
          <button className="tm-account" type="button">
            Logga in
          </button>
        </div>

        <div className="tm-search-row">
          <div className="tm-search" role="search">
            <label className="sr-only" htmlFor="event-search">
              Sok efter artist, event eller arena
            </label>
            <input
              id="event-search"
              type="search"
              placeholder="Sok artist, event eller arena"
            />
            <button type="button">Sok</button>
          </div>
        </div>

        <div className="tm-chip-row">
          {categoryLinks.map((category) => (
            <Link key={category} href="/">
              {category}
            </Link>
          ))}
        </div>
      </header>

      <main className="tm-main">
        <section className="tm-hero">
          <article className="tm-hero-primary">
            <p className="tm-kicker">Live nation spotlight</p>
            <h1>Coldplay i Stockholm 2026</h1>
            <p>Tre extranatter slapps. Forsaljning startar tisdag 10:00.</p>
            <button type="button">Se biljetter</button>
          </article>

          <article className="tm-hero-secondary">
            <p className="tm-kicker">Nyss slappt</p>
            <h2>Eurovision Live Tour</h2>
            <p>Malmo, Stockholm och Goteborg. VIP-paket tillgangliga nu.</p>
            <button type="button">Upptack</button>
          </article>
        </section>

        <section className="tm-section">
          <div className="tm-section-head">
            <h2>Populart just nu</h2>
            <Link href="/">Visa alla</Link>
          </div>
          <div className="tm-event-grid">
            {featuredEvents.map((event, index) => (
              <article key={event.title} className="tm-event-card">
                <div className={`tm-event-visual tone-${index + 1}`}>
                  <span>{event.tag}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.area}</p>
                <div className="tm-event-meta">
                  <span>{event.date}</span>
                  <Link href="/">Biljetter</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tm-columns">
          <article className="tm-section tm-upcoming">
            <div className="tm-section-head">
              <h2>Kommande i Sverige</h2>
              <Link href="/">Kalender</Link>
            </div>
            <ul>
              {upcomingEvents.map((event) => (
                <li key={event.title}>
                  <span>{event.date}</span>
                  <div>
                    <strong>{event.title}</strong>
                    <p>{event.venue}</p>
                  </div>
                  <Link href="/">Boka</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="tm-section tm-genres">
            <div className="tm-section-head">
              <h2>Utforska genrer</h2>
            </div>
            <div className="tm-genre-grid">
              {genreHighlights.map((genre) => (
                <button key={genre.name} type="button">
                  <strong>{genre.name}</strong>
                  <span>{genre.count}</span>
                </button>
              ))}
            </div>
          </article>
        </section>

        <section className="tm-strip">
          <div>
            <p className="tm-kicker">Ticket Alert</p>
            <h2>Fa forsaljningsstart direkt i inkorgen</h2>
          </div>
          <button type="button">Aktivera bevakning</button>
        </section>
      </main>

      <footer className="tm-footer">
        <div className="tm-footer-inner">
          <div>
            <h3>ticketmaster</h3>
            <p>Sakra biljetter till konserter, sport och scen i hela Sverige.</p>
          </div>
          <div>
            <h4>Om oss</h4>
            <Link href="/">Foretaget</Link>
            <Link href="/">Press</Link>
            <Link href="/">Jobba hos oss</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/">Hjalpcenter</Link>
            <Link href="/">Kopvillkor</Link>
            <Link href="/">Tillganglighet</Link>
          </div>
          <div>
            <h4>Folj oss</h4>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">YouTube</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
