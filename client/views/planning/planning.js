Template.planning.helpers({
  components: function () {
    return Components.find({projectId: FormHelper.currentProject()._id});
  },
  project: function () {
    return FormHelper.currentProject();
  },
  // sprints: function () {
  //   var project = FormHelper.currentProject(),
  //       sprints = Sprints.find({projectId: project._id}).fetch();

  //   if (sprints.length === 0) {
  //     Sprints.insert({
  //       projectId: project._id,
  //       velocity: project.velocity
  //     }, function () {
  //       sprints = Sprints.find({projectId: project._id}).fetch();
  //     });
  //   }

  //   return sprints;
  // },
  stories: function () {
    console.log(this, _.toArray(this));
    return _.toArray(this);
  },
  sprintComponentStories: function () {
    return this[1];
  },
  componentName: function () {
    //return Components.findOne({_id: this._id}).name;
  },
  test: function () {
    console.log(this);
  },
  sprints: function () {
    var project = FormHelper.currentProject(),
        components       = Components.find({projectId: project._id}).fetch(),
        componentStories = components.map(function (component) {
          return Stories.find({componentId: component._id}).fetch();
        }),
        zippedStories    = StoriesLib.mergeByZipper(componentStories),
        sprints = [],
        sprintCount = 0,
        sprintVelosity = 0,
        sprintComponents = {},
        storyCount = zippedStories.length;


    zippedStories.forEach(function (story, index) {
      // Put stories on components
      if (!sprintComponents[story.componentId]) {
        sprintComponents[story.componentId] = [];
      }
      var componentVelocity = _.reduce(Tasks.find({storyId: story._id}).fetch(), function (memo, num) {
        return memo + parseInt(num.points, 10);
      }, 0);

      sprintVelosity = sprintVelosity + componentVelocity;
      sprintComponents[story.componentId].push(story);


      // If velosity is met or last story in array
      // Put the component into the sprint and clear components array for next sprint
      if (sprintVelosity >= project.velocity || storyCount-1 === index) {
        var sprint = {velocity: sprintVelosity, sprintComponents: []};
        components.forEach(function (component) {
          sprint.sprintComponents.push({_id: component._id, name: component.name, velocity: componentVelocity, componentStories: sprintComponents[component._id]});
        });

        sprints.push(sprint);

        sprintCount++;
        sprintVelosity = 0;

        sprintComponents = {};
      }
    });

    console.log(sprints);
    return sprints;
  },
  sprintLines: function () {
    var velocity = FormHelper.currentProject().velocity;
    var topMargin = 45;
    var multiplier = 20;
    return [
      {
        velocity: velocity,
        iterator: 1,
        height: topMargin + multiplier * velocity * 1
      },
      {
        velocity: velocity,
        iterator: 2,
        height: topMargin + multiplier * velocity * 2
      }
    ];
  }
});

Template.planning.events({
  'click #storyFormButton': function () {
    Session.set('selectedStory', undefined);
  }
});
