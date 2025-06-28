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


$(document).ready(function() {
    $("#registrationForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name:
            {
                required: true,
            },
            password1: {
                required: true,
                minlength: 6
            },
            password2: {
                required: true,
                equalTo: "#password"
            },
            phone: {
                required: true,
                maxlength: 10
            },
            terms_of_service: {
                required: true
            }
        },
        messages: {
            email: "Vui lòng nhập địa chỉ email hợp lệ",
            name:"Vui lòng nhập Họ & Tên",
            password1: {
                required: "Vui lòng cung cấp mật khẩu",
                minlength: "Mật khẩu của bạn phải dài ít nhất 6 ký tự"
            },
            password2: {
                required: "Vui lòng cung cấp mật khẩu",
                equalTo: "Hãy điền vào mật khẩu giống ở trên"
            },
            phone:{
                required:" Vui lòng nhập số điện thoại của bạn",
                maxlength:"Số điện thoại gồm 10 số"
            }
        },
        submitHandler: function(form) {
            form.submit();
            alert("Chúc Mừng Bạn Đã Hoàn Tất Đăng Ký !!!");
        }
    });
});