FormHelper = {
  componentOptions: function (hideIcebox) {
    var components = Components.find({});
    
    var options = [];

    if (!hideIcebox) {
      options.push({label: 'Icebox', value: ''});
    }

    components.forEach(function (component) {
      options.push({
        label: component.name,
        value: component._id
      });
    });

    return options;
  },
  currentStoryId: function () {
    var story = Session.get("selectedStory");

    if (story) {
      return story._id;
    }
  }
};