const faNumber = new Intl.NumberFormat('fa-IR');

/** 2850000 -> «۲٬۸۵۰٬۰۰۰» */
export function formatNumber(value) {
  return faNumber.format(value);
}

/** 4.6 -> «۴٫۶» */
export function formatDecimal(value) {
  return new Intl.NumberFormat('fa-IR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

/** 2850000 -> «۲٬۸۵۰٬۰۰۰ تومان» */
export function formatPrice(value) {
  return `${formatNumber(value)} تومان`;
}
