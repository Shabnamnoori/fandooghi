document.addEventListener('DOMContentLoaded', () => {
  const productData = localStorage.getItem('selectedProduct');

  if (productData) {
    const product = JSON.parse(productData);

    const nameElement = document.getElementById('product-name');
    const priceElement = document.getElementById('product-price');

    if (nameElement && priceElement) {
      nameElement.textContent = product.name;
      priceElement.textContent = product.price + ' تومان';
    }
  } else {
    const nameElement = document.getElementById('product-name');
    const priceElement = document.getElementById('product-price');

    if (nameElement && priceElement) {
      nameElement.textContent = 'هیچ محصولی انتخاب نشده.';
      priceElement.textContent = '-';
    }
  }
});