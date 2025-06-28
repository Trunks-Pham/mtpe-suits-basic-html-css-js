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

//Sau khi ấn MUA NGAY
var buyButtons = document.querySelectorAll('.buyButton');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var alertBox = this.nextElementSibling;
            alertBox.style.display = 'block';
        });
    });

    var closeButtons = document.querySelectorAll('.closeButton');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var alertBox = this.parentElement.parentElement;
            alertBox.style.display = 'none';
        });
    });