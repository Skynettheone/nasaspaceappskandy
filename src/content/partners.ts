export type PartnerLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** The artwork carries its own background, so it is shown as a rounded tile. */
  tile?: boolean;
  /** Caps the rendered width when several logos share one identity. */
  maxWidth?: number;
};

export type PartnerRole = {
  title: string;
  logos: PartnerLogo[];
  caption?: string;
};

// Titles follow the official partner announcement posters; every partner is shown at the same size.
export const partnerRoles: PartnerRole[] = [
  {
    title: "Official Host University & Venue Partner",
    logos: [{ src: "/sponsors/sliit-kandy-uni.png", alt: "SLIIT Kandy UNI", width: 1280, height: 367, tile: true }],
  },
  {
    // U+2011 keeps "Co-Organizer" from splitting at the hyphen on narrow screens.
    title: "Official Co‑Organizer",
    logos: [{ src: "/sponsors/kandy-uni-student-interactive-society.png", alt: "Student Interactive Society, Kandy UNI", width: 1387, height: 1487 }],
  },
  {
    title: "Official Strategic Partner",
    logos: [{ src: "/sponsors/the-faculty-of-brands.png", alt: "The Faculty of Brands", width: 1411, height: 505 }],
  },
  {
    title: "Official Collaborator",
    logos: [{ src: "/sponsors/aissa-white.png", alt: "AISSA, All Island Schools Science Association", width: 1078, height: 1147 }],
  },
  {
    title: "Official Digital Marketing Partner",
    logos: [{ src: "/sponsors/footage-culture.jpg", alt: "Footage Culture", width: 1600, height: 1600, tile: true }],
  },
  {
    title: "Official Digital & Design Partner",
    logos: [{ src: "/sponsors/SQ3-LOGO-WHITE.png", alt: "", width: 5001, height: 4794 }],
    caption: "Sequence Labs",
  },
  {
    title: "Official Community Partner",
    logos: [
      { src: "/sponsors/IEEE SL Logo - Horizontal - White.png", alt: "IEEE Sri Lanka Section", width: 7405, height: 1111, maxWidth: 168 },
      { src: "/sponsors/SLSAC WHITE.png", alt: "IEEE SLSAC", width: 2706, height: 759, maxWidth: 60 },
    ],
  },
];
