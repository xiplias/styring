Template.planning.helpers({
  components: function () {
    return Components.find({projectId: FormHelper.currentProject()._id});
  },
  project: function () {
    return FormHelper.currentProject();
  }
});

Template.planning.events({
  'click #storyFormButton': function () {
    Session.set('selectedStory', undefined);
  }
});
