var assert = require('assert');

suite('StoriesLib', function() {
  test('orderByOrderList with order', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'},
        {_id: 'id3'},
        {_id: 'id4'}
      ];
      var storyOrder = ['id4', 'id2'];

      emit('stories', StoriesLib.orderByOrderList(stories, storyOrder));
    }).once('stories', function (stories) {
       var finalStoriesInOrder = [
        {_id: 'id4'},
        {_id: 'id2'},
        {_id: 'id1'},
        {_id: 'id3'}
      ];
      assert.deepEqual(stories, finalStoriesInOrder);
      done();
    });
  });

  test('orderByOrderList with NO order', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder;

      emit('stories', StoriesLib.orderByOrderList(stories, storyOrder));
    }).once('stories', function (stories) {
       var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(stories, finalStoriesInOrder);
      done();
    });
  });

  test('orderByOrderList with empty array', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder = [];

      emit('stories', StoriesLib.orderByOrderList(stories, storyOrder));
    }).once('stories', function (stories) {
       var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(stories, finalStoriesInOrder);
      done();
    });
  });

  test('orderByOrderList sort of story that do not exist', function(done, server, client) {
    client.eval(function () {
      var stories = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      var storyOrder = ['id3'];

      emit('stories', StoriesLib.orderByOrderList(stories, storyOrder));
    }).once('stories', function (stories) {
      var finalStoriesInOrder = [
        {_id: 'id1'},
        {_id: 'id2'}
      ];
      assert.deepEqual(stories, finalStoriesInOrder);
      done();
    });
  });
});
