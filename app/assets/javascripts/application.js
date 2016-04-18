// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

// CoffeeScript
// $(document).ready ->
//   faye = new (Faye.Client)('http://localhost:8080/faye')
//
//   faye.subscribe '/about', (data) ->
//     eval data
//
//   $('.subscribe').each ->
//     faye.subscribe '/' + $(this).data('channel'), (data) ->
//       eval data
//     return

$(document).ready(function() {
  var faye_url = $("body").attr('data-faye');
  if (faye_url) {
    var faye = new Faye.Client(faye_url);
    $('.subscribe').each( function(){
     faye.subscribe('/' + $(this).data('channel'), function(data) { return eval(data)});
    })
  }
});
