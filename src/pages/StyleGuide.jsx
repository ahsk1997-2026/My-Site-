import { Link } from 'react-router-dom';
import './StyleGuide.css';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import { products } from '../data/catalog';
import { IconSearch, IconCart, IconHeart, IconArrowLeft, IconLock, IconStar } from '../components/Icons';

const palette = [
  { name: 'سرمه‌ای عمیق', hex: '#101B26', role: 'هدر، فوتر، تایپوگرافی اصلی' },
  { name: 'سفید گرم', hex: '#FFFFFF', role: 'سطوح محصول' },
  { name: 'شیری روشن', hex: '#F5F1EB', role: 'پس‌زمینه بخش‌ها' },
  { name: 'طلایی شامپاینی', hex: '#C49A62', role: 'اقدام اصلی و تأکید' },
  { name: 'خاکستری روشن', hex: '#E8EAED', role: 'خطوط و جداکننده‌ها' },
];

const typeScale = [
  { label: 'Display / ۵۴', className: 'sg-type-display', sample: 'کیفیت در هر گام' },
  { label: 'H1 / ۴۰', className: 'sg-type-h1', sample: 'تأمین عمده فروشگاه‌ها' },
  { label: 'H2 / ۳۲', className: 'sg-type-h2', sample: 'پرفروش‌ترین محصولات' },
  { label: 'H3 / ۲۱', className: 'sg-type-h3', sample: 'کمربند چرم طبیعی' },
  { label: 'Body / ۱۵', className: 'sg-type-body', sample: 'متن اصلی برای توضیحات محصول و پاراگراف‌های راهنما.' },
  { label: 'Small / ۱۳', className: 'sg-type-sm', sample: 'زیرنویس کارت محصول، قیمت‌های تکمیلی و برچسب‌ها.' },
  { label: 'Caption / ۱۱', className: 'sg-type-caption', sample: 'کد کالا: AP-BE-405 — ۲٬۸۵۰٬۰۰۰ تومان' },
];

