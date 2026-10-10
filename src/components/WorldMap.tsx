import Link from "next/link";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CrosshairIcon as Crosshair } from "@phosphor-icons/react/dist/ssr/Crosshair";
import { GlobeHemisphereEastIcon as Globe2 } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereEast";
import directory from "@/content/space-apps-locations.json";
import { projectLocation } from "@/lib/mission-clock";
import { InteractiveMap } from "./InteractiveMap";

const kandy = directory.events.find((event) => event.url.endsWith("/kandy/"))!;
const home = projectLocation(kandy.coordinates!);
const mapped = directory.events.filter((event) => event.coordinates);
const countries = new Set(mapped.map((event) => event.country)).size;
const updated = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(directory.updatedAt));

export function WorldMap() {
  return (
    <div className="world-network">
      <div className="network-heading">
        <span>
          <Globe2 size={15} aria-hidden="true" /> {mapped.length} LOCATIONS{" "}
          <i>/</i> {countries} COUNTRIES & TERRITORIES
        </span>
        <span className="network-home-key">
          <i /> KANDY / OUR HOME BASE
        </span>
      </div>
      <InteractiveMap>
        <svg
          className="world-map-image"
          viewBox="0 0 1200 600"
          role="img"
          aria-labelledby="network-map-title network-map-description"
        >
          <title id="network-map-title">
            NASA Space Apps 2026 global event locations
          </title>
          <desc id="network-map-description">
            All {mapped.length} locations with coordinates from the official
            directory. Kandy, Sri Lanka is highlighted with red rings as our home base.
            Other locations show the worldwide scale of NASA Space Apps.
          </desc>
          <image
            href="/images/world-dots.svg"
            width="1200"
            height="600"
            opacity="0.55"
          />
          <path className="map-equator" d="M0 300H1200" />
          {mapped.map((event) => {
            const p = projectLocation(event.coordinates!);
            return (
              <circle
                key={event.id}
                cx={p.x}
                cy={p.y}
                r="2.6"
                className="network-point"
                data-event-name={event.name}
                data-country={event.country}
              >
                <title>{`${event.name}, ${event.country}`}</title>
              </circle>
            );
          })}
          <g className="network-kandy">
            <circle className="kandy-orbit" cx={home.x} cy={home.y} r="24" />
            <circle className="kandy-ring" cx={home.x} cy={home.y} r="12" />
            <circle className="kandy-core" cx={home.x} cy={home.y} r="5" data-event-name="Kandy" data-country="Sri Lanka" />
            <path d={`M${home.x + 10} ${home.y + 10} l30 38 h128`} />
            <text x={home.x + 46} y={home.y + 40}>
              KANDY, SRI LANKA
            </text>
            <text
              className="kandy-map-subtitle"
              x={home.x + 46}
              y={home.y + 65}
            >
              07.2906° N / 080.6337° E
            </text>
          </g>
        </svg>
        <span className="map-coordinate-label">EARTH / 2026 EVENT NETWORK</span>
      </InteractiveMap>
      <div className="network-kandy-summary">
        <div className="network-event">
          <Crosshair size={24} aria-hidden="true" />
          <div><span className="technical-label">YOUR LOCAL EVENT</span><strong>Kandy, Sri Lanka</strong><span>November 14–15, 2026 · In person + virtual</span></div>
        </div>
        <p>A worldwide mission. A community right here in Kandy.<br />Bring your ideas to our home base.</p>
        <Link className="white-button" href="/register"><span className="button-label">Join Kandy</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="network-source">
        <span>
          {directory.totalCount} events including the worldwide Universal Event
          · Updated {updated}
        </span>
        <a href={directory.source} target="_blank" rel="noopener noreferrer">
          Official event directory <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
