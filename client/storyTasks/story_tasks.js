Template.storyTasks.helpers({
  tasksCollection: function () {
    return Tasks;
  },
  tasks: function () {
    return Tasks.find({storyId: FormHelper.currentStoryId()});
  },
  pointsOptions: function () {
    return [{
      label: "0",
      value: "0"
    }, {
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }];
  },
  selectedTask: function () {
    return Session.get('selectedTask');
  },
  componentOptions: function () {
    return FormHelper.componentOptions(true);
  },
  componentName: function () {
    var component = Components.findOne({_id: this.componentId}, {name: 1});

    if (component) {
      return component.name;
    }
  },
  formState: function () {
    return Session.get('selectedTask') ? 'update' : 'insert';
  },
  storyId: function () {
    return FormHelper.currentStoryId();
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
