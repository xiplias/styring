Template.storyForm.helpers({
  storiesCollection: function () {
    return Stories;
  },
  componentOptions: function () {
    return FormHelper.componentOptions();
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
