import { useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { SocialLinks } from '../components/SocialLinks';
import { useContent } from '../content/ContentContext';
import { useLocale } from '../i18n/LocaleContext';
import { NavIcon, type NavIconName } from './NavIcon';
import { useRouteChangeEffects } from './useRouteChangeEffects';

interface NavItem {
  to: string;
  label: string;
  icon: NavIconName;
  end?: boolean;
}

export function SiteLayout() {
  const { links } = useContent().getProfile();
  const { messages } = useLocale();
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  useRouteChangeEffects(mainRef);

  const navItems: NavItem[] = [
    { to: '/', label: messages.nav.home, icon: 'home', end: true },
    { to: '/experience', label: messages.nav.experience, icon: 'experience' },
    { to: '/projects', label: messages.nav.projects, icon: 'projects' },
    { to: '/education', label: messages.nav.education, icon: 'education' },
    { to: '/contact', label: messages.nav.contact, icon: 'contact' },
  ];

  return (
    <div className="site">
      <a className="skip-link" href="#main-content">
        {messages.skipToContent}
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          {/* A top bar on wide screens, a fixed tab bar at the bottom on phones. */}
          <nav className="site-header__nav" aria-label={messages.nav.label}>
            <ul className="nav">
              {navItems.map(({ to, label, icon, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className="nav__link">
                    <NavIcon name={icon} />
                    <span className="nav__label">{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__tools">
            <LanguageSwitch />
            <SocialLinks links={links} />
          </div>
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
