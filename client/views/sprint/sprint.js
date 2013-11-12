Template.sprint.helpers({
  users: function () {
    return Meteor.users.find();
  },
  userTasks: function () {
    var components  = Components.find({projectId: FormHelper.currentProject()._id});

    // Get Stories from each component and use the our sort algoritm
    var componentStories = components.map(function (component) {
      var stories = Stories.find({componentId: component._id}).fetch(),
          sortedStories = StoriesLib.orderByOrderList(stories, component.storyOrder);
      return sortedStories;
    });

    var zippedStories = StoriesLib.mergeByZipper(componentStories);

    var sortedTasks = _.chain(zippedStories).map(function (story) {
      var tasks = Tasks.find({storyId: story._id, assignId: this._id}).fetch();
      console.log(tasks);
      return tasks;
    }).flatten().value();

    return sortedTasks;
  }
});

Template.sprint.events({
  'click .task': function () {
    Session.set('selectedTask', this);
    $('#taskForm').modal();
  }
});
