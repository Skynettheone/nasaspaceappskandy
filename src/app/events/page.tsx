import type { Metadata } from "next";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CalendarDotsIcon as CalendarDays } from "@phosphor-icons/react/dist/ssr/CalendarDots";
import { MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { UsersThreeIcon as Users } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { PageIntro, CommunityBand } from "@/components/Elements";
import { spaceAppsEvent } from "@/content/event";
import { LocalizedText as L } from "@/components/LocalizedText";
import { createPageMetadata } from "@/content/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Events & programme",
  description: "Explore the NASA Space Apps Kandy 2026 event dates, location, programme, and participation details.",
  path: "/events",
});
export default function Events() {
  return (
    <main id="main">
      <PageIntro
        label={<L id="events.intro.label" />}
        title={<L id="events.intro.title" />}
        description={<L id="events.intro.description" />}
      />
      <section className="content-section">
        <div className="info-grid">
          {[
            {
              icon: CalendarDays,
              title: "events.card.date.title" as const,
              text: "events.card.date.text" as const,
              status: "events.card.date.status" as const,
            },
            {
              icon: MapPin,
              title: "events.card.venue.title" as const,
              text: "events.card.venue.text" as const,
              status: "events.card.venue.status" as const,
            },
            {
              icon: Users,
              title: "events.card.mode.title" as const,
              text: "events.card.mode.text" as const,
              status: "events.card.mode.status" as const,
            },
          ].map((card) => (
            <article className="info-card" key={card.title}>
              <card.icon size={28} weight="regular" aria-hidden="true" />
              <h3><L id={card.title} /></h3>
              <p><L id={card.text} /></p>
              <span className="status-pill"><L id={card.status} /></span>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href={spaceAppsEvent.kandyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <L id="events.officialLink" /> <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>
      <section className="content-section">
        <h2><L id="events.journey.title" /></h2>
        <div className="numbered-list">
          {[
            [
              "01",
              "events.journey.01.title",
              "events.journey.01.text",
            ],
            [
              "02",
              "events.journey.02.title",
              "events.journey.02.text",
            ],
            [
              "03",
              "events.journey.03.title",
              "events.journey.03.text",
            ],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3><L id={title as "events.journey.01.title"} /></h3>
                <p><L id={text as "events.journey.01.text"} /></p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
