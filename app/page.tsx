import Link from "next/link";

const categoryLinks = [
  "Concerts",
  "Sport",
  "Family",
  "Theater",
  "Festivals",
  "Stand-Up"
];

const artistImages = {
  powerwolf:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Powerwolf_-_2019169200102_2019-06-18_Zeltfestival_Rhein-Neckar_-_1274_-_B70I3514.jpg/330px-Powerwolf_-_2019169200102_2019-06-18_Zeltfestival_Rhein-Neckar_-_1274_-_B70I3514.jpg",
  giveon:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Giveon_in_2025.jpg/250px-Giveon_in_2025.jpg",
  louisTomlinson:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Louis_Tomlinson_2019_MTV.png/250px-Louis_Tomlinson_2019_MTV.png",
  fiveSecondsOfSummer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/5sos-NZ4A4323.jpg/330px-5sos-NZ4A4323.jpg",
  fooFighters:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Glasto2023.jpg/330px-Glasto2023.jpg",
  systemOfADown:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/SOADJONESBEACH.jpg/330px-SOADJONESBEACH.jpg",
  badBunny:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/250px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg",
  theWeeknd:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Portrait_by_Brian_Ziff.jpg/250px-The_Weeknd_Portrait_by_Brian_Ziff.jpg",
  asapRocky:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/A%24AP_Rocky_at_the_2025_Cannes_Film_Festival_%28cropped_3x4%29.jpg/250px-A%24AP_Rocky_at_the_2025_Cannes_Film_Festival_%28cropped_3x4%29.jpg",
  shinedown:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/ShinedownThreatToSurvival.jpg/330px-ShinedownThreatToSurvival.jpg",
  jCole:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg/250px-HOTSPOTATL_-_21_Savage_%26_J.Cole_Light_Birthday_Bash_ATL_2023_On_FIRE_%28xu6HKf40MX0_-_2m38s%29_%28cropped%29.jpg",
  hammerfall:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Hammerfall_-_Wacken_Open_Air_2023_37_%28cropped%29.jpg/330px-Hammerfall_-_Wacken_Open_Air_2023_37_%28cropped%29.jpg"
};

const featuredEvents = [
  {
    title: "Powerwolf & Hammerfall",
    area: "Hovet",
    date: "Feb 21",
    tag: "Metal",
    image: artistImages.hammerfall
  },
  {
    title: "GIVĒON",
    area: "Annexet",
    date: "March 6",
    tag: "R&B",
    image: artistImages.giveon
  },
  {
    title: "Louis Tomlinson",
    area: "Avicii Arena",
    date: "March 29",
    tag: "Pop",
    image: artistImages.louisTomlinson
  },
  {
    title: "5 Seconds of Summer",
    area: "Hovet",
    date: "April 18",
    tag: "Pop Rock",
    image: artistImages.fiveSecondsOfSummer
  }
];

const upcomingEvents = [
  {
    date: "Feb 21",
    title: "Powerwolf & Hammerfall",
    venue: "Hovet",
    image: artistImages.hammerfall
  },
  {
    date: "March 6",
    title: "GIVĒON",
    venue: "Annexet",
    image: artistImages.giveon
  },
  {
    date: "March 29",
    title: "Louis Tomlinson",
    venue: "Avicii Arena",
    image: artistImages.louisTomlinson
  },
  {
    date: "April 18",
    title: "5 Seconds of Summer",
    venue: "Hovet",
    image: artistImages.fiveSecondsOfSummer
  },
  {
    date: "June 12",
    title: "Foo Fighters",
    venue: "Strawberry Arena",
    image: artistImages.fooFighters
  },
  {
    date: "June 29",
    title: "System of A Down",
    venue: "Strawberry Arena",
    image: artistImages.systemOfADown
  },
  {
    date: "July 10-11",
    title: "Bad Bunny",
    venue: "Strawberry Arena",
    image: artistImages.badBunny
  },
  {
    date: "Aug 8-10",
    title: "The Weeknd",
    venue: "Strawberry Arena",
    image: artistImages.theWeeknd
  },
  {
    date: "Sept 21",
    title: "A$AP Rocky",
    venue: "Avicii Arena",
    image: artistImages.asapRocky
  },
  {
    date: "Nov 9",
    title: "Shinedown",
    venue: "Venue TBA",
    image: artistImages.shinedown
  },
  {
    date: "Nov 11",
    title: "J. Cole",
    venue: "Venue TBA",
    image: artistImages.jCole
  }
];

