var mail = document.getElementById('Email');
var number = document.getElementById('phone');
var errorm = document.getElementById('nothing');
var errorm1= document.getElementById('nothing1');
var mailv = function(a) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    a.preventDefault();
      if (mail.value.length<6){
        errorm.innerHTML="No way your email is that short. Try again."
      }
      else{
        errorm.innerHTML=""
      }

      if(number.value.match(phoneno)){
        errorm1.innerHTML=""
      }
      else{
        errorm1.innerHTML="Not a valid phone number";
      }
      if (errorm.innerHTML=="" && errorm1.innerHTML==""){
        window.location.href="contact.html";
      }
      else{

      }
    };
    var form = document.getElementById('form');
    form.addEventListener("submit", mailv, true);
