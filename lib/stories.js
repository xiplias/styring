StoriesLib = {
  orderByOrderList: function (stories, storyOrder) {
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
  },
  // Takes multiple arrays of stories and order then in one array as [0,0,1,1,2,2,3,3,4,5,6];
  mergeByZipper: function (storyArrays) {
    return _.flatten(_.zip.apply(_, storyArrays)).filter(function (e) {
      return e;
    });
  }
};
