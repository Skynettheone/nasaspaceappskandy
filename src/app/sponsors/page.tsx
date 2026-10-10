import type { Metadata } from "next";
import { GraduationCapIcon as GraduationCap } from "@phosphor-icons/react/dist/ssr/GraduationCap";
import { GraphIcon as Network } from "@phosphor-icons/react/dist/ssr/Graph";
import { RocketLaunchIcon as Rocket } from "@phosphor-icons/react/dist/ssr/RocketLaunch";
import { SectionLabel, ActionLink, PageIntro } from "@/components/Elements";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners & sponsors",
  description: "Support NASA Space Apps Kandy through sponsorship, resources, and expertise. Explore ways to partner with the local community.",
};

const opportunities = [
  { number: "01", title: "Event support", text: "Help make the Kandy experience possible through financial support for event delivery and participant resources.", details: ["Event operations", "Participant essentials", "Learning resources"] },
  { number: "02", title: "Tools & resources", text: "Contribute practical resources that give teams the space and tools to work on their ideas.", details: ["Venue & connectivity", "Equipment & software", "Food & refreshments"] },
  { number: "03", title: "Knowledge & community", text: "Bring your people and experience into the conversation, or help more curious minds discover Space Apps.", details: ["Technical mentorship", "Workshop expertise", "Campus & community outreach"] },
];

export default function Sponsors() {
  return (
    <main id="main" className="sponsors-page">
      <PageIntro
        label="PARTNERS & SPONSORS / 2026"
        title="Help the next big idea take flight."
        description="Put your organisation behind curious minds in Kandy. Help turn open data, different perspectives, and a weekend of collaboration into new possibilities."
      />

      <section className="content-section sponsor-section" aria-labelledby="sponsor-why">
        <div className="sponsor-heading">
          <SectionLabel>WHY PARTNER WITH US</SectionLabel>
          <h2 id="sponsor-why">Local support. Lasting possibilities.</h2>
          <p>Be part of a community exploring challenges for Earth and space, with learning and collaboration at its heart.</p>
        </div>
        <div className="info-grid sponsor-benefits">
          {[
            { icon: GraduationCap, title: "Make learning possible", text: "Help people explore real challenges with open data, practical tools, and support from others." },
            { icon: Network, title: "Meet different perspectives", text: "Connect with students, developers, designers, scientists, and storytellers working together." },
            { icon: Rocket, title: "Support ideas from Kandy", text: "Contribute to a local space where experimentation is welcome and new collaborations can begin." },
          ].map((card) => (
            <article className="info-card" key={card.title}>
              <card.icon size={28} weight="regular" aria-hidden="true" />
              <h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section sponsor-section" aria-labelledby="sponsor-opportunities">
        <div className="sponsor-heading">
          <SectionLabel>WAYS TO CONTRIBUTE</SectionLabel>
          <h2 id="sponsor-opportunities">Find your part in the mission.</h2>
          <p>Start with what your organisation can bring. We can discuss the scope, recognition, and practical details together.</p>
        </div>
        <div className="sponsor-opportunities">
          {opportunities.map((item) => (
            <article className="sponsor-opportunity" key={item.number}>
              <span className="technical-label">{item.number} / PARTNERSHIP</span>
              <h3>{item.title}</h3><p>{item.text}</p>
              <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="sponsor-note">For sponsorship packages and availability, please contact the Kandy organising team.</p>
      </section>

      <section className="content-section sponsor-section sponsor-process" aria-labelledby="sponsor-process">
        <div className="sponsor-heading">
          <SectionLabel>LET’S BUILD TOGETHER</SectionLabel>
          <h2 id="sponsor-process">A conversation.<br />Then a shared plan.</h2>
          <p>We’ll work with you to explore a contribution that fits your organisation and the needs of the local event.</p>
          <ActionLink href="/contact" outline>Discuss a partnership</ActionLink>
        </div>
        <ol className="sponsor-steps">
          {[
            ["Share your interest", "Tell us about your organisation, what you would like to support, and how we can reach you."],
            ["Explore the possibilities", "Discuss relevant opportunities, resources, and sponsorship details with the Kandy team."],
            ["Agree on the details", "Define the contribution, responsibilities, and recognition together before making plans."],
          ].map(([title, text], index) => (
            <li key={title}><span className="technical-label">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="community-band sponsor-contact">
        <span className="cta-pattern" aria-hidden="true" />
        <div>
          <SectionLabel>THE NEXT FRONTIER STARTS HERE</SectionLabel>
          <h2>Let’s make room for possibility.</h2>
          <p>Bring your questions and ideas to the Kandy team.</p>
          <a className="sponsor-email" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="community-action">
          <ActionLink href="/contact">Become a sponsor</ActionLink>
        </div>
      </section>
    </main>
  );
}
