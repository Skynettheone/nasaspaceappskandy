import { ActionLink } from "@/components/Elements";
export default function NotFound() {
  return (
    <main id="main">
      <section className="statement-section">
        <p className="technical-label">404 / UNCHARTED TERRITORY</p>
        <h1>This page is out of orbit.</h1>
        <p>Let’s get you back to the Kandy community.</p>
        <ActionLink href="/">Back to home</ActionLink>
      </section>
    </main>
  );
}
