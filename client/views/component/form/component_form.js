Template.componentForm.helpers({
  componentsCollection: function () {
    return Components;
  },
  projectId: function () {
    return FormHelper.currentProject()._id
  }
});
