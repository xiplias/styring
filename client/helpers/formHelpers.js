FormHelper = {
  componentOptions: function (hideIcebox) {
    var components = Components.find({projectId: FormHelper.currentProject()._id});

    var options = [];

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
  },
  currentProject: function () {
    var project = Session.get('currentProject');

    return project || {};
  },
  component: function (componentId) {
    return Components.findOne({_id: componentId, projectId: FormHelper.currentProject()._id}) || {};
  }
};
