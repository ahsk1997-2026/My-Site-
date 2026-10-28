import { useMemo, useState } from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import { products, productTabs } from '../data/catalog';
import { IconArrowLeft } from './Icons';

export default function Products() {
  const [activeTab, setActiveTab] = useState('all');

  const visible = useMemo(
    () =>
      activeTab === 'all'
        ? products
        : products.filter((product) => product.tags.includes(activeTab)),
    [activeTab],
  );

  return (
    <section className="section section--ivory" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section-head products-head">
          <div className="section-head__text">
            <span className="eyebrow">انتخاب آرمان پخش</span>
            <h2 id="products-title">پرفروش‌ترین‌ها و محصولات منتخب</h2>
            <p>
              قیمت‌ها به تومان و برای خرید خرده است. برای هر کالا قیمت عمده پس از تأیید
              حساب فروشگاهی نمایش داده می‌شود.
            </p>
          </div>

          <div className="product-tabs" role="tablist" aria-label="دسته‌بندی محصولات منتخب">
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`product-tab${activeTab === tab.id ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="products-foot">
          <a className="btn btn--outline" href="#categories">
            مشاهده همه محصولات
            <IconArrowLeft size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
