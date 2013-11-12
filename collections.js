Projects = new Meteor.Collection2('projects', {
  schema: {
    name: {
      type: String,
      label: 'Name',
      max: 200
    },
    velocity: {
      type: Number
    }
  }
});

Components = new Meteor.Collection2('components', {
  schema: {
    name: {
      type: String,
      label: 'Name',
      max: 200
    },
    projectId: {
      type: String
    },
    storyOrder: {
      type: Array,
      optional: true
    }
  }
});

Stories = new Meteor.Collection2('stories', {
  schema: {
    title: {
      type: String,
      label: 'Title',
      max: 200
    },
    description: {
      type: String,
      label: 'Description',
      optional: true
    },
    componentId: {
      type: String,
      label: 'Main component',
      optional: true
    },
    projectId: {
      type: String
    }
  }
});

Tasks = new Meteor.Collection2('tasks', {
  schema: {
    name: {
      type: String,
      label: 'Name',
      max: 200
    },
    description: {
      type: String,
      label: 'Description',
      optional: true
    },
    points: {
      type: String,
      label: 'Points',
      optional: true
    },
    componentId: {
      type: String,
      label: 'Component',
      optional: true
    },
    storyId: {
      type: String
    },
    projectId: {
      type: String
    },
    assignId: {
      type: String,
      label: 'Assigned',
      optional: true
    },
    state: {
      type: String
    }
  }
});

// Tasks.callbacks({
//   insert: function(error, result) {
//       if (error) {
//           console.log('Insert Error:', error);
//       } else {
//           alert('Inserted!');
//           console.log('Insert Result:', result);
//       }
//   },
//   update: function(error) {
//       if (error) {
//           console.log('Update Error:', error);
//       } else {
//           alert('Updated!');
//       }
//   },
//   remove: function(error) {
//       if (error) {
//           console.log('Remove Error:', error);
//       }
//   }
// });

Stories.tasksByStoryOrder = function (stories, storyOrder) {
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
};

