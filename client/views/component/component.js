Template.component.helpers({
  stories: function () {
    var storyOrder     = Components.findOne({_id: this._id}).storyOrder,
        stories        = Stories.find({componentId: this._id, projectId: Session.get('currentProject')._id}).fetch();

    return StoriesLib.orderByOrderList(stories, storyOrder);
  },
  componentName: function () {
    return this.name || 'Icebox';
  }
});

Template.component.rendered = function () {
  var component = this.data;
  console.log(this.firstNode);
  var list = $(this.firstNode).find('.component-stories');
  var sortable = list.sortable({
    connectWith: ".component_" + list.data('id'),
    stop: function () {
      console.log($('.component-stories').sortable('toArray'));
    }
  }).disableSelection();
};

function getComponentStoriesFromDOM (list) {
  return $(list).sortable('toArray');
}

// function get_random_color () {
//     var letters = '0123456789ABCDEF'.split('');
//     var color = '#';
//     for (var i = 0; i < 6; i++ ) {
//         color += letters[Math.round(Math.random() * 15)];
//     }
//     return color;
// }

// function rainbow(numOfSteps, step) {
//   // This function generates vibrant, 'evenly spaced' colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
//   // Adam Cole, 2011-Sept-14
//   // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
//   var r, g, b;
//   var h = step / numOfSteps;
//   var i = ~~(h * 6);
//   var f = h * 6 - i;
//   var q = 1 - f;
//   switch(i % 6){
//       case 0: r = 1, g = f, b = 0; break;
//       case 1: r = q, g = 1, b = 0; break;
//       case 2: r = 0, g = 1, b = f; break;
//       case 3: r = 0, g = q, b = 1; break;
//       case 4: r = f, g = 0, b = 1; break;
//       case 5: r = 1, g = 0, b = q; break;
//   }
//   var c = '#' + ('00' + (~ ~(r * 255)).toString(16)).slice(-2) + ('00' + (~ ~(g * 255)).toString(16)).slice(-2) + ('00' + (~ ~(b * 255)).toString(16)).slice(-2);
//   return (c);
// }
