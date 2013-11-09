Template.storyForm.helpers({
  storiesCollection: function () {
    return Stories;
  },
  componentOptions: function () {
    var components = Components.find({});
    var options = [];

    components.forEach(function (component) {
      options.push({
        label: component.name,
        value: component._id
      });
    });

    return options;
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
    console.log(Session.get('selectedStory'))
    return Session.get('selectedStory');
  }
};