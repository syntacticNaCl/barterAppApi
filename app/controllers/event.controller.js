
exports.create = (req, res) => {
  // Create and Save a new Event
  if(!req.body.content) {
    res.status(400).send({message: "Event can not be empty"});


  }

  res.status(200).send({message: "Group created"});

  // save issue

};

exports.findAll = function(req, res) {
  // Retrieve and return all events from the database.
  
  res.send();

};

exports.findOne = function(req, res) {
  // Find a single event with a eventId
  res.send();

};

exports.update = function(req, res) {
  // Update a event identified by the eventId in the request

};

exports.delete = function(req, res) {
  // Delete a event with the specified eventId in the request

};
