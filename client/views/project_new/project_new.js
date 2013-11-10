Template.projectNew.helpers({
  projectsCollection: function () {
    return Projects;
  },
  selectedProject: function () {
    return Session.get('selectedProject');
  },
  formState: function () {
    return Session.get('selectedProject') ? 'update' : 'insert';
  }
});