import type { Metadata } from "next";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CalendarDotsIcon as CalendarDays } from "@phosphor-icons/react/dist/ssr/CalendarDots";
import { MapPinIcon as MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { UsersThreeIcon as Users } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { PageIntro, CommunityBand } from "@/components/Elements";
import { spaceAppsEvent } from "@/content/event";
export const metadata: Metadata = { title: "Events & programme" };
export default function Events() {
  return (
    <main id="main">
      <PageIntro
        label="EVENTS & PROGRAMME"
        title="Make space for what comes next."
        description="The Kandy programme brings people together to learn, collaborate, and turn ideas into projects."
      />
      <section className="content-section">
        <div className="info-grid">
          {[
            {
              icon: CalendarDays,
              title: spaceAppsEvent.dates,
              text: `Explore ${spaceAppsEvent.theme} at NASA Space Apps Kandy. Session and venue opening times will follow.`,
              status: "DATES CONFIRMED",
            },
            {
              icon: MapPin,
              title: "Venue",
              text: "Kandy, Sri Lanka. Venue and access information will be announced here.",
              status: "TO BE ANNOUNCED",
            },
            {
              icon: Users,
              title: "In person + virtual",
              text: "The official Kandy event supports both in-person and virtual participation. All backgrounds and experience levels are welcome.",
              status: "HYBRID EVENT",
            },
          ].map((card) => (
            <article className="info-card" key={card.title}>
              <card.icon size={28} weight="regular" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className="status-pill">{card.status}</span>
            </article>
          ))}
        </div>
        <a
          className="text-link"
          href={spaceAppsEvent.kandyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the official Kandy event listing <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </section>
      <section className="content-section">
        <h2>A journey from curiosity to creation.</h2>
        <div className="numbered-list">
          {[
            [
              "01",
              "Get ready",
              "Explore open data, meet the community, and start thinking about the questions you want to tackle.",
            ],
            [
              "02",
              "Build together",
              "Choose an official challenge, collaborate with a team, and develop your idea.",
            ],
            [
              "03",
              "Share your work",
              "Present what you have made and learn from the ideas around you.",
            ],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
