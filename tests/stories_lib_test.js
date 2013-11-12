var assert = require('assert');

suite('StoriesLib', function() {
  test('storiesByOrderList with order', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'},
        {_id: 'id3'},
        {_id: 'id4'}
      ];
      var storyOrder = ['id4', 'id2'];

      emit('tasks', StoriesLib.storiesByOrderList(stories, storyOrder));
    }).once('tasks', function (tasks) {
       var finalStoriesInOrder = [
        {_id: 'id4'},
        {_id: 'id2'},
        {_id: 'id1'},
        {_id: 'id3'}
      ];
      assert.deepEqual(tasks, finalStoriesInOrder);
      done();
    });
  });

  test('storiesByOrderList with NO order', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder;

      emit('tasks', StoriesLib.storiesByOrderList(stories, storyOrder));
    }).once('tasks', function (tasks) {
       var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(tasks, finalStoriesInOrder);
      done();
    });
  });

  test('storiesByOrderList with empty array', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder = [];

      emit('tasks', StoriesLib.storiesByOrderList(stories, storyOrder));
    }).once('tasks', function (tasks) {
       var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(tasks, finalStoriesInOrder);
      done();
    });
  });

  test('storiesByOrderList sort of story that do not exist', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder = ['id3'];

      emit('tasks', StoriesLib.storiesByOrderList(stories, storyOrder));
    }).once('tasks', function (tasks) {
      var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(tasks, finalStoriesInOrder);
      done();
    });
  });
});
