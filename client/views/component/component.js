Template.component.helpers({
  componentName: function () {
    // console.log(this)
    // return Components.findOne({_id: this.id}).name;
  }
});

Template.component.rendered = function () {
  var list = $(this.lastNode).find('.component-stories');
  list.sortable({
    connectWith: '.component_' + list.data('component-id'),
    receive: function (event, ui) {
      var storyId  = $(ui.item).attr('id'),
          sprintId = $(ui.item).closest('.planning').data('sprint-id');
      Stories.update({_id: storyId}, {$set: { sprintId: sprintId}});
    },
    stop: function (event, ui) {
      var componentId = $(ui.item).parent().data('component-id');
      updateComponentSort(componentId);
    }
  }).disableSelection();
};

var updateComponentSort = function (componentId) {
  var componentParts = $('.component_' + componentId),
      sprints = {};

  $(componentParts).map(function (i, component) {
    var sprint = $(component).closest('.planning').data('sprint-id');
    sprints[sprint] = $(component).sortable('toArray');
  });

  Components.update({_id: componentId}, {$set: { storyOrder: JSON.stringify(sprints) }});
};
