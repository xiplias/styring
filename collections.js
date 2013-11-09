Components = new Meteor.Collection2('components', {
  schema: {
    name: {
      type: String,
      label: 'Name',
      max: 200
    }
  }
});

Stories = new Meteor.Collection2('stories', {
  schema: {
    title: {
      type: String,
      label: 'Title',
      max: 200
    },
    description: {
      type: String,
      label: "Overall",
      optional: true
    },
    componentId: {
      type: String,
      optional: true
    }
  }
});

// Stories.callbacks({
//   insert: function(error, result) {
//       if (error) {
//           console.log("Insert Error:", error);
//       } else {
//           alert("Inserted!");
//           console.log("Insert Result:", result);
//       }
//   },
//   update: function(error) {
//       if (error) {
//           console.log("Update Error:", error);
//       } else {
//           alert("Updated!");
//       }
//   },
//   remove: function(error) {
//       if (error) {
//           console.log("Remove Error:", error);
//       }
//   }
// });