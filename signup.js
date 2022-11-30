var un = document.getElementById('username');
var mail = document.getElementById('email');
var errorm = document.getElementById('message1');
var errorm1= document.getElementById('message2');
var errorm2b= document.getElementById('message3b');
var errorm2= document.getElementById('message3');
var errorm3= document.getElementById('message4');
var form = document.getElementById('form');
var pw = document.getElementById('Password');
var pw2 = document.getElementById('Password2');
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var loginv = function(a) {

      if (un.value.length<4){
        errorm.innerHTML="We don't even allow username to be that short. Try again."
      }
      else{
        errorm.innerHTML=""
      }
      if (mail.value.match(mailformat)){
          errorm1.innerHTML=""
      }
      else{
          errorm1.innerHTML="This can't be your email. Try again."
      }
      if(pw.value.length<8){
        errorm2.innerHTML="Password too short!"
      }
      else {
        errorm2.innerHTML=""
      }
      if (pw.value=="password"||pw.value=="abcd1234"||pw.value=="12345678"){
        errorm2b.innerHTML="This can't be your password"
      }
      else {
        errorm2b.innerHTML=""
      }
      if (pw.value!=pw2.value){
        errorm3.innerHTML="Password doesn't match"
      }
      else{
        errorm3.innerHTML=""
      }
      if (errorm.innerHTML=="" && errorm1.innerHTML=="" && errorm2.innerHTML=="" && errorm3.innerHTML=="" && errorm2b.innerHTML==""){
        window.location.href="login.html";
      }
      else{

      }
          a.preventDefault();
    };
    form.addEventListener("submit", loginv, true);
