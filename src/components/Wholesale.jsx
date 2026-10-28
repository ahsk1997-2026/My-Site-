import './Wholesale.css';
import { IconCheck, IconArrowLeft, IconTruck } from './Icons';

const features = [
  'قیمت‌گذاری پله‌ای بر اساس حجم سفارش',
  'تحویل یکجا و بسته‌بندی حرفه‌ای',
  'تنوع کامل سایز و رنگ در هر کد کالا',
  'پشتیبانی اختصاصی مشتریان عمده',
  'ارسال سفارش‌ها به سراسر ایران',
  'امکان تأمین مداوم و سفارش دوره‌ای',
];

export default function Wholesale() {
  return (
    <section className="wholesale" id="wholesale" aria-labelledby="wholesale-title">
      <div className="container wholesale__grid">
        <div className="wholesale__content">
          <span className="eyebrow">فروش عمده</span>
          <h2 id="wholesale-title">تأمین عمده برای فروشگاه‌ها و توزیع‌کنندگان</h2>
          <p className="wholesale__lead">
            سفارش‌های خود را بر اساس تعداد و تنوع کالا ثبت کنید؛ کارشناسان ما قیمت
            پله‌ای، زمان تحویل و شرایط همکاری را به‌صورت اختصاصی اعلام می‌کنند.
          </p>

          <ul className="wholesale__features">
            {features.map((item) => (
              <li key={item}>
                <span className="wholesale__check" aria-hidden="true">
                  <IconCheck size={13} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="wholesale__cta">
            <a className="btn btn--primary" href="#footer-contact">
              درخواست همکاری
              <IconArrowLeft size={17} />
            </a>
            <a className="btn btn--on-dark" href="#products">
              ورود به بخش خرید عمده
            </a>
          </div>

          <p className="wholesale__note">
            قیمت‌های عمده پس از تأیید حساب فروشگاهی نمایش داده می‌شود؛ سفارش‌ها بدون
            تأیید حساب قابل ثبت نیست.
          </p>
        </div>

        <div className="wholesale__media">
          <span className="wholesale__frame" aria-hidden="true" />
          <img
            src="/images/wholesale.jpg"
            alt="مجموعه‌ای از کفش‌های چرم مردانه آماده ارسال عمده"
            loading="lazy"
          />
          <div className="wholesale__chip">
            <IconTruck size={16} />
            <span>
              <strong>ارسال سراسری</strong>
              <em>طبق شرایط حمل و تحویل</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
