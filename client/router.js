Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */

  this.route('planning', {
    path: '/',
    template: 'planning'
  });

  this.route('planning', {
    path: '/planning',
    template: 'planning'
  });

  this.route('sprint', {
    path: '/sprint',
    template: 'sprint'
  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */
  this.route('posts', {
    path: '/posts'
  });
});