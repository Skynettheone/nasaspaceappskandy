import { FaqItem } from "@/components/FaqItem";
import type { Metadata } from "next";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { PageIntro, CommunityBand } from "@/components/Elements";
import { ChallengeCards } from "@/components/ProgramCards";
import program from "@/content/official-program.json";
export const metadata: Metadata = { title: "2026 challenges" };
export default function Challenges() {
  return (
    <main id="main">
      <PageIntro
        label="2026 / THE NEXT FRONTIER"
        title="Pick a challenge. Build it in Kandy."
        description="14 real NASA challenges. Your team, your perspective, and a weekend to turn open data into something meaningful."
      />
      <section className="content-section">
        <div className="quiet-note">
          The 2026 challenge summaries are live. Explore these briefs with your
          Kandy team, then follow each title for the official statement, datasets,
          and submission requirements as NASA releases them.
          <div className="resource-links">
            <a
              className="white-button"
              href={program.challengesSource}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-label">Explore official challenges</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <ChallengeCards />
        <p className="asset-credit">Challenge titles and photographs: NASA Space Apps. Descriptions are brief summaries; the official statements govern participation. Verified 10 October 2026.</p>
      </section>
      <section className="content-section">
        <h2>A few things to know.</h2>
        <div className="faq-list">
          <FaqItem question="Do I need to know how to code?">
            <p>
              No. Space Apps welcomes different disciplines. Your project might
              involve research, design, storytelling, visualisation, or
              software.
            </p>
          </FaqItem>
          <FaqItem question="Can I join without a team?">
            <p>
              You can use our local application to express interest as a solo
              participant. The Kandy team can follow up about ways to meet
              collaborators.
            </p>
          </FaqItem>
          <FaqItem question="Where do I find the official requirements?">
            <p>
              Read the challenge statement and participant terms on the NASA
              Space Apps global website before deciding on your project.
            </p>
          </FaqItem>
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
