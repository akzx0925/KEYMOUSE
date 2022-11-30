var un = document.getElementById('Username');
var errorm = document.getElementById('nothing');
var errorm1= document.getElementById('nothing1');
var form = document.getElementById('form');
var pw = document.getElementById('Password');
var loginv = function(a) {
      if (un.value.length<4){
        errorm.innerHTML="We don't even allow username to be that short. Try again."
      }
      else{
        errorm.innerHTML=""
      }
      if (pw.value=="password"||pw.value=="abcd1234"||pw.value=="12345678"){
        errorm1.innerHTML="This can't be your password"
      }
      else {
        errorm1.innerHTML=""
      }
      if(pw.value.length<8){
        errorm1.innerHTML="We don't even allow password to be that short. Try again."
      }
      else{

      }
      if (errorm.innerHTML=="" && errorm1.innerHTML==""){
        window.location.href="index.html";
      }
      else{

      }
          a.preventDefault();
    };
    form.addEventListener("submit", loginv, true);
