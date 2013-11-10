Template.header.helpers({
  projects: function () {
    return Projects.find({});
  },
  projectId: function () {
    var project = Session.get('currentProject');
    return project ? project._id : undefined;
  },
  projectDropdownName: function () {
    var project = Session.get('currentProject');
    return project ? project.name : "Projects";
  }
});
