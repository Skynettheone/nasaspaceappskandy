import type { Metadata } from "next";
import { FormPage } from "@/components/FormPage";
export const metadata: Metadata = { title: "Volunteers & mentors" };
export default function Join() {
  return (
    <FormPage
      kind="volunteers"
      label="VOLUNTEERS & MENTORS"
      title="Help ideas take flight."
      description="Bring your time, experience, and energy to the people building something new."
      asideTitle="Great things happen with a great crew."
    >
      <p>
        Volunteers help with event operations, participant support, media, and
        the details that make a welcoming experience.
      </p>
      <p>
        Mentors offer guidance in science, data, technology, design, and
        storytelling. Choose your role and tell us where you can help.
      </p>
      <p>
        Your availability is an expression of interest. The organising team will
        confirm dates and responsibilities with you.
      </p>
    </FormPage>
  );
}
