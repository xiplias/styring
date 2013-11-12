StoriesLib = {
  storiesByOrderList: function (stories, storyOrder) {
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

      // Append rest of mappedStories in orderedStories and remove null and
      return orderedStories.concat(_.toArray(mappedStories)).filter(function (e) {
        return e;
      });
    }

    return stories;
  }
};
