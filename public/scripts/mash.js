function User(firstname, lastname, status, photo) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.status = status;
	this.photo = "url(images/" + photo + ")";
}

function UsersModel() {
  var self = this;
	self.users = ko.observableArray();

	self.addUser = function() {
		self.users.push({
			firstname: "",
			lastname: ""
		});
  };

	self.removeUser = function(user) {
		self.users.remove(user);
	};

};

$(function () {
	var usersModel = new UsersModel();

	$.get("/friends", function (data) {
		$.each(data, function(key, value) {
		  usersModel.users.push(new User(value.firstname, value.lastname, value.status, value.photo));
		});
	});

  ko.applyBindings(usersModel, document.getElementById("content")); 
});