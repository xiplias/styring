Template.component.helpers({
  stories: function () {
    return Stories.find({componentId: this._id});
  },
  componentName: function () {
    return this.name || "Icebox";
  }
});

Template.component.events({
  'click .component-story': function () {
    Session.set('selectedStory', this);
    $('#storyForm').modal();
  }
});