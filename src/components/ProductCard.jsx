import './ProductCard.css';
import { formatDecimal, formatPrice } from '../lib/format';
import { IconHeart, IconPlus, IconStar, IconLock, IconCart } from './Icons';

export default function ProductCard({ product }) {
  const { name, id, category, price, oldPrice, rating, reviews, image, badge, inStock } =
    product;

  return (
    <article className={`product-card${inStock ? '' : ' product-card--out'}`}>
      <div className="product-card__media">
        <img src={image} alt={name} loading="lazy" />

        {badge && (
          <span className={`badge product-card__badge ${badge === 'جدید' ? 'badge--navy' : 'badge--gold'}`}>
            {badge}
          </span>
        )}

        <button type="button" className="product-card__wish" aria-label={`افزودن ${name} به علاقه‌مندی‌ها`}>
          <IconHeart size={17} />
        </button>

        <div className="product-card__quick">
          <button
            type="button"
            className="btn btn--dark btn--sm btn--full"
            disabled={!inStock}
            aria-label={`افزودن ${name} به سبد خرید`}
          >
            <IconCart size={16} />
            {inStock ? 'افزودن به سبد' : 'ناموجود'}
          </button>
        </div>
      </div>

      <div className="product-card__body">
        <span className="product-card__cat">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <span className="product-card__model" dir="ltr">
          {id}
        </span>

        <div className="product-card__rating">
          <IconStar size={14} />
          <strong>{formatDecimal(rating)}</strong>
          <span>({reviews} دیدگاه)</span>
        </div>

        <div className="product-card__price">
          {oldPrice && <span className="product-card__old">{formatPrice(oldPrice)}</span>}
          <span className="product-card__now">{formatPrice(price)}</span>
        </div>

        <span className="product-card__wholesale">
          <IconLock size={13} />
          قیمت عمده پس از تأیید حساب فروشگاهی
        </span>

        <span
          className={`product-card__stock${inStock ? '' : ' is-out'}`}
        >
          <span className="product-card__stock-dot" aria-hidden="true" />
          {inStock ? 'موجود در انبار' : 'ناموجود'}
        </span>
      </div>
    </article>
  );
}
