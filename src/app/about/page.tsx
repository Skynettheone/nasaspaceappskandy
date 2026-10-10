import type { Metadata } from "next";
import { GlobeHemisphereEastIcon as Globe2 } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereEast";
import { UsersThreeIcon as Users } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { BinocularsIcon as Telescope } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { PageIntro, SectionLabel, CommunityBand } from "@/components/Elements";
import { participation } from "@/content/site";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return (
    <main id="main">
      <PageIntro
        label="ABOUT NASA SPACE APPS KANDY"
        title="Local curiosity. Limitless possibility."
        description="Connecting people in Kandy through science, creativity, collaboration, and a shared curiosity about our world."
      />
      <section className="content-section split-layout">
        <div>
          <SectionLabel>OUR COMMUNITY</SectionLabel>
          <h2>A place for people who ask “what if?”</h2>
          <p>
            NASA Space Apps is a global hackathon where teams use open data to
            address challenges connected to Earth and space. The Kandy community
            brings that spirit of exploration to Sri Lanka.
          </p>
          <p>
            Our focus is simple: bring people together, welcome different
            perspectives, and create space for ideas to grow.
          </p>
        </div>
        <div className="numbered-list">
          {participation.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section">
        <SectionLabel>WHAT BRINGS US TOGETHER</SectionLabel>
        <div className="info-grid">
          {[
            {
              icon: Globe2,
              title: "Open exploration",
              text: "Explore real datasets and scientific questions with a community that values learning.",
            },
            {
              icon: Users,
              title: "Different perspectives",
              text: "Build alongside people with different skills, experiences, and ways of thinking.",
            },
            {
              icon: Telescope,
              title: "Room to discover",
              text: "Try an idea, learn from it, and share what you discover along the way.",
            },
          ].map((card) => (
            <article className="info-card" key={card.title}>
              <card.icon size={28} weight="regular" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
