import type { Metadata } from "next";
import { FormPage } from "@/components/FormPage";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return (
    <FormPage
      kind="messages"
      label="CONTACT THE KANDY TEAM"
      title="Let’s start a conversation."
      description="Questions about participating, mentoring, partnerships, or something else? We would like to hear from you."
      asideTitle="Small questions. Big possibilities."
    >
      <p>
        We are building a community around open science, creativity, and
        collaboration in Kandy, Sri Lanka.
      </p>
      <p>
        Send your question to the organising team. Include any details that will
        help us direct it to the right person.
      </p>
    </FormPage>
  );
}
