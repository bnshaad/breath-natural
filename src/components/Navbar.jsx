import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { label: "Home", id: "hero" },
  { label: "Plant Types", id: "plant-types" },
  { label: "More", id: "more" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const updateNav = () => {
      const scrollPosition = window.scrollY + 120;
      const current = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean)
        .findLast((section) => section.offsetTop <= scrollPosition);

      setScrolled(window.scrollY > 10);
      setActiveId(current?.id || "hero");
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner container">

        {/* Logo */}
        <a href="#hero" className="nav__logo">
          <img
            src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=40&q=80"
            alt="leaf"
            className="nav__logo-img"
          />
          Planto.
        </a>

        {/* Desktop Links */}
        <nav className="nav__links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${activeId === link.id ? " is-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="nav__icons">
          {/* Search */}
          <button className="nav__icon-btn" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {/* Cart */}
          <button className="nav__icon-btn nav__cart-btn" aria-label={`Cart with ${cartCount} items`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className="nav__cart-count">{cartCount}</span>}
          </button>
          {/* Hamburger */}
          <button
            className={`nav__hamburger${mobileOpen ? " is-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nav__mobile${mobileOpen ? " is-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav__mobile-link${activeId === link.id ? " is-active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
