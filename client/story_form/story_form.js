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
  }
});

var sharedStoryForm = {
  selectedStory: function () {
    return Session.get('selectedStory');
  }
};