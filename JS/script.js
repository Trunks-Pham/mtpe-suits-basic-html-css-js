var index = 1;
var totalImages = 5; // Tổng số lượng hình ảnh của bạn

// Hàm để thay đổi hình ảnh
function changeImage() {
  var imgElement = document.getElementById('Background');
  imgElement.src = "../ASSIGNMENT_Web UI/Images/" + index + '.jpg';
  index = (index % totalImages) + 1; 
}

setInterval(changeImage, 1750);

window.addEventListener('resize', function() {
  var header = document.querySelector('.header');
  var nav = document.querySelector('.nav');
  if (window.innerWidth <= 768) {
      header.classList.add('small');
  } else {
      header.classList.remove('small');
      nav.style.display = 'block'; 
      nav.style.backgroundColor = ''; 
  }
});
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

//Hiệu ứng chuyển động nội dung 010203040506
let serviceItems = document.querySelectorAll('.service_item.a-center');
let currentIndex = 0;

function showNextItem() {
    serviceItems[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + 1) % serviceItems.length;

    serviceItems[currentIndex].style.display = 'block';
}

if (window.innerWidth <= 768) {
    serviceItems[0].style.display = 'block';

    setInterval(showNextItem, 1000);
}

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