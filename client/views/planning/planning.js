Template.planning.helpers({
  project: function () {
    return  FormHelper.currentProject();
  },
  sprints: function () {
    var project = FormHelper.currentProject(),
        sprints = Sprints.find({projectId: project._id}).fetch(),
        components = Components.find({projectId: project._id}).fetch(),
        data = [];

    sprints.forEach(function (sprint) {
      var newSprint = {iterator: sprint.iterator, components: []};

      components.forEach(function (component) {
        var newComponent = {name: component.name, stories: Stories.find({componentId: component._id, sprintId: sprint._id}).fetch()};
        newSprint.components.push(newComponent);
      });

      data.push(newSprint);
    });

    console.log(data);
    return data;
  }
});

var createEmptySprint = function () {
  var project = FormHelper.currentProject(),
      latestSprint = Sprints.find({projectId: project._id}, {
        sort: {
          _id: 1
        },
        limit: 1
      }).fetch()[0];

  console.log(latestSprint);

  Sprints.insert({
    projectId: project._id,
    iterator: latestSprint.iterator+1,
    velocity: project.velocity
  });
};


Template.planning.events({
  'click #storyFormButton': function () {
    Session.set('selectedStory', undefined);
  },
  'click #newSprint': function () {
    createEmptySprint();
  }
});
