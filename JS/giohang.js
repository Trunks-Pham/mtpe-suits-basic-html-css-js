// Khi logo được nhấp vào, thay đổi trạng thái hiển thị của 'nav' nếu màn hình nhỏ hơn hoặc bằng 768px
var logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
  if (window.innerWidth <= 768) {
    var nav = document.querySelector('.nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
        nav.style.backgroundColor = '#f0f0f0';
    } else {
        nav.style.display = 'none';
    }
  }
});

function updateTotal() {
  let total = 0;
  
  document.querySelectorAll('#cart .item').forEach(item => {
      const price = parseInt(item.getAttribute('data-price'));
      const quantity = parseInt(item.querySelector('input').value);
      
      total += price * quantity;
  });
  
  document.querySelector('#total span').innerText = total.toLocaleString();
}

function increaseQuantity(button) {
  const input = button.previousElementSibling;
  input.value = parseInt(input.value) + 1;

  updateTotal();
}

function decreaseQuantity(button) {
  const input = button.nextElementSibling;

  if (parseInt(input.value) > 1) {
      input.value -= '1';
      updateTotal();
  }
}

function removeItem(button) {
  button.parentElement.parentElement.remove();

  updateTotal();
}

window.onload = updateTotal;

document.getElementById('con').addEventListener('click', function() {
  window.location.href = '../HTML/sanpham.html';
});