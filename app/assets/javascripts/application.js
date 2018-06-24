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

// $(document).ready(function(){
//   $('#new-category-form').on('ajax:complete', function(event, data, status){
//     $('#name').val('');
//     $('#categories').html(data.responseText);
//   })
// })

// $(document).ready(function(){
//   $('form[name="edit-form"]').on('ajax:success', function(event, data, status){
//     $(this).closest('tr').html(data.responseText);
//   });
// })

// $(document).ready(function(){
//   $("[name='edits']").on('ajax:complete', function(event, data, status) {
//     $(this).closest('tr').html(data.responseText)
//   });
// })



  
$(document).on("turbolinks:load", function() {
  $('#new-category-form').on('ajax:complete', function(event, data, status){
    $('#name').val('');
    $('#categories').html(data.responseText);
  });
  
  $("[name='edits']").on('ajax:complete', function(event, data, status) {
    $(this).closest('tr').html(data.responseText)
  });

  $('form[name="editform"]').on('ajax:complete', function(event, data, status){
    $(this).closest('tr').html(data.responseText);
  });
})

// document.addEventListener("turbolinks:load", function() {
//   $("[name='edits']").on('ajax:complete', function(event, data, status) {
//     $(this).closest('tr').html(data.responseText)
//   })
// })

// $(document).on("turbolinks:load", function() {
//   $('form[name="editform"]').on('ajax:complete', function(event, data, status){
//     $(this).closest('tr').html(data.responseText);
//   })
// })


// $('form[name="edit-form"]').on('ajax:complete', function(event, data, status){
//   // $(this).closest('tr').html(data.responseText);
//   $(this).closest('tr').html("Hello World!");
// })





// $(document).ready(function(){

//     jQuery('#target').append('target edit 1<br>');

//     jQuery('#target').append('target edit 2<br>');

//     jQuery('#target').append('target edit 3<br>');

// });