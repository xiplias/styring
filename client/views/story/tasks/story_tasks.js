Template.storyTasks.helpers({
  tasks: function () {
    return Tasks.find({storyId: FormHelper.currentStoryId(), projectId: FormHelper.currentProject()._id });
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