const genreHighlights = [
  { name: "Pop", count: "114 events" },
  { name: "Rock", count: "84 events" },
  { name: "Musicals", count: "49 events" },
  { name: "Football", count: "62 events" },
  { name: "Kids & Family", count: "37 events" },
  { name: "Comedy", count: "29 events" }
];

export default function HomePage() {
  return (
    <div className="tm-app">
      <header className="tm-header">
        <div className="tm-meta">
          <p>Sweden - SEK</p>
          <div className="tm-meta-links">
            <Link href="/">Gift Cards</Link>
            <Link href="/">Customer Support</Link>
            <Link href="/">My Tickets</Link>
          </div>
        </div>

        <div className="tm-main-bar">
          <Link className="tm-logo" href="/">
            ticketmaster
          </Link>
          <nav className="tm-main-nav">
            <Link href="/">Events</Link>
            <Link href="/">Cities</Link>
            <Link href="/">Special Offers</Link>
          </nav>
          <button className="tm-account" type="button">
            Sign In
          </button>
        </div>

        <div className="tm-search-row">
          <div className="tm-search" role="search">
            <label className="sr-only" htmlFor="event-search">
              Search artists, events, or venues
            </label>
            <input
              id="event-search"
              type="search"
              placeholder="Search artists, events, or venues"
            />
            <button type="button">Search</button>
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
            <img
              className="tm-hero-artist"
              src={artistImages.badBunny}
              alt="Bad Bunny portrait"
              loading="lazy"
            />
            <div className="tm-hero-copy">
              <p className="tm-kicker">Top selling now</p>
              <h1>Bad Bunny at Strawberry Arena</h1>
              <p>Two-night run on July 10-11. High demand expected.</p>
              <button type="button">View Tickets</button>
            </div>
          </article>

          <article className="tm-hero-secondary">
            <img
              className="tm-hero-artist"
              src={artistImages.theWeeknd}
              alt="The Weeknd portrait"
              loading="lazy"
            />
            <div className="tm-hero-copy">
              <p className="tm-kicker">New dates</p>
              <h2>The Weeknd</h2>
              <p>Three dates added: Aug 8-10 at Strawberry Arena.</p>
              <button type="button">Explore</button>
            </div>
          </article>
        </section>

        <section className="tm-section">
          <div className="tm-section-head">
            <h2>Popular Right Now</h2>
            <Link href="/">View All</Link>
          </div>
          <div className="tm-event-grid">
            {featuredEvents.map((event) => (
              <article key={event.title} className="tm-event-card">
                <div className="tm-event-visual">
                  <img src={event.image} alt={`${event.title} promo`} loading="lazy" />
                  <span>{event.tag}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.area}</p>
                <div className="tm-event-meta">
                  <span>{event.date}</span>
                  <Link href="/">Tickets</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tm-columns">
          <article className="tm-section tm-upcoming">
            <div className="tm-section-head">
              <h2>Upcoming in Sweden</h2>
              <Link href="/">Calendar</Link>
            </div>
            <ul>
              {upcomingEvents.map((event) => (
                <li key={event.title}>
                  <img
                    className="tm-upcoming-thumb"
                    src={event.image}
                    alt={`${event.title} photo`}
                    loading="lazy"
                  />
                  <div className="tm-upcoming-copy">
                    <span className="tm-upcoming-date">{event.date}</span>
                    <strong>{event.title}</strong>
                    <p>{event.venue}</p>
                  </div>
                  <Link href="/">Book</Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="tm-section tm-genres">
            <div className="tm-section-head">
              <h2>Explore Genres</h2>
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
            <h2>Get onsale alerts straight to your inbox</h2>
          </div>
          <button type="button">Enable Alerts</button>
        </section>
      </main>

      <footer className="tm-footer">
        <div className="tm-footer-inner">
          <div>
            <h3>ticketmaster</h3>
            <p>
              Secure tickets for concerts, sports, and live entertainment
              across Sweden.
            </p>
          </div>
          <div>
            <h4>About</h4>
            <Link href="/">Company</Link>
            <Link href="/">Press</Link>
            <Link href="/">Careers</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/">Help Center</Link>
            <Link href="/">Purchase Terms</Link>
            <Link href="/">Accessibility</Link>
          </div>
          <div>
            <h4>Follow Us</h4>
            <Link href="/">Instagram</Link>
            <Link href="/">Facebook</Link>
            <Link href="/">YouTube</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
