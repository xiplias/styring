Template.projectNew.helpers({
  projectsCollection: function () {
    return Projects;
  },
  selectedProject: function () {
    return Session.get('selectedProject');
  },
  formState: function () {
    return this._id ? 'update' : 'insert';
  },
  sprintNumber: function () {
    return this.sprintNumber || 1;
  }
});
