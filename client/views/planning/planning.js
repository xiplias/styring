Template.planning.helpers({
  project: function () {
    return  FormHelper.currentProject();
  },
  sprints: function () {
    var project = FormHelper.currentProject(),
        sprints = Sprints.find({projectId: project._id}).fetch(),
        components = Components.find({projectId: project._id}).fetch(),
        data = [];

        // Parse JSON
        components = components.map(function (component) {
          if(component.storyOrder) {
            component.storyOrder = JSON.parse(component.storyOrder);
          }


          return component;
        });

    sprints.forEach(function (sprint) {
      var newSprint = {_id: sprint._id, iterator: sprint.iterator, components: []};

      components.forEach(function (component) {
        var stories = Stories.find({componentId: component._id, sprintId: sprint._id}).fetch();

        if (component.storyOrder) {
          stories = FormHelper.byStoryOrder(stories, component.storyOrder[sprint._id]);
        }

        var newComponent = {_id: component._id, name: component.name, stories: stories};
        newSprint.components.push(newComponent);
      });

      data.push(newSprint);
    });

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
