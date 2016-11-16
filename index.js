var express = require('express');
var app = express();
var ipaddr = require('ipaddr.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	
	//defines user operational system
  	var OS = (process.platform);

  	//defines user language
  	var language = request.headers["accept-language"];
  	language = language.substring(0,language.indexOf(','));

  	//defines user IP
  	var IP;
  	if (ipaddr.isValid)
  		IP = request.ip;
  	else
  		IP = null;


	var ObjResponse = {
  		IPAddress : IP,
  		Language : language,
  		OperationalSystem : OS
   	};
   	response.json(ObjResponse);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//http://stackoverflow.com/questions/8683895/how-do-i-determine-the-current-operating-system-with-node-js
//http://stackoverflow.com/questions/11845471/how-to-get-user-language-in-nodejs-expresjs