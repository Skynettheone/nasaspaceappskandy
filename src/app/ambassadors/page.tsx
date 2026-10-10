import type { Metadata } from "next";
import { FormPage } from "@/components/FormPage";
export const metadata: Metadata = { title: "Campus ambassadors" };
export default function Ambassadors() {
  return (
    <FormPage
      kind="ambassadors"
      label="CAMPUS AMBASSADORS"
      title="Bring your campus into the conversation."
      description="Help curious minds discover NASA Space Apps and connect with the Kandy community."
      asideTitle="A connection starts with you."
    >
      <p>
        Share event information, encourage students across disciplines, and help
        your campus find its place in the community.
      </p>
      <p>
        We welcome interest from schools and universities across Sri Lanka. Tell
        us about your institution and what motivates you to get involved.
      </p>
    </FormPage>
  );
}
