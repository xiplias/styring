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
  },
  byStoryOrder: function (stories, storyOrder) {
    if (storyOrder) {
      // Convert to object for easier access
      var mappedStories = {};
      stories.forEach(function (story) {
        mappedStories[story._id] = story;
      });

      // Take the and fill the ordered with these stories first
      // and delete selected story from mappedStories
      var orderedStories = storyOrder.map(function (order) {
        var story = mappedStories[order];
        if(story) {
          delete mappedStories[order];
          return story;
        }
      });

      // Append rest of mappedStories in orderedStories and remove null and undefined
      return orderedStories.concat(_.toArray(mappedStories)).filter(function (e) {
        return e;
      });
    }

    return stories;
  }
};
