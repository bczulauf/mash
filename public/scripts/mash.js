// //Date Model
// function DateModel(createdAt, dateTime, place, participants, acceptCount) {
// 	this.createdAt = createdAt;
// 	this.dateTime = dateTime;
// 	this.place = place;
// 	this.participants = participants;
// 	this.acceptCount = acceptCount;
// }

function View(templateName, data) {
  this.templateName = templateName;
  this.data = data;
};

var proposalModel = {
  participants: [],
  time: new Date(),
  location: "Seattle",
  message: ko.observable("You should go on this date!")
};

var usersModel = {
	users: ko.observableArray()
};

var viewModel = {
  views: ko.observableArray([
    new View("userTemplate", usersModel),
    new View("proposalTemplate", proposalModel)
    ]),
  selectedView: ko.observable()    
};

$(function () {
	$.get('/friends', function(data) {
		usersModel.users = ko.observableArray(data.friends);
		viewModel.selectedView(new View("userTemplate", usersModel));
	});

  ko.applyBindings(viewModel, document.getElementById('content'));
});

//maybe i put this in the viewModel because it will be used to navigate
//between views and to change the selectedView context
// 	self.dateHolder = [];
// 	self.match = function(user) {
// 		if (self.dateHolder.length === 0) {
//       console.log("first to be asked");
//       self.dateHolder.push(user);
// 		} else if (self.dateHolder[0] === user){
//       self.dateHolder.pop();
// 		} else {
// 			var dateModel = new DateModel(new Date(), "Wed, March 5 at 7pm", "1335 Filbert Street", [], []);
// 			var dateProposalUI = new DateProposalUI(dateModel); 
// 		}
// 	}
// }