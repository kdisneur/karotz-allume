include("util.js");

var on_karotz_connect = function(data) {
  var ip         = "192.168.0.16";
  var port       = "3000";
  var item       = params[instanceName].name
  var url        = "http://" + ip + ":" + port + "/light-on/" + item;

  var result = http.post(url, {});
  exit();
}


var karotz_ip = "localhost";
karotz.connectAndStart(karotz_ip, 9123, on_karotz_connect, {});
