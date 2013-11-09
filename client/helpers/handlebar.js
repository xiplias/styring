Handlebars.registerHelper('modal', function(context, options) {
  var content =  options.fn(this);
  return '<div class="modal fade" id="' + context + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content">' + content + '</div></div></div>';
});

Handlebars.registerHelper('modalContent', function(options) {
  var content =  options.fn(this);

  return '<div class="modal-body">' + content + '</div>';
});

Handlebars.registerHelper('modalHeader', function(title) {
  return '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + title + '</h4></div>';
});

Handlebars.registerHelper('modalFooter', function(type, text) {
  var buttonType = type === "insert" || type === "update" ? "submit" : "button";
  return '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button><button type="' + buttonType + '" class="btn btn-primary ' + type + '">' + text + '</button></div>';
});

Handlebars.registerHelper('multiply', function (number, multiplier, min) {
  if (!min || typeof min === "object") min = 0;
  return number * multiplier > min ? number * multiplier : min;
});