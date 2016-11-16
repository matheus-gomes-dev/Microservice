var express = require('express');
var app = express();
var ipaddr = require('ipaddr.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var OperationalSystem = (process.platform);
  //response.send(OperationalSystem);
  var local = request.headers["accept-language"];
  //response.send(local);
  //var IPstr = request.connection.remoteAddress;
  //var IP = IPstr.substring((IPstr.indexOf('f:')+2),(IPstr.length));
  //response.send(IP);
  if (ipaddr.isValid){
  	var IP = JSON.stringify(ipaddr.parse);
  	response.send(IP);
  	console.log(IP);
  	//
  }
  else
  	response.send("IP invalido");
  //var IP = request.ip;
  //response.send(IP);
  //var ObjResponse = {
  //	IP : 
  //	OperationalSystem : (process.platform),
  // }

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//http://stackoverflow.com/questions/8683895/how-do-i-determine-the-current-operating-system-with-node-js
//http://stackoverflow.com/questions/11845471/how-to-get-user-language-in-nodejs-expresjs