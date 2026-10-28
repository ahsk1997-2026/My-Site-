import './TopBar.css';
import { IconPhone, IconTruck, IconBox, IconHeadset } from './Icons';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__cluster">
          <a className="topbar__item topbar__item--strong" href="#footer-contact">
            <IconPhone size={15} />
            <span className="phone">۰۲۱–۱۲۳۴۵۶۷۸</span>
          </a>
          <span className="topbar__sep" aria-hidden="true" />
          <span className="topbar__item topbar__item--hide-sm">
            <IconHeadset size={15} />
            <span>شنبه تا پنجشنبه، ۹ تا ۱۸</span>
          </span>
        </div>

        <div className="topbar__cluster topbar__cluster--center">
          <span className="topbar__item">
            <IconTruck size={15} />
            <span>ارسال سفارش‌ها به سراسر ایران</span>
          </span>
        </div>

        <div className="topbar__cluster topbar__cluster--end">
          <a className="topbar__link topbar__item--hide-sm" href="#footer-services">
            راهنمای خرید
          </a>
          <span className="topbar__sep topbar__item--hide-sm" aria-hidden="true" />
          <a className="topbar__link" href="#footer-services">
            <IconBox size={15} />
            <span>پیگیری سفارش</span>
          </a>
        </div>
      </div>
    </div>
  );
}
