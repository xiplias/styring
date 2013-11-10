Template.story.helpers({
  points: function () {
    var tasks = Tasks.find({storyId: this._id}, {points: 1}).fetch();
    var points = 0;
    if (tasks.length > 0) {
      points =  _.reduce(_.map(tasks, function(doc) {
        return parseInt(doc.points, 10);
      }), function (memo, num) {
        return memo + num;
      });
    }
    return points;
  },
  isFinished: function () {
    if (this._id) {
      var tasks = Tasks.find({storyId: this._id}).fetch();
      var finished = tasks.filter(function (task) {
        if (task.state === "finished") {
          return task;
        }
      });

      return tasks.length > 0 ? tasks.length === finished.length : false;
    }
  }
});

Template.story.events({
  'click .story': function () {
    Session.set('selectedStory', this);
    Session.set('selectedTask', undefined);
    $('#storyForm').modal();
  }
});
