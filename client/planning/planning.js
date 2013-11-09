Template.planning.helpers({
  components: function () {
    return Components.find({});
  }
});

Template.planning.events({
  'click #storyFormButton': function () {
    Session.set('selectedStory', undefined);
  }
});