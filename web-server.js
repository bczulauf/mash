var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 3000;

app.configure(function () {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
})

var data = {
	friends: [{"name": "Elia", "status": "taken", "photo": "url(images/elia.jpg)", "dates": "[{date: yes}]" },
	{"name": "Eva", "status": "single", "photo": "url(images/eva.jpg)", "dates": "[{date: yes}]" }]
}

app.get('/friends', function (req, res) {
  res.send(data);
});

app.listen(port);