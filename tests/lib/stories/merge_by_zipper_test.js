var assert = require('assert');

suite('StoriesLib', function() {
  test('mergeByZipper', function(done, server, client) {
    client.eval(function () {
      var storyArrays = [
        ['obj1', 'obj2'],
        ['obj3', 'obj4', 'obj5', 'obj6'],
        []
      ];

      emit('tasks', StoriesLib.mergeByZipper(storyArrays));
    }).once('tasks', function (tasks) {
      assert.deepEqual(tasks, ['obj1', 'obj3', 'obj2', 'obj4', 'obj5', 'obj6']);
      done();
    });
  });
});