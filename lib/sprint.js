Sprint = {
  tasksByStoryOrder: function (stories, storyOrder) {
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

    // Append rest of mappedStories in orderedStories
    return orderedStories.concat(_.toArray(mappedStories));
  }
};
