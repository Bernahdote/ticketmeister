import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TicketMeister",
  description: "Blue-themed ticket site for upcoming Christy Moore concerts"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="nav">
            <Link className="brand" href="/">
              TicketMeister
            </Link>
            <Link href="/">Concerts</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
