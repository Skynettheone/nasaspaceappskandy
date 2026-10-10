import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { PageIntro, CommunityBand, SectionLabel } from "@/components/Elements";
import program from "@/content/official-program.json";

export const metadata: Metadata = { title: "Awards & recognition" };
export default function Awards() {
  return (
    <main id="main">
      <PageIntro label="RECOGNITION / FROM LOCAL TO GLOBAL" title="Good ideas deserve to go further." description="Build with your community in Kandy. Discover the different ways NASA Space Apps recognizes exceptional projects around the world." />
      <section className="content-section">
        <div className="program-intro">
          <div><SectionLabel>10 GLOBAL AWARD CATEGORIES</SectionLabel><p>The official awards menu currently features the 2025 edition. These are its published categories, shown for inspiration while we await 2026 award details. Kandy-specific prizes have not been announced.</p></div>
          <a className="text-link" href={program.awardsSource} target="_blank" rel="noopener noreferrer">Official awards / 2025 <ArrowUpRightIcon size={18} aria-hidden="true" /></a>
        </div>
        <div className="award-grid">{program.awards.map((award, index) => (
          <article className="award-card" key={award.name}>
            <Image src={award.image} alt="" width={120} height={120} />
            <div><span className="technical-label">AWARD / {String(index + 1).padStart(2, "0")}</span><h2>{award.name}</h2><p>{award.description}</p></div>
          </article>
        ))}</div>
        <p className="asset-credit">Award category names and original illustrations: NASA Space Apps, 2025 awards edition. Verified 10 October 2026.</p>
      </section>
      <section className="content-section">
        <SectionLabel>UNDERSTANDING THE JOURNEY</SectionLabel><h2>A local start. A global opportunity.</h2>
        <p>The published 2025 judging process provides a useful guide to how recognition works. Participation does not guarantee nomination or an award; follow the official 2026 rules when released.</p>
        <div className="numbered-list">
          <article><span>01</span><div><h3>Local judging</h3><p>Local and Universal Event judges select projects to advance as Global Nominees.</p></div></article>
          <article><span>02</span><div><h3>Global review</h3><p>NASA and Space Agency Partner subject matter experts review the nominees to select Global Finalists and Honorable Mentions.</p></div></article>
          <article><span>03</span><div><h3>Global winners</h3><p>An executive committee reviews the finalists to choose the ten Global Winners.</p></div></article>
        </div>
      </section>
      <CommunityBand />
    </main>
  );
}
