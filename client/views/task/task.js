Template.task.helpers({
  componentName: function () {
    return FormHelper.component(this.componentId).name;
  },
  storyName: function () {
    return Stories.findOne({_id: this.storyId}).title;
  }
});

Template.task.events({
  'click': function () {
    
  }
});