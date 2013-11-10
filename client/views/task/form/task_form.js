Template.taskForm.helpers({
  tasksCollection: function () {
    return Tasks;
  },
  selectedTask: function () {
    return Session.get('selectedTask');
  },
  formState: function () {
    return Session.get('selectedTask') ? 'update' : 'insert';
  },
  pointsOptions: function () {
    return [
      { label: "0", value: "0"},
      { label: "1", value: "1"},
      { label: "2", value: "2"},
      { label: "3", value: "3"},
      { label: "5", value: "5"},
      { label: "7", value: "7"}
    ];
  },
  stateOptions: function () {
    return [
      { label: "Unstarted", value: "unstarted" },
      { label: "Started", value: "started" },
      { label: "Finished", value: "finished" }
    ];
  },
  assignOptions: function () {
    var users = Meteor.users.find({}).fetch().map(function (user) {
      return { label: user.profile.name, value: user._id }
    });

    return users;
  },
  componentOptions: function () {
    return FormHelper.componentOptions(true);
  },

  storyId: function () {
    return FormHelper.currentStoryId();
  },
  projectId: function () {
    return FormHelper.currentProject()._id;
  }
});
