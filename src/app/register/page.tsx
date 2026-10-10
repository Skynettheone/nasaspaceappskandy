import type { Metadata } from "next";
import { FormPage } from "@/components/FormPage";
import { site } from "@/content/site";
import { LocalizedText as L } from "@/components/LocalizedText";
import { createPageMetadata } from "@/content/metadata";
export const metadata: Metadata = createPageMetadata({
  title: "Join the hackathon",
  description: "Register your interest in NASA Space Apps Kandy 2026, join with a team, or come ready to find collaborators.",
  path: "/register",
});
export default function Register() {
  return (
    <FormPage
      kind="registrations"
      label={<L id="register.intro.label" />}
      title={<L id="register.intro.title" />}
      description={<L id="register.intro.description" />}
      asideTitle={<L id="register.aside.title" />}
    >
      <p>
        <L id="register.aside.first" />
      </p>
      <p>
        <L id="register.aside.second" />
      </p>
      <div className="quiet-note">
        <L id="register.note.first" />{" "}
        <a href={site.globalUrl} target="_blank" rel="noopener noreferrer">
          <L id="register.note.link" />
        </a>
        . <L id="register.note.second" />
      </div>
    </FormPage>
  );
}
