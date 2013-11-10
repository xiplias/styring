Meteor.publish("projects", function() {
  return Projects.find();
});

Meteor.publish("components", function() {
  return Components.find();
});

Meteor.publish("stories", function() {
  return Stories.find();
});

Meteor.publish("tasks", function() {
  return Tasks.find();
});
