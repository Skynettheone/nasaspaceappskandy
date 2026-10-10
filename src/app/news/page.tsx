import type { Metadata } from "next";
import Image from "next/image";
import { BroadcastIcon as Radio } from "@phosphor-icons/react/dist/ssr/Broadcast";
import { PageIntro, ActionLink, CommunityBand } from "@/components/Elements";
import { spaceAppsEvent } from "@/content/event";
import news from "@/content/official-news.json";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
const formatDate = (date: string) => new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(date));
export const metadata: Metadata = { title: "News & updates" };
export default function News() {
  return (
    <main id="main">
      <PageIntro
        label="MISSION UPDATES"
        title="The next chapter is taking shape."
        description="Updates from Kandy, plus announcements and community stories from the official NASA Space Apps blog."
      />
      <section className="content-section">
        <div className="empty-state">
          <Radio size={36} weight="regular" aria-hidden="true" />
          <h2>{spaceAppsEvent.theme} awaits.</h2>
          <p>
            NASA Space Apps Kandy returns on {spaceAppsEvent.dates}, with
            in-person and virtual participation. Venue and programme details
            will be announced next.
          </p>
          <ActionLink href="/events" outline>
            Explore the event
          </ActionLink>
        </div>
      </section>
      <section className="content-section official-news">
        <div className="news-heading">
          <div><p className="technical-label">FROM NASA SPACE APPS</p><h2>Across the Space Apps community.</h2></div>
          <a className="text-link" href={news.source} target="_blank" rel="noopener noreferrer">Official blog <ArrowUpRightIcon size={17} aria-hidden="true" /></a>
        </div>
        <div className="news-grid">
          {news.articles.map((article) => (
            <article className="news-card" key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-card-link">
                <Image src={article.image} alt="" width={300} height={200} loading="lazy" unoptimized />
                <div className="news-card-copy">
                  <div className="news-meta"><time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time><span>{article.publishedAt.startsWith("2026") ? "2026 UPDATE" : "FROM THE ARCHIVE"}</span></div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <span className="news-read">Read on NASA Space Apps <ArrowUpRightIcon size={17} aria-hidden="true" /></span>
                </div>
              </a>
            </article>
          ))}
        </div>
        <p className="asset-credit">Articles and images: NASA Space Apps. Latest feed snapshot: {formatDate(news.fetchedAt)}. Dates shown are the original publication dates.</p>
      </section>
      <CommunityBand />
    </main>
  );
}
