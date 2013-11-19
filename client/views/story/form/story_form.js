Template.storyForm.helpers({
  storiesCollection: function () {
    return Stories;
  },
  componentOptions: function () {
    return FormHelper.componentOptions();
  },
  sprintOptions: function () {
    var project = FormHelper.currentProject(),
        sprints = Sprints.find({projectId: project._id}).fetch();

    sprints = Sprints.find({projectId: project._id});

    return sprints.map(function (sprint) {
      return {label: "Sprint #" + sprint.iterator, value: sprint._id};
    });
  },
  selectedStory: function () {
    return sharedStoryForm.selectedStory();
  },
  formState: function () {
    return sharedStoryForm.selectedStory() ? 'update' : 'insert';
  },
  projectId: function () {
    return FormHelper.currentProject()._id;
  }
});

var sharedStoryForm = {
  selectedStory: function () {
    return Session.get('selectedStory');
  }
};
