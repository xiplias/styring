var assert = require('assert');

suite('Sprint Lib', function() {
  test('tasksByStoryOrder', function(done, server, client) {
    var stories = [
      {_id: 'id1'},
      {_id: 'id2'},
      {_id: 'id3'},
      {_id: 'id4'}
    ];
    var storyOrder = ['id4', 'id2'];
    var finalStoriesInOrder = [
      {_id: 'id4'},
      {_id: 'id2'},
      {_id: 'id1'},
      {_id: 'id3'}
    ];

    var tasks = Sprint.tasksByStoryOrder(stories, storyOrder);

    assert.equal(tasks, finalStoriesInOrder);
  });
});