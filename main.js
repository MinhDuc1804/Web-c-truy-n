function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");                                                                                                                                                                                                                                                          
}

    $(".testchat").click(function(){
        $(".chat-thongbao").toggle(100)
    })


    window.onscroll = function() {myFunction()};

        var headtwo = document.getElementById("myHeader");
        var sticky = headtwo.offsetTop;

        function myFunction() {
        if (window.pageYOffset > sticky) {
            headtwo.classList.add("sticky");
        } else {
            headtwo.classList.remove("sticky");
        }
        }


        // phân đăng nhập /đăng ký
        function signup(e) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var user = {
              username: username,
              email: email,
              password: password,
            };
            var json = JSON.stringify(user);
            localStorage.setItem(username, json);
            alert("dang ky thanh cong");
          }
        
          function login(e) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var user = localStorage.getItem(username);
            var data = JSON.parse(user);
            if (!user) {
              alert("vui long nhap username password");
            } else if (
              username == data.username &&
              email == data.email &&
              password == data.password
            ) {
              alert("dang nhap thanh cong");
              window.location.href = "index.html";
            } else {
              alert("dang nhap that bai");
            }
          }