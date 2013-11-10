Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('planning', {
    path: '/projects/:_id/planning',
    template: 'planning',
    load: function () {
      Session.set('currentProject', Projects.findOne({_id: this.params._id}));
    },
  });

  this.route('sprint', {
    path: '/projects/:_id/sprint',
    template: 'sprint',
    load: function () {
      Session.set('currentProject', Projects.findOne({_id: this.params._id}));
    },
  });

  this.route('new_project', {
    path: '/projects/new',
    template: 'projectNew'
  });
});
