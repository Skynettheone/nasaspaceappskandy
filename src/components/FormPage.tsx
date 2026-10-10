import { PageIntro, SectionLabel } from "./Elements";
import { ApplicationForm } from "./ApplicationForm";
import { site } from "@/content/site";
import type { FormKind } from "@/lib/submissions";
import type { ReactNode } from "react";

export function FormPage({
  kind,
  label,
  title,
  description,
  asideTitle,
  children,
}: {
  kind: FormKind;
  label: string;
  title: string;
  description: string;
  asideTitle: string;
  children: ReactNode;
}) {
  return (
    <main id="main">
      <PageIntro label={label} title={title} description={description} />
      <section className="form-layout">
        <aside className="form-aside">
          <SectionLabel>KANDY / LET&apos;S CONNECT</SectionLabel>
          <h2>{asideTitle}</h2>
          {children}
          <div className="quiet-note">
            Need a hand?
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </aside>
        <ApplicationForm kind={kind} />
      </section>
    </main>
  );
}
