export function calculateDiscountPercentage(price, priceAfterDiscount) {
  const discount = ((price - priceAfterDiscount) / price) * 100;
  return Math.round(discount);
}
