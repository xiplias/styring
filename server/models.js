Meteor.publish("components", function() {
  return Components.find();
});

Meteor.publish("stories", function() {
  return Stories.find();
});