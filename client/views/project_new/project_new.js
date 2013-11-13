Template.projectNew.helpers({
  projectsCollection: function () {
    return Projects;
  },
  selectedProject: function () {
    return Session.get('selectedProject');
  },
  formState: function () {
    return this ? 'update' : 'insert';
  }
});
