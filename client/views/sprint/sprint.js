Template.sprint.helpers({
  users: function () {
    return Meteor.users.find().fetch();
  },
  userTasks: function () {
    var components  = Components.find({projectId: FormHelper.currentProject()._id}).fetch();
    var user = this;

    // Get Stories from each component and use the our sort algoritm
    var componentStories = components.map(function (component) {
      if (component.storyOrder) {
        return _.chain(JSON.parse(component.storyOrder)).toArray().flatten().value();
      } else {
        return [];
      }
    });

    var zippedStories = StoriesLib.mergeByZipper(componentStories);

    var sortedTasks = _.chain(zippedStories).map(function (story) {
      console.log({storyId: story, assignId: user._id})
      var tasks = Tasks.find({storyId: story, assignId: user._id}).fetch();
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
