import './Categories.css';
import { categories } from '../data/catalog';
import { IconArrowLeft } from './Icons';

export default function Categories() {
  return (
    <section className="section" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <span className="eyebrow">دسته‌بندی محصولات</span>
            <h2 id="categories-title">از جوراب روزمره تا کفش و کمربند چرم</h2>
            <p>
              چهار گروه اصلی محصول، با سایزبندی کامل و موجودی پیوسته برای فروش خرده و
              تأمین عمده.
            </p>
          </div>
          <a className="section-head__link" href="#products">
            مشاهده همه محصولات
            <IconArrowLeft size={16} />
          </a>
        </div>

        <div className="cat-grid">
          {categories.map((category) => (
            <a className="cat-card" href="#products" key={category.id}>
              <div className="cat-card__media">
                <img src={category.image} alt={`دسته محصول ${category.title}`} loading="lazy" />
              </div>
              <span className="cat-card__arrow" aria-hidden="true">
                <IconArrowLeft size={16} />
              </span>
              <div className="cat-card__body">
                <strong className="cat-card__title">{category.title}</strong>
                <span className="cat-card__subtitle">{category.subtitle}</span>
                <span className="cat-card__note">{category.note}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
