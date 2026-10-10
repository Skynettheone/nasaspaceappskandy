import type { Metadata } from "next";
import { PageIntro } from "@/components/Elements";
import { site } from "@/content/site";
export const metadata: Metadata = { title: "Data notice" };
export default function Privacy() {
  return (
    <main id="main">
      <PageIntro
        label="YOUR INFORMATION"
        title="About the details you share."
        description="How the local Kandy website handles form submissions."
      />
      <section className="content-section">
        <div className="legal-copy">
          <h2>What the forms collect</h2>
          <p>
            Depending on the form, we ask for your name, email, optional phone
            number, institution, team details, skills, availability, or a
            message. Required fields are marked with an asterisk.
          </p>
          <h2>Where submissions go</h2>
          <p>
            Form submissions are sent to the Kandy project’s Google Firebase
            Firestore database for the organising team to review and respond to.
            They include a submission timestamp, form details, and a processing
            status. Submissions are not displayed publicly on this website.
          </p>
          <h2>How your details are used</h2>
          <p>
            The organising team uses your submission to handle your application,
            coordinate participation, or answer your question. A local
            application does not create a NASA Space Apps global account.
          </p>
          <h2>Questions about your data</h2>
          <p>
            Contact <a href={`mailto:${site.email}`}>{site.email}</a> for
            questions about access, correction, deletion, or how long your
            submission will be retained.
          </p>
          <h2>Language preference and external services</h2>
          <p>
            Your selected interface language is saved in your browser. Fonts are
            served by Google Fonts. When enabled by the organiser, Firebase App
            Check uses reCAPTCHA to help protect forms from automated abuse.
            External NASA websites have their own participant terms and privacy
            information.
          </p>
        </div>
      </section>
    </main>
  );
}
