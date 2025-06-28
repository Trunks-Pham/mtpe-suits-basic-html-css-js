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