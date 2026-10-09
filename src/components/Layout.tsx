import { Outlet, useLocation } from 'react-router-dom';
import { pageMeta } from '../content/website.ts';
import { Footer } from './Footer.tsx';
import { Header } from './Header.tsx';
import { RouteScroll } from './RouteScroll.tsx';
import { Seo } from './Seo.tsx';

export function Layout() {
  const { pathname } = useLocation();
  const meta = pageMeta[pathname as keyof typeof pageMeta] ?? pageMeta.notFound;

  return (
    <>
      <Seo title={meta.title} description={meta.description} pathname={pathname} />
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <RouteScroll />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
