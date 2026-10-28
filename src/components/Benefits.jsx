import './Benefits.css';
import { IconShield, IconTruck, IconGrid, IconHeadset, IconRefresh } from './Icons';

const benefits = [
  {
    icon: IconShield,
    title: 'پرداخت امن',
    text: 'پرداخت از طریق درگاه بانکی در صفحه امن بانک',
  },
  {
    icon: IconTruck,
    title: 'ارسال به سراسر ایران',
    text: 'ارسال سفارش‌ها با پست و باربری',
  },
  {
    icon: IconGrid,
    title: 'تنوع کامل محصول',
    text: 'جوراب، کفش، صندل و کمربند در سایز و رنگ متنوع',
  },
  {
    icon: IconHeadset,
    title: 'پشتیبانی پاسخگو',
    text: 'مشاوره خرید خرده و عمده در ساعات کاری',
  },
  {
    icon: IconRefresh,
    title: 'بازگشت کالا',
    text: 'مطابق شرایط بازگشت و تعویض کالا',
  },
];

export default function Benefits() {
  return (
    <section className="benefits section--tight" aria-label="خدمات آرمان پخش">
      <div className="container">
        <ul className="benefits__grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <li className="benefit" key={title}>
              <span className="benefit__icon" aria-hidden="true">
                <Icon size={19} />
              </span>
              <span className="benefit__text">
                <strong>{title}</strong>
                <span>{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
