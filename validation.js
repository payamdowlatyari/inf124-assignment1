function getEventValues() {
  //   var fname = document.getElementById("fname").value;
  //   var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  //   var adr = document.getElementById("adr").value;
  //   var city = document.getElementById("city").value;
  //   var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
    var quantity = document.getElementById("quantity").value;
    var productid = document.getElementById("pid").value;
  //   var cname = document.getElementById("cname").value;
    var ccnum = document.getElementById("ccnum").value;
  //   var expmonth = document.getElementById("expmonth").value;
    var expyear = document.getElementById("expyear").value;
    var cvv = document.getElementById("cvv").value;

  var phoneNumberRE = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!phone.match(phoneNumberRE)) {
    alert("bad number");
  }

  var emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(emailRE)) {
    alert("bad email");
  }

  var allNumberRE = /^[0-9]*$/;
  numberChecks = [zip, productid, ccnum, expyear, cvv, quantity];
  for(nc in numberChecks){
      if(!nc.match(allNumberRE)){
          alert("bad match regarding numbers");
      }
  }

  if(!(cvv.length== 3 || cvv.length==4)){
      alert("Invalide length of cvv");
  }
}

function init() {
  // submitForm();
}

document.addEventListener("DOMContentLoaded", init);
