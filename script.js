const boxes = document.querySelectorAll('.offer-box');
const totalPrice = document.getElementById('total-price');

boxes.forEach(box => {
  const radio = box.querySelector('.offer-radio');

  radio.addEventListener('change', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    const price = box.getAttribute('data-price');
    totalPrice.textContent = `$${price}.00 USD`;
  });
});
