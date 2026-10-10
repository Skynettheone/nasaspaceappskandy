"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { useI18n } from "@/i18n";
import { MissionCountdown } from "./MissionCountdown";

export function Hero() {
  const { t } = useI18n();
  const sceneRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = scene.getBoundingClientRect();
      const distance = reducedMotion.matches ? 0 : Math.min(Math.max(-rect.top, 0), rect.height);
      scene.style.setProperty("--hero-scroll", `${distance}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, []);
  return (
    <section ref={sceneRef} className="home-hero" aria-labelledby="hero-title">
      <picture className="hero-media hero-depth-sky">
        <source media="(max-width: 760px)" srcSet="/images/hero-depth-sky-mobile.webp" />
        <img src="/images/hero-depth-sky.webp" alt="" width={1600} height={900} decoding="async" />
      </picture>
      <picture className="hero-media hero-depth-foreground">
        <source
          media="(max-width: 760px)"
          srcSet="/images/hero-depth-foreground-mobile.webp"
        />
        {/* Art direction uses the smaller mobile crop without downloading both images. */}
        <img
          src="/images/hero-depth-foreground.webp"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="mission-caption">NASA SPACE APPS 2026 <span>/</span> THE NEXT FRONTIER</div>
          <h1 id="hero-title">
            Big ideas.
            <br />
            Beyond boundaries<span className="hero-period">.</span>
          </h1>
          <p>
            One planet. Endless possibilities. Bring your curiosity to Kandy and
            turn NASA&apos;s open data into ideas for Earth and space.
          </p>
          <div className="button-row">
            <Link href="/register" className="white-button">
              <span className="button-label">{t("hero.cta.primary")}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/challenges" className="outline-button">
              <span className="button-label">{t("hero.cta.secondary")}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="location-tag">
            <span>KANDY, SRI LANKA</span>
            <span className="location-tag-divider" aria-hidden="true">
              |
            </span>
            <span>OPEN TO EVERYONE</span>
          </span>
          <MissionCountdown />
        </div>
      </div>
    </section>
  );
}
