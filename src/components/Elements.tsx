import Link from "next/link";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="section-label">
      <i aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
export function ActionLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
}) {
  return (
    <Link href={href} className={outline ? "outline-button" : "white-button"}>
      <span className="button-label">{children}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <SectionLabel>{label}</SectionLabel>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function CommunityBand() {
  return (
    <section className="community-band">
      <span className="cta-pattern" aria-hidden="true" />
      <div>
        <SectionLabel>BE PART OF WHAT COMES NEXT</SectionLabel>
        <h2>
          A place for your ideas.
          <br />A community to build with.
        </h2>
        <p>Find your role in NASA Space Apps Kandy.</p>
      </div>
      <div className="community-action">
        <ActionLink href="/join">Get involved</ActionLink>
      </div>
    </section>
  );
}
