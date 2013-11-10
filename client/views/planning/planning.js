Template.planning.helpers({
  components: function () {
    return Components.find({projectId: FormHelper.currentProject()._id});
  }
});

Template.planning.events({
  'click #storyFormButton': function () {
    Session.set('selectedStory', undefined);
  }
});
