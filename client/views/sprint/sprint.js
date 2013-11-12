Template.sprint.helpers({
  users: function () {
    return Meteor.users.find();
  },
  userTasks: function () {
    var components  = Components.find({projectId: FormHelper.currentProject()._id}),
        tasks       = Tasks.find({assignId: this._id, projectId: FormHelper.currentProject()._id}),
        
    componentStories = components.map(function (component) {
      return Stories.find({componentId: component._id}).fetch();
    })[0];

    console.log(componentStories);

    var sortedStories = _.flatten(_.zip(componentStories).filter(function (e) {
      return e;
    }));

    var sortedTasks = sortedStories.map(function (story) {
      return Tasks.find({storyId: story._id}).fetch();
    });

    return _.flatten(sortedTasks);
  }
});

Template.sprint.events({
  'click .task': function () {
    Session.set('selectedTask', this);
    $('#taskForm').modal();
  }
});
