import { useEffect, useRef, useState } from 'react';
import './Header.css';
import TopBar from './TopBar';
import Logo from './Logo';
import { navLinks, megaMenu } from '../data/catalog';
import {
  IconSearch,
  IconHeart,
  IconCart,
  IconUser,
  IconMenu,
  IconClose,
  IconChevronDown,
  IconArrowLeft,
  IconPhone,
  IconBox,
} from './Icons';

const megaPromo = {
  title: 'خرید عمده',
  text: 'قیمت پلهای، بسته‌بندی حرفه‌ای و ارسال یکجا برای فروشگاه‌ها و توزیع‌کنندگان.',
};

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [search, setSearch] = useState('');
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMegaOpen(false);
      setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setDrawerOpen(false);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header${compact ? ' is-compact' : ''}`} id="top">
      <TopBar />

      <div className="header-main">
        <div className="container header-main__inner">
          <button
            type="button"
            className="header-icon header-main__menu"
            aria-label="باز کردن منو"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <IconMenu size={22} />
          </button>

          <a href="#top" className="header-main__brand" aria-label="آرمان پخش، صفحه اصلی">
            <Logo compact={compact} />
          </a>

          <form className="header-search" role="search" onSubmit={onSearchSubmit}>
            <IconSearch size={18} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی محصول، مدل یا دسته‌بندی…"
              aria-label="جستجوی محصولات"
            />
            <span className="header-search__hint">مثلاً: کمربند چرم</span>
            <button type="submit" className="header-search__submit">
              جستجو
            </button>
          </form>

          <div className="header-actions">
            <a className="header-action header-action--account" href="#footer-services">
              <IconUser size={21} />
              <span className="header-action__text">
                <span className="header-action__label">حساب کاربری</span>
                <span className="header-action__sub">ورود / ثبت‌نام</span>
              </span>
            </a>

            <a className="header-action header-action--wish" href="#products">
              <IconHeart size={21} />
              <span className="header-action__text">
                <span className="header-action__label">علاقه‌مندی‌ها</span>
                <span className="header-action__sub">فهرست خرید</span>
              </span>
            </a>

            <a className="header-action header-action--cart" href="#products">
              <span className="header-action__icon">
                <IconCart size={22} />
                <span className="header-action__count">۳</span>
              </span>
              <span className="header-action__text">
                <span className="header-action__label">سبد خرید</span>
                <span className="header-action__sub">۳ کالا</span>
              </span>
            </a>
          </div>
        </div>

        <div className="header-mobile-search">
          <form className="header-search" role="search" onSubmit={onSearchSubmit}>
            <IconSearch size={18} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی محصول…"
              aria-label="جستجوی محصولات"
            />
            <button type="submit" className="header-search__submit">
              جستجو
            </button>
          </form>
        </div>
      </div>

      <nav className="site-nav" aria-label="ناوبری اصلی">
        <div className="container site-nav__inner">
          <ul className="site-nav__list">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`site-nav__item${link.mega ? ' site-nav__item--mega' : ''}`}
                onMouseEnter={link.mega ? openMega : undefined}
                onMouseLeave={link.mega ? scheduleCloseMega : undefined}
              >
                {link.mega ? (
                  <button
                    type="button"
                    className="site-nav__link"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onClick={() => setMegaOpen((v) => !v)}
                  >
                    {link.label}
                    <IconChevronDown size={15} />
                  </button>
                ) : (
                  <a
                    className={`site-nav__link${index === 0 ? ' is-active' : ''}`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <a className="site-nav__wholesale" href="#wholesale">
            <span className="site-nav__wholesale-dot" aria-hidden="true" />
            تأمین عمده فروشگاه‌ها
          </a>
        </div>

        <div
          className={`mega${megaOpen ? ' is-open' : ''}`}
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
        >
          <div className="container mega__inner">
            <div className="mega__columns">
              {megaMenu.map((group) => (
                <div className="mega__col" key={group.title}>
                  <span className="mega__title">{group.title}</span>
                  <ul>
                    {group.links.map((item) => (
                      <li key={item}>
                        <a href="#categories">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mega__promo">
              <span className="mega__promo-eyebrow">مرکز خرید عمده</span>
              <strong>{megaPromo.title}</strong>
              <p>{megaPromo.text}</p>
              <a className="btn btn--primary btn--sm" href="#wholesale">
                ورود به بخش خرید عمده
                <IconArrowLeft size={16} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {drawerOpen && (
        <div className="drawer">
          <div
            className="drawer__scrim"
            role="presentation"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="drawer__panel" aria-label="منوی موبایل">
            <div className="drawer__head">
              <Logo compact />
              <button
                type="button"
                className="header-icon"
                aria-label="بستن منو"
                onClick={() => setDrawerOpen(false)}
              >
                <IconClose size={22} />
              </button>
            </div>

            <div className="drawer__body">
              <ul className="drawer__list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.mega ? (
                      <>
                        <button
                          type="button"
                          className="drawer__link drawer__link--toggle"
                          aria-expanded={mobileGroup === 'products'}
                          onClick={() =>
                            setMobileGroup((g) => (g === 'products' ? null : 'products'))
                          }
                        >
                          {link.label}
                          <IconChevronDown
                            size={16}
                            className={mobileGroup === 'products' ? 'is-flipped' : ''}
                          />
                        </button>
                        {mobileGroup === 'products' && (
                          <div className="drawer__sub">
                            {megaMenu.map((group) => (
                              <a key={group.title} href="#categories" onClick={() => setDrawerOpen(false)}>
                                {group.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        className="drawer__link"
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="drawer__extras">
                <a href="#footer-services" onClick={() => setDrawerOpen(false)}>
                  <IconBox size={18} />
                  پیگیری سفارش
                </a>
                <a href="#footer-contact" onClick={() => setDrawerOpen(false)}>
                  <IconPhone size={18} />
                  <span className="phone">۰۲۱–۱۲۳۴۵۶۷۸</span>
                </a>
              </div>
            </div>

            <div className="drawer__foot">
              <a className="btn btn--primary btn--full" href="#wholesale" onClick={() => setDrawerOpen(false)}>
                درخواست همکاری
              </a>
              <a className="btn btn--outline btn--full" href="#footer-services" onClick={() => setDrawerOpen(false)}>
                ورود به حساب کاربری
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
