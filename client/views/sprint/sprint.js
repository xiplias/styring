Template.sprint.helpers({
  users: function () {
    return Meteor.users.find();
  },
  userTasks: function () {
    return Tasks.find({assignId: this._id, projectId: FormHelper.currentProject()._id});
  }
});

Template.sprint.events({
  'click .task': function () {
    Session.set('selectedTask', this);
     $('#taskForm').modal();
  }
});