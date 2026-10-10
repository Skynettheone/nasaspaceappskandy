"use client";
import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { ListIcon as Menu } from "@phosphor-icons/react/dist/csr/List";
import { XIcon as X } from "@phosphor-icons/react/dist/csr/X";
import { EnvelopeIcon as Mail } from "@phosphor-icons/react/dist/csr/Envelope";
import { GlobeHemisphereEastIcon as Globe2 } from "@phosphor-icons/react/dist/csr/GlobeHemisphereEast";
import { navigation, site } from "@/content/site";
import { LANGUAGES, useI18n } from "@/i18n";

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}
const scrollSnapshot = () => window.scrollY > 24;
const serverSnapshot = () => false;

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="site-logo"
      aria-label="NASA Space Apps Kandy home"
    >
      <Image
        className="logo-on-dark"
        src="/logos/nasaspaceappskandy-white.png"
        alt="NASA Space Apps Kandy"
        width={178}
        height={70}
        priority
      />
    </Link>
  );
}

function LanguageChoices({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div className={`language-choices${mobile ? " language-choices-mobile" : " language-choices-desktop"}`} role="group" aria-label={t("nav.language")}>
      {mobile && <span className="language-caption">{t("nav.language")}</span>}
      <div className="language-options">
        {LANGUAGES.map((language) => (
          <button key={language.code} type="button" lang={language.code}
            aria-label={language.name} aria-pressed={lang === language.code}
            onClick={() => setLang(language.code)}>
            {mobile ? language.name : language.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    scrollSnapshot,
    serverSnapshot,
  );
  const { t } = useI18n();
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.menuOpen = "true";
    const outside = document.querySelectorAll<HTMLElement>("main, .site-footer");
    outside.forEach((element) => { element.inert = true; });
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [buttonRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])].filter((item): item is HTMLElement => !!item);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.menuOpen;
      outside.forEach((element) => { element.inert = false; });
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", keyboard);
    };
  }, [open]);
  return (
    <header
      className={`site-header${scrolled || open || pathname !== "/" ? " is-solid" : ""}`}
    >
      <div className="header-inner">
        <SiteLogo />
        <nav
          className="main-nav"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <LanguageChoices />
        <Link href="/register" className="header-register">
          <span className="button-label">{t("nav.register")}</span> <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <AnimatePresence initial={false}>
          {open && <m.div key="mobile-menu" className="mobile-menu-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .18 }}>
            <button type="button" className="mobile-menu-backdrop" tabIndex={-1} aria-label={t("nav.closeMenu")} onClick={() => { setOpen(false); buttonRef.current?.focus(); }} />
            <m.nav ref={panelRef} id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav-panel" data-lenis-prevent
              initial={{ opacity: 0, y: reduced ? 0 : -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -8 }}
              transition={{ duration: reduced ? 0 : .24, ease: [.22, 1, .36, 1] }}>
              {navigation.map((item, index) => <m.div key={item.href} initial={{ opacity: 0, y: reduced ? 0 : -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .24, delay: reduced ? 0 : index * .025 }}>
                <Link href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{t(item.key)}</Link>
              </m.div>)}
              <LanguageChoices mobile />
              <Link href="/register" className="mobile-register white-button" onClick={() => setOpen(false)}><span className="button-label">{t("nav.register")}</span><ArrowUpRight size={15} aria-hidden="true" /></Link>
            </m.nav>
          </m.div>}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="site-footer">
      <div className="container footer-frame">
        <div className="footer-top">
          <SiteLogo />
          <div>
            <p>KANDY, SRI LANKA / A WORLD OF POSSIBILITIES</p>
            <h2>Your next chapter starts here.</h2>
            <Link href="/register" className="white-button">
              <span className="button-label">Join the Kandy community</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-middle">
          <nav aria-label="Footer navigation">
            {navigation.filter((item) => item.href !== "/sponsors").map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.key)}
              </Link>
            ))}
            <Link href="/ambassadors">{t("nav.ambassadors")}</Link>
            <Link href="/news">{t("nav.news")}</Link>
            <Link href="/awards">Awards</Link>
          </nav>
          <div className="footer-social">
            <a href={`mailto:${site.email}`} aria-label="Email the Kandy team">
              <Mail size={17} />
            </a>
            <a
              href={site.globalUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NASA Space Apps global website"
            >
              <Globe2 size={17} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NASA Space Apps Kandy.</span>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy</Link>
            <a
              href={site.participantTerms}
              target="_blank"
              rel="noopener noreferrer"
            >
              Participant terms <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
