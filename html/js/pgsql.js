var URL_API = "https://146.169.45.96/api/v2/g1527136_u/";
var URL_API_KEY = "&api_key=7627afb9f57cc676069ff7970f9d9c5597b11ca5994a1bd8e6d1ac13245bb36c";

function getUserDetail(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    callback(xmlHttp.responseText);
  }
  var fields = "?fields=email,name,phone,paypal,rating";
  xmlHttp.open("GET", URL_API + "_table/web_user/" + u_id + fields + URL_API_KEY, true);
  xmlHttp.send(null);
}

function userRegister(callback, email, password, name, phone) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    callback(xmlHttp.responseText);
  }
  var resource = {email:email, password:password, name:name, phone:phone};
  xmlHttp.open("POST", URL_API + "_table/web_user?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function userLogin(callback, email, password) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    var obj = JSON.parse(xmlHttp.responseText);
    if (password.localeCompare(obj.password) == 0) {
      callback(obj.u_id);
    } else {
      callback(0);
    }
  }
  var fields = "?fields=u_id,password&id_field=email";
  xmlHttp.open("GET", URL_API + "_table/web_user/" + email + fields + URL_API_KEY, true);
  xmlHttp.send(null);
}

function addAddress(callback, u_id, house_number, street_name, postcode, description) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    callback(xmlHttp.responseText);
  }
  var resource = {u_id:u_id, house_number:house_number, street_name:street_name, postcode:postcode, description:description};
  xmlHttp.open("POST", URL_API + "_table/web_address?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function getAddress(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    callback(xmlHttp.responseText);
  }
  var filter = "?filter=u_id%3D" + u_id;
  xmlHttp.open("GET", URL_API + "_table/web_address" + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getRestaurant(callback, r_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", URL_API + "_table/web_restaurant/" + r_id + "?" + URL_API_KEY, true);
  xmlHttp.send(null);
}
