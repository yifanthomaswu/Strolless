var URL_API = "https://146.169.45.96/api/v2/g1527136_u/";
var URL_API_KEY = "&api_key=7627afb9f57cc676069ff7970f9d9c5597b11ca5994a1bd8e6d1ac13245bb36c";
var HTTP_OK = 200;

function getUserDetail(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var fields = "?fields=email,name,phone,paypal,rating";
  xmlHttp.open("GET", URL_API + "_table/web_user/" + u_id + fields + URL_API_KEY, true);
  xmlHttp.send(null);
}

function userRegister(callback, email, password, name, phone) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {email:email, password:password, name:name, phone:phone};
  xmlHttp.open("POST", URL_API + "_table/web_user?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function userLogin(callback, email, password) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      console.log(xmlHttp.responseText);
      var obj = JSON.parse(xmlHttp.responseText);
      if (password.localeCompare(obj.password) === 0) {
        callback(obj.u_id);
      } else {
        callback(0);
      }
    }
  };
  var fields = "?fields=u_id,password&id_field=email";
  xmlHttp.open("GET", URL_API + "_table/web_user/" + email + fields + URL_API_KEY, true);
  xmlHttp.send();
}

function addAddress(callback, u_id, house_number, street_name, postcode, description) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {u_id:u_id, house_number:house_number, street_name:street_name, postcode:postcode, description:description};
  xmlHttp.open("POST", URL_API + "_table/web_address?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function getAddressById(callback, a_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var filter = "?filter=a_id%3D" + a_id;
  xmlHttp.open("GET", URL_API + "_table/web_address" + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getAddressByUser(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var filter = "?filter=u_id%3D" + u_id;
  xmlHttp.open("GET", URL_API + "_table/web_address" + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getRestaurantById(callback, r_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.open("GET", URL_API + "_table/web_restaurant/" + r_id + "?" + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getAllRestaurant(callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.open("GET", URL_API + "_table/web_restaurant?" + URL_API_KEY, true);
  xmlHttp.send(null);
}

function addFavourite(callback, u_id, r_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {u_id:u_id, r_id:r_id};
  xmlHttp.open("POST", URL_API + "_table/web_favourite?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function getFavouriteByUser(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var filter = "?filter=u_id%3D" + u_id;
  xmlHttp.open("GET", URL_API + "_table/web_favourite" + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getFavouriteByRestaurant(callback, r_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var filter = "?filter=r_id%3D" + r_id;
  xmlHttp.open("GET", URL_API + "_table/web_favourite" + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function addStroller(callback, u_id, a_id, r_id, deadline, pickup) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {u_id:u_id, a_id:a_id, r_id:r_id, deadline:deadline.toJSON(), pickup:pickup.toJSON()};
  xmlHttp.open("POST", URL_API + "_table/web_stroller?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function setStrollerReady(callback, s_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {ready:true};
  xmlHttp.open("PUT", URL_API + "_table/web_stroller?ids=" + s_id + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function getAllStrollerNotReady(callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_address_by_a_id,web_user_by_u_id,web_restaurant_by_r_id";
  var filter = "&filter=ready%3Dfalse";
  xmlHttp.open("GET", URL_API + "_table/web_stroller" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getStrollerById(callback, s_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_address_by_a_id,web_user_by_u_id,web_restaurant_by_r_id";
  var filter = "&filter=s_id%3D" + s_id;
  xmlHttp.open("GET", URL_API + "_table/web_stroller" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getStrollerByUser(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_address_by_a_id,web_user_by_u_id,web_restaurant_by_r_id";
  var filter = "&filter=u_id%3D" + u_id;
  xmlHttp.open("GET", URL_API + "_table/web_stroller" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getStrollerByRestaurant(callback, r_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_address_by_a_id,web_user_by_u_id,web_restaurant_by_r_id";
  var filter = "&filter=r_id%3D" + r_id;
  xmlHttp.open("GET", URL_API + "_table/web_stroller" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function addOrder(callback, u_id, s_id, food) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var resource = {u_id:u_id, s_id:s_id, food:food};
  xmlHttp.open("POST", URL_API + "_table/web_order?" + URL_API_KEY, true);
  xmlHttp.send(JSON.stringify({resource:resource}));
}

function getOrderById(callback, u_id, s_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_stroller_by_s_id";
  var filter = "&filter=(u_id%3D" + u_id + ")AND(s_id%3D" + s_id+ ")";
  xmlHttp.open("GET", URL_API + "_table/web_order" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getOrderByUser(callback, u_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_stroller_by_s_id";
  var filter = "&filter=u_id%3D" + u_id;
  xmlHttp.open("GET", URL_API + "_table/web_order" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function getOrderByStroller(callback, s_id) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    console.log(xmlHttp.responseText);
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == HTTP_OK) {
      callback(xmlHttp.responseText);
    }
  };
  var related = "?related=web_stroller_by_s_id";
  var filter = "&filter=s_id%3D" + s_id;
  xmlHttp.open("GET", URL_API + "_table/web_order" + related + filter + URL_API_KEY, true);
  xmlHttp.send(null);
}

function createCookie(name,value,days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
