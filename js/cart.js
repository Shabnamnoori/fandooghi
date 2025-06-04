document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price
    };

    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'order.html';
  });
});