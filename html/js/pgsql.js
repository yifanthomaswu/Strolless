  var URL_API = "https://146.169.45.96/api/v2/g1527136_u/";
  var URL_API_KEY = "&api_key=7627afb9f57cc676069ff7970f9d9c5597b11ca5994a1bd8e6d1ac13245bb36c";

  function getUserDetail(callback, u_id)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      callback(xmlHttp.responseText);
    }
    var field = "?fields=email,name,phone,paypal,rating";
    xmlHttp.open("GET", URL_API + "_table/web_user/" + u_id + field + URL_API_KEY, true);
    xmlHttp.send(null);
  }

  function userRegister(callback, email, password, name, phone)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      callback(xmlHttp.responseText);
    }
    var resource = {email:email, password:password, name:name, phone:phone};
    xmlHttp.open("POST", URL_API + "_table/web_user?" + URL_API_KEY, true);
    xmlHttp.send(JSON.stringify({resource:resource}));
  }
