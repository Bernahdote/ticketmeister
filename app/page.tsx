import Link from "next/link";

const upcomingConcerts = [
  {
    city: "Dublin",
    venue: "3Arena",
    date: "March 15, 2026",
    price: "EUR 55"
  },
  {
    city: "Cork",
    venue: "Live at the Marquee",
    date: "April 2, 2026",
    price: "EUR 49"
  },
  {
    city: "Galway",
    venue: "Leisureland",
    date: "April 20, 2026",
    price: "EUR 45"
  },
  {
    city: "Limerick",
    venue: "University Concert Hall",
    date: "May 4, 2026",
    price: "EUR 42"
  }
];

export default function HomePage() {
  return (
    <section className="stack">
      <div className="hero card">
        <p className="kicker">Official Fan Ticket Portal</p>
        <h1>Christy Moore Live 2026</h1>
        <p>
          TicketMeister brings you upcoming Christy Moore concerts in one
          place. Secure your seat for the next Ireland tour dates.
        </p>
        <div className="cta-row">
          <Link className="button" href="#upcoming-concerts">
            Browse Concerts
          </Link>
        </div>
      </div>

      <section id="upcoming-concerts" className="card stack">
        <h2>Upcoming Concerts (Sample)</h2>
        <ul className="concert-list">
          {upcomingConcerts.map((concert) => (
            <li key={`${concert.city}-${concert.date}`} className="concert-item">
              <div>
                <strong>{concert.city}</strong>
                <p>
                  {concert.venue} • {concert.date}
                </p>
              </div>
              <span>{concert.price}</span>
            </li>
          ))}
        </ul>
        <p className="hint">
          A lightweight middleware layer runs on app requests before pages are
          served.
        </p>
      </section>
    </section>
  );
}
