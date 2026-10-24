import Image from "next/image";
import type { CSSProperties } from "react";
import "@fontsource-variable/google-sans-flex";
import { partnerTiers, type PartnerLogo, type PartnerRole } from "@/content/partners";

// Square-ish marks are sized by height and wide wordmarks by width so they read at a similar weight.
function logoShape(logo: PartnerLogo) {
  return logo.width / logo.height < 1.6 ? "mark" : "wordmark";
}

function PartnerIdentity({ role }: { role: PartnerRole }) {
  if (role.caption) {
    const [logo] = role.logos;
    return (
      <figure className="partner-identity sequence-identity">
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="48px" />
        <figcaption>{role.caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="partner-identity">
      {role.logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          sizes="320px"
          className={logo.tile ? "partner-logo partner-logo-tile" : "partner-logo"}
          data-shape={logoShape(logo)}
          style={logo.maxWidth ? ({ "--logo-max-width": `${logo.maxWidth}px` } as CSSProperties) : undefined}
        />
      ))}
    </figure>
  );
}

export function PartnerGroups() {
  return (
    <div className="partner-groups">
      {partnerTiers.map((tier) => (
        <div className={`partner-tier partner-tier-${tier.level}`} key={tier.level}>
          {tier.roles.map((role) => (
            <div className="supporter-group" key={role.title}>
              <h3 className="technical-label">{role.title}</h3>
              <div className="supporter-logo-grid"><PartnerIdentity role={role} /></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
