Template.storyTasks.helpers({
  tasksCollection: function () {
    return Tasks;
  },
  tasks: function () {
    return Tasks.find({storyId: FormHelper.currentStoryId(), projectId: FormHelper.currentProject()._id });
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
  assignOptions: function () {
    var users = Meteor.users.find({}).fetch().map(function (user) {
      return { label: user.profile.name, value: user._id }
    });
    console.log(users);
    return users;
  },
  selectedTask: function () {
    return Session.get('selectedTask');
  },
  componentOptions: function () {
    return FormHelper.componentOptions(true);
  },
  formState: function () {
    return Session.get('selectedTask') ? 'update' : 'insert';
  },
  storyId: function () {
    return FormHelper.currentStoryId();
  },
  projectId: function () {
    return FormHelper.currentProject()._id
  }
});

Template.storyTasks.events({
  'click': function () {
    if (this && this._id) {
      Session.set("selectedTask", this);
    } else {
      Session.set("selectedTask", undefined);
    }
  },
  'click #jsNewStoryTask': function () {
    Session.set("selectedTask", undefined);
    return false;
  }
});