export default function StyleGuide() {
  return (
    <div className="sg">
      <header className="sg__top">
        <div className="container sg__top-inner">
          <Logo variant="dark" />
          <Link className="btn btn--on-dark btn--sm" to="/">
            بازگشت به صفحه اصلی
            <IconArrowLeft size={15} />
          </Link>
        </div>
      </header>

      <main className="container sg__main">
        <section className="sg__intro">
          <span className="eyebrow">سند طراحی</span>
          <h1>راهنمای بصری و اجزای آرمان پخش</h1>
          <p>
            جهت طراحی بر پایه دو ایده شکل گرفته است: اقتدار و آرامش یک برند توزیع حرفه‌ای،
            و شفافیت یک فروشگاه پوشاک. زمینه‌های روشن و عکاسی محصول، فضای اصلی را در اختیار
            دارند؛ سرمه‌ای برای ساختار و اعتماد به کار می‌رود و طلایی شامپاینی فقط برای
            اقدام اصلی، قیمت‌های تأکیدی و نشانه‌های عمده. گوشه‌ها باریک، فاصله‌ها منظم و
            تایپوگرافی فارسی در مرکز توجه است.
          </p>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>پالت رنگ</h2>
            <p>نسبت استفاده: سرمه‌ای و شیری برای ساختار، طلایی حداکثر در ۱۰٪ سطوح.</p>
          </div>
          <div className="sg__swatches">
            {palette.map((color) => (
              <div className="sg-swatch" key={color.hex}>
                <span className="sg-swatch__chip" style={{ background: color.hex }} />
                <strong>{color.name}</strong>
                <span className="sg-swatch__hex" dir="ltr">
                  {color.hex}
                </span>
                <span className="sg-swatch__role">{color.role}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>تایپوگرافی</h2>
            <p>فونت وزیرمتن، اوزان ۴۰۰ تا ۸۰۰، اعداد فارسی و فاصله سطر ۱.۹ برای متن.</p>
          </div>
          <div className="sg__type">
            {typeScale.map((item) => (
              <div className="sg-type-row" key={item.label}>
                <span className="sg-type-row__label">{item.label}</span>
                <span className={item.className}>{item.sample}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>دکمه‌ها</h2>
            <p>حالت پیش‌فرض، هاور و غیرفعال برای اقدام‌های اصلی و ثانویه.</p>
          </div>
          <div className="sg__row">
            <button type="button" className="btn btn--primary">
              مشاهده محصولات
              <IconArrowLeft size={16} />
            </button>
            <button type="button" className="btn btn--dark">
              افزودن به سبد
              <IconCart size={16} />
            </button>
            <button type="button" className="btn btn--outline">
              مشاهده همه
            </button>
            <button type="button" className="btn btn--primary" disabled>
              ناموجود
            </button>
            <button type="button" className="btn btn--sm btn--outline">
              دکمه کوچک
            </button>
          </div>
          <div className="sg__on-dark">
            <button type="button" className="btn btn--primary">
              درخواست همکاری
            </button>
            <button type="button" className="btn btn--on-dark">
              ورود به بخش خرید عمده
            </button>
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>نشان‌ها و برچسب‌ها</h2>
            <p>برچسب‌های تبلیغاتی، وضعیت موجودی و برچسب قیمت عمده.</p>
          </div>
          <div className="sg__row">
            <span className="badge badge--gold">پرفروش</span>
            <span className="badge badge--navy">جدید</span>
            <span className="badge badge--ivory">ارسال سراسری</span>
            <span className="badge badge--outline">پیشنهاد ویژه</span>
            <span className="product-card__wholesale">
              <IconLock size={13} />
              قیمت عمده پس از تأیید حساب فروشگاهی
            </span>
            <span className="product-card__stock">
              <span className="product-card__stock-dot" />
              موجود در انبار
            </span>
            <span className="product-card__stock is-out">
              <span className="product-card__stock-dot" />
              ناموجود
            </span>
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>فیلدها و فرم‌ها</h2>
            <p>ورودی جستجو، فیلد متنی و حالت‌های خطا و موفقیت.</p>
          </div>
          <div className="sg__fields">
            <div className="field">
              <label className="field__label" htmlFor="sg-search">
                جستجوی محصول
              </label>
              <div className="header-search">
                <IconSearch size={18} />
                <input id="sg-search" type="search" placeholder="جستجوی محصول، مدل یا دسته‌بندی…" />
                <button type="button" className="header-search__submit">
                  جستجو
                </button>
              </div>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="sg-name">
                نام فروشگاه
              </label>
              <input id="sg-name" className="field__input" placeholder="مثلاً پوشاک آرین" />
              <span className="field__hint">نام فروشگاه در حساب کاربری نمایش داده می‌شود.</span>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="sg-error">
                شماره تماس
              </label>
              <input
                id="sg-error"
                className="field__input"
                placeholder="۰۹۱۲–۰۰۰۰۰۰۰"
                aria-invalid="true"
                aria-describedby="sg-error-hint"
                style={{ borderColor: 'var(--c-danger)' }}
              />
              <span id="sg-error-hint" className="field__hint field__hint--error">
                شماره تماس معتبر وارد کنید.
              </span>
            </div>

            <div className="field">
              <label className="field__label" htmlFor="sg-success">
                ایمیل
              </label>
              <input
                id="sg-success"
                className="field__input"
                defaultValue="name@example.com"
                dir="ltr"
                style={{ borderColor: 'var(--c-success)' }}
              />
              <span className="field__hint field__hint--success">ثبت شد.</span>
            </div>
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>کارت محصول</h2>
            <p>حالت پیش‌فرض و حالت هاور با اقدام سریع.</p>
          </div>
          <div className="sg__cards">
            <ProductCard product={products[0]} />
            <ProductCard product={products[4]} />
            <ProductCard product={products[7]} />
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>سرتیتر بخش و حالت خالی</h2>
            <p>الگوی مشترک سرتیتر بخش‌ها و حالت بدون نتیجه برای فیلترها.</p>
          </div>
          <div className="section-head">
            <div className="section-head__text">
              <span className="eyebrow">دسته‌بندی محصولات</span>
              <h2>جوراب، کفش، صندل و کمربند</h2>
              <p>توضیح کوتاه بخش، حداکثر دو سطر.</p>
            </div>
            <a className="section-head__link" href="#sg">
              مشاهده همه
              <IconArrowLeft size={16} />
            </a>
          </div>
          <div className="empty-state">
            <IconStar size={22} style={{ color: 'var(--c-gold)' }} />
            <strong>محصولی با این مشخصات پیدا نشد</strong>
            <span>فیلترها را تغییر دهید یا همه محصولات را ببینید.</span>
            <button type="button" className="btn btn--outline btn--sm">
              نمایش همه محصولات
            </button>
          </div>
        </section>

        <section className="sg__section">
          <div className="sg__head">
            <h2>آیکون‌ها</h2>
            <p>خط ۱.۵ پیکسل، اندازه پایه ۲۰ و رنگ از متن گرفته می‌شود.</p>
          </div>
          <div className="sg__icons">
            <span><IconSearch /></span>
            <span><IconCart /></span>
            <span><IconHeart /></span>
            <span><IconLock /></span>
            <span><IconStar /></span>
          </div>
        </section>
      </main>
    </div>
  );
}
