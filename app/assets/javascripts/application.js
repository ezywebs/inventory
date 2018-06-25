// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

var flag = true;

$(document).on("turbolinks:load", function() {
  $('#new-category-form').on('ajax:complete', function(event, data, status){
    $('#name').val('');
    $('#categories-body').append("<tr>"+data.responseText+"</tr>");
    _init();
  });

  $("[name='edits']").on('ajax:complete', function(event, data, status) {
    $(this).closest('tr').html(data.responseText);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $(this).closest('tr').html(data.responseText);
       _init();
    });
  });
})

function _init(){
  $("[name='edits']").on('ajax:complete', function(event, data, status) {
    $(this).closest('tr').html(data.responseText);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $(this).closest('tr').html(data.responseText);
      if (flag) {
        _init();
        flag = false;
      }
    });
    flag = true;
  });
}

