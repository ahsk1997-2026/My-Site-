import './Hero.css';
import { IconArrowLeft, IconTruck, IconBox, IconHeadset, IconGrid } from './Icons';

const heroMeta = [
  { icon: IconGrid, title: '۴ دسته محصول', sub: 'جوراب، کفش، صندل، کمربند' },
  { icon: IconBox, title: 'تنوع کامل سایز و رنگ', sub: 'در هر کد کالا' },
  { icon: IconTruck, title: 'ارسال به سراسر ایران', sub: 'طبق شرایط ارسال' },
  { icon: IconHeadset, title: 'پشتیبانی فروشگاهی', sub: 'مشاوره خرید عمده' },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">عرضه مستقیم از مبادی تأمین</span>

          <h1 id="hero-title">
            کیفیت در هر گام،
            <br />
            اعتماد در هر <em>سفارش</em>
          </h1>

          <p className="hero__lead">
            آرمان پخش، تأمین‌کننده جوراب، کفش، صندل و کمربند مردانه برای مشتریان و
            فروشگاه‌ها؛ با تنوع کامل سایز و رنگ، بسته‌بندی منظم و ارسال به سراسر ایران.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#products">
              مشاهده محصولات
              <IconArrowLeft size={17} />
            </a>
            <a className="btn btn--on-dark" href="#wholesale">
              ورود به بخش خرید عمده
            </a>
          </div>

          <dl className="hero__meta">
            {heroMeta.map(({ icon: Icon, title, sub }) => (
              <div className="hero__meta-item" key={title}>
                <Icon size={18} />
                <div>
                  <dt>{title}</dt>
                  <dd>{sub}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__stage">
          <span className="hero__stage-frame" aria-hidden="true" />
          <div className="hero__stage-media">
            <img
              src="/images/p-shoe-1.jpg"
              alt="کفش اسپرت چرم مردانه، مدل آرمان ۱۰۲"
              fetchpriority="high"
            />
          </div>

          <span className="hero__stage-chip">کالکشن ۱۴۰۴</span>

          <div className="hero__stage-bar">
            <span className="hero__stage-text">
              <strong>کفش اسپرت چرم، مدل آرمان ۱۰۲</strong>
              <em>از ۲٬۸۵۰٬۰۰۰ تومان</em>
            </span>
            <a className="hero__stage-link" href="#products" aria-label="مشاهده محصول">
              <IconArrowLeft size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
