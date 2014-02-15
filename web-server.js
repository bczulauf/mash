var express = require("express"),
	app = express(),
	port = parseInt(process.env.PORT, 10) || 3000;

app.configure(function () {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
})

var data = [
	{"firstname": "Elia", "lastname": "Mrak", "status": "single", "photo": "elia.jpg" },
	{"firstname": "Eva", "lastname": "Mrak", "status": "single", "photo": "eva.jpg" }
]

app.get('/friends', function (req, res) {
  res.send(data);
});

app.listen(port);