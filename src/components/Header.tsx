import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { project } from '../config/project.ts';
import { navItems } from '../content/website.ts';
import { Icon } from './Icon.tsx';
import { SiteImage } from './SiteImage.tsx';

export function Header() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const { pathname } = useLocation();
  const open = openPath === pathname;
  const status = project.launchConfirmed ? 'Launch details confirmed' : 'Launch details pending';

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpenPath(null);
      toggleRef.current?.focus();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link to="/" className="brand">
          <SiteImage
            asset="branding/barstro-logo-transparent.png"
            alt=""
            width={1024}
            height={1024}
            eager
            className="brand-mark"
            sizes="48px"
          />
          <span className="brand-name">Barstronaut</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/buy" className="btn btn-primary header-cta">
          How to buy
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      <p className="launch-status wrap">{status}</p>
      <nav id={menuId} className={open ? 'mobile-nav is-open' : 'mobile-nav'} aria-label="Primary mobile" hidden={!open}>
        {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="nav-link" onClick={() => setOpenPath(null)}>
            {item.label}
          </NavLink>
        ))}
        <Link to="/buy" className="btn btn-primary" onClick={() => setOpenPath(null)}>
          How to buy
        </Link>
      </nav>
    </header>
  );
}
