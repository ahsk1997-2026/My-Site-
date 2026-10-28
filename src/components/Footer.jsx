import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './Logo';
import {
  IconInstagram,
  IconTelegram,
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconArrowUp,
  IconArrowLeft,
} from './Icons';

const quickLinks = [
  { label: 'صفحه اصلی', href: '#top' },
  { label: 'دسته‌بندی محصولات', href: '#categories' },
  { label: 'جدیدترین محصولات', href: '#products' },
  { label: 'پرفروش‌ترین‌ها', href: '#products' },
  { label: 'خرید عمده', href: '#wholesale' },
];

const serviceLinks = [
  'راهنمای خرید',
  'پرسش‌های متداول',
  'پیگیری سفارش',
  'شرایط ارسال و تحویل',
  'بازگشت و تعویض کالا',
  'حریم خصوصی',
  'قوانین و مقررات',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onSubscribe = (event) => {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setStatus({ type: 'error', message: 'ایمیل معتبر وارد کنید.' });
      return;
    }
    setStatus({ type: 'success', message: 'عضویت شما ثبت شد. ممنون از همراهی شما.' });
    setEmail('');
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="newsletter">
          <div className="newsletter__text">
            <h3>از تخفیف‌ها و محصولات جدید باخبر شوید</h3>
            <p>
              ایمیل خود را وارد کنید تا تخفیف‌های دوره‌ای و محصولات تازه در دسته‌های
              جوراب، کفش، صندل و کمربند را دریافت کنید.
            </p>
          </div>

          <form className="newsletter__form" onSubmit={onSubscribe} noValidate>
            <label className="visually-hidden" htmlFor="newsletter-email">
              نشانی ایمیل
            </label>
            <input
              id="newsletter-email"
              className="newsletter__input"
              type="email"
              dir="ltr"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
              }}
              aria-invalid={status.type === 'error'}
              aria-describedby="newsletter-hint"
            />
            <button type="submit" className="btn btn--primary">
              عضویت
            </button>
            <p
              id="newsletter-hint"
              className={`newsletter__hint newsletter__hint--${status.type}`}
              role="status"
            >
              {status.message || 'عضویت اختیاری است و هر زمان قابل لغو است.'}
            </p>
          </form>
        </div>

        <div className="footer__grid">
          <div className="footer__brand" id="footer-brand">
            <Logo variant="dark" />
            <p>
              آرمان پخش، تأمین‌کننده جوراب، کفش، صندل و کمربند مردانه؛ فعال در دو حوزه
              فروش خرده به مشتریان و تأمین عمده برای فروشگاه‌ها و توزیع‌کنندگان در سراسر
              ایران.
            </p>
            <div className="footer__social">
              <a href="#footer" aria-label="اینستاگرام آرمان پخش">
                <IconInstagram size={18} />
              </a>
              <a href="#footer" aria-label="تلگرام آرمان پخش">
                <IconTelegram size={18} />
              </a>
              <a href="#footer" aria-label="واتساپ آرمان پخش">
                <IconWhatsApp size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>دسترسی سریع</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col" id="footer-services">
            <h4>خدمات مشتریان</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#footer-services">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact" id="footer-contact">
            <h4>اطلاعات تماس</h4>
            <ul className="footer__contact">
              <li>
                <IconPhone size={16} />
                <span className="phone">۰۲۱–۱۲۳۴۵۶۷۸</span>
                <span className="footer__tag">جایگزین</span>
              </li>
              <li>
                <IconWhatsApp size={16} />
                <span className="phone">۰۹۱۲–۰۰۰۰۰۰۰</span>
                <span className="footer__tag">جایگزین</span>
              </li>
              <li>
                <IconMail size={16} />
                <span dir="ltr">info@example.com</span>
                <span className="footer__tag">جایگزین</span>
              </li>
              <li>
                <IconMapPin size={16} />
                <span>نشانی دفتر مرکزی پس از تأیید درج می‌شود</span>
              </li>
              <li>
                <IconClock size={16} />
                <span>شنبه تا پنجشنبه، ۹ تا ۱۸</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__payments">
          <span className="footer__payments-label">درگاه‌های پرداخت</span>
          <div className="footer__payment-slots">
            <span className="payment-slot">نماد درگاه</span>
            <span className="payment-slot">نماد درگاه</span>
            <span className="payment-slot">نماد درگاه</span>
          </div>
          <p className="footer__payments-note">
            نمادهای رسمی درگاه‌های پرداخت و مجوزها پس از تأیید در این بخش قرار می‌گیرد.
          </p>
        </div>

        <div className="footer__bottom">
          <p>© ۱۴۰۴ آرمان پخش — تمامی حقوق محفوظ است.</p>
          <div className="footer__bottom-links">
            <a href="#footer-services">حریم خصوصی</a>
            <a href="#footer-services">قوانین و مقررات</a>
            <Link to="/style-guide">راهنمای اجزای طراحی</Link>
          </div>
          <button type="button" className="footer__top" onClick={scrollToTop}>
            <IconArrowUp size={16} />
            <span>بازگشت به بالا</span>
            <IconArrowLeft size={14} className="footer__top-arrow" />
          </button>
        </div>
      </div>
    </footer>
  );
}
