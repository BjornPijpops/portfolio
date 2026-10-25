import { useCallback, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { SocialLinks } from '../components/SocialLinks';
import { useContent } from '../content/ContentContext';
import { useEscapeKey } from '../hooks/useEscapeKey';
import { useLocale } from '../i18n/LocaleContext';
import { MenuButton } from './MenuButton';
import { useRouteChangeEffects } from './useRouteChangeEffects';

export function SiteLayout() {
  const { name, links } = useContent().getProfile();
  const { messages } = useLocale();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  useRouteChangeEffects(mainRef);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  useEscapeKey(menuOpen, closeMenu);

  const navItems = [
    { to: '/', label: messages.nav.home, end: true },
    { to: '/experience', label: messages.nav.experience },
    { to: '/projects', label: messages.nav.projects },
    { to: '/education', label: messages.nav.education },
    { to: '/contact', label: messages.nav.contact },
  ];

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        {messages.skipToContent}
      </a>
      <header className="site-header">
        <NavLink to="/" className="site-header__brand">
          {name}
        </NavLink>
        <nav
          id="site-nav"
          className="site-header__nav"
          data-open={menuOpen}
          aria-label={messages.nav.label}
        >
          <ul className="nav">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className="nav__link" onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__tools">
          <LanguageSwitch />
          <SocialLinks links={links} />
          <MenuButton
            isOpen={menuOpen}
            controls="site-nav"
            openLabel={messages.nav.openMenu}
            closeLabel={messages.nav.closeMenu}
            onToggle={() => setMenuOpen((open) => !open)}
          />
        </div>
      </header>
      <main id="main-content" ref={mainRef} tabIndex={-1} className="site-main">
        {/* The key restarts the entrance animation on every route change. */}
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
