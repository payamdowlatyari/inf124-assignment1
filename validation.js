function getEventValues() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var quantity = document.getElementById("quantity").value;
  var productid = document.getElementById("pid").value;
  var cname = document.getElementById("cname").value;
  var ccnum = document.getElementById("ccnum").value;
  var expmonth = document.getElementById("expmonth").value;
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
  numberChecks = [zip, productid, ccnum, expyear, cvv, quantity, expmonth];
  for (nc in numberChecks) {
    if (!nc.match(allNumberRE)) {
      alert("bad match regarding numbers");
    }
  }

  var allLettersRE = /\b[^\d\W]+\b/;
  allWords = [fname, lname, city, state, cname];
  for (word in allWords) {
    if (!word.match(allLettersRE)) {
      alert("Bad word formatting");
    }
  }

  if (!(cvv.length == 3 || cvv.length == 4)) {
    alert("Invalide length of cvv");
  }

  var intMonth = parseInt(expmonth, 10);
  if (!(intMonth > 0 && intMonth <= 12)) {
    alert("Invalid expiring month");
  }

  states = [
    "AL",
    "AK",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  if (!states.include(state)) {
    alert("Invalid state input");
  }
}
