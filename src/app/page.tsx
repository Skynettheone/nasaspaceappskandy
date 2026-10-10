import Link from "next/link";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { PlanetIcon as Orbit } from "@phosphor-icons/react/dist/ssr/Planet";
import { UsersThreeIcon as Users } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { BroadcastIcon as Radio } from "@phosphor-icons/react/dist/ssr/Broadcast";
import { ChallengeCards, AwardsPreview } from "@/components/ProgramCards";
import { Hero } from "@/components/Hero";
import { WorldMap } from "@/components/WorldMap";
import { ActionLink, CommunityBand, SectionLabel } from "@/components/Elements";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="main" className="home-page">
      <Hero />
      <section id="discover" className="home-intro">
        <SectionLabel>FROM KANDY. FOR THE WORLD.</SectionLabel>
        <h2>
          Extraordinary things begin
          <br />
          with a curious mind.
        </h2>
        <p>
          A community of problem-solvers exploring Earth and space together.
          NASA Space Apps brings people from different backgrounds together to
          build with open data, share ideas, and discover what is possible.
        </p>
      </section>
      <section className="focus-section">
        <div className="section-heading">
          <div><SectionLabel>2026 / CHALLENGE BRIEFS ARE LIVE</SectionLabel><h2>Real NASA challenges.<br />Made for curious minds.</h2></div>
          <p>Explore 14 challenges with your Kandy team. Start with Earth observation, space exploration, or a new way to tell a scientific story.</p>
        </div>
        <ChallengeCards featured />
        <div className="program-section-bottom"><span>Official NASA imagery · 2026 challenge summaries</span><ActionLink href="/challenges" outline>Explore all 14 challenges</ActionLink></div>
      </section>
      <section className="approach-section">
        <div className="section-heading">
          <div>
            <SectionLabel>MORE THAN A HACKATHON</SectionLabel>
            <h2>
              Different perspectives.
              <br />
              Shared possibilities.
            </h2>
          </div>
        </div>
        <div className="approach-grid">
          <article className="approach-card approach-main">
            <SectionLabel>BRING YOUR PERSPECTIVE</SectionLabel>
            <h3>
              You don&apos;t have to be
              <br />a rocket scientist.
            </h3>
            <p>
              Code, sketch, research, write, or ask a better question. Every
              discipline brings something valuable to the table.
            </p>
            <div className="focus-tags">
              <span>Students</span>
              <span>Developers</span>
              <span>Designers</span>
              <span>Scientists</span>
              <span>Storytellers</span>
            </div>
            <Link className="text-link" href="/about">
              Discover Space Apps <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </article>
          <article className="approach-card approach-accent">
            <Orbit size={38} weight="regular" aria-hidden="true" />
            <div>
              <span className="technical-label">
                LOCAL IDEAS / GLOBAL CONNECTIONS
              </span>
              <h3>
                One community.
                <br />
                No small ideas.
              </h3>
              <p>
                A space to meet collaborators and see a familiar problem from a
                new angle.
              </p>
            </div>
          </article>
          <article className="approach-card approach-global">
            <Users size={28} weight="regular" aria-hidden="true" />
            <h3>Make room for more.</h3>
            <p>Connect your campus with the Kandy community.</p>
            <Link href="/ambassadors" className="text-link">
              Become an ambassador <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </article>
          <article className="approach-card approach-horizon">
            <div className="horizon-copy">
              <SectionLabel>BUILD TOGETHER</SectionLabel>
              <h3>
                From a first question
                <br />
                to a new possibility.
              </h3>
              <p>
                Meet your team, explore the data, and bring an idea to life.
              </p>
              <Link href="/register" className="text-link">Build with us <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </div>
            <ol className="mission-steps" aria-label="Your Space Apps journey">
              <li><span>01</span> Explore</li>
              <li><span>02</span> Collaborate</li>
              <li><span>03</span> Create</li>
            </ol>
          </article>
        </div>
      </section>
      <section className="statement-section">
        <span className="statement-pattern" aria-hidden="true" />
        <SectionLabel>YOUR IDEAS BELONG HERE</SectionLabel>
        <h2>
          The next big idea
          <br />
          could begin with you.
        </h2>
        <p>Come with a team, or come ready to find one.</p>
        <ActionLink href="/register">Join the Kandy community</ActionLink>
      </section>
      <section className="world-section">
        <div className="section-heading">
          <div>
            <SectionLabel>LOCAL ROOTS. GLOBAL REACH.</SectionLabel>
            <h2>Connected by curiosity.</h2>
          </div>
          <p>
            From the heart of Sri Lanka to a worldwide community of
            problem-solvers.
          </p>
        </div>
        <WorldMap />
      </section>
      <AwardsPreview />
      <section className="pathways-section">
        <div className="section-heading">
          <div>
            <SectionLabel>FIND YOUR ROLE</SectionLabel>
            <h2>Many ways to be part of it.</h2>
          </div>
        </div>
        <div className="pathway-grid">
          <Link href="/join">
            <Users size={28} weight="regular" aria-hidden="true" />
            <span className="technical-label">VOLUNTEERS & MENTORS</span>
            <h3>Help ideas take flight.</h3>
            <p>Share your time, experience, or technical skills.</p>
            <ArrowUpRight className="card-arrow" size={22} aria-hidden="true" />
          </Link>
          <Link href="/sponsors" className="sponsor-pathway">
            <Orbit size={28} weight="regular" aria-hidden="true" />
            <span className="technical-label">PARTNERS & SUPPORTERS</span>
            <h3>Support the next generation.</h3>
            <p>Help make collaborative exploration possible in Kandy.</p>
            <ArrowUpRight className="card-arrow" size={22} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="updates-section">
        <div className="section-heading">
          <div>
            <SectionLabel>MISSION UPDATES</SectionLabel>
            <h2>Stay in the loop.</h2>
          </div>
          <ActionLink href="/news" outline>
            All updates
          </ActionLink>
        </div>
        <div className="update-notice">
          <Radio size={27} weight="regular" aria-hidden="true" />
          <div>
            <h3>{site.eventStatus}</h3>
            <p>
              Explore The Next Frontier on November 14–15, 2026, in person or
              virtually. Kandy venue and session details will follow.
            </p>
          </div>
          <Link href="/events" className="text-link">
            Event information <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
