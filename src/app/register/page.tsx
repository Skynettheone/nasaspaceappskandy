import type { Metadata } from "next";
import { FormPage } from "@/components/FormPage";
import { site } from "@/content/site";
export const metadata: Metadata = { title: "Join the hackathon" };
export default function Register() {
  return (
    <FormPage
      kind="registrations"
      label="YOUR IDEAS BELONG HERE"
      title="A big idea starts with a first step."
      description="Introduce yourself or your team to the NASA Space Apps Kandy community."
      asideTitle="Come with a team. Or find one here."
    >
      <p>
        Tell us a little about yourself and what you would like to explore. Solo
        applicants can express interest in finding a team.
      </p>
      <p>
        Local dates, venue, and participation arrangements will be announced by
        the organising team.
      </p>
      <div className="quiet-note">
        This is a local application. Global participant registration is
        completed separately on the{" "}
        <a href={site.globalUrl} target="_blank" rel="noopener noreferrer">
          NASA Space Apps website
        </a>
        . Please check its participant terms, including requirements for
        participants under 18.
      </div>
    </FormPage>
  );
}
