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

function clearForm(form) {
    form.find(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    form.find(':checkbox, :radio').prop('checked', false);
}
function stop_default(e){
  e.preventDefault();
  e.stopPropagation();
}

var flag = true;

$(document).on("turbolinks:load", function() {
  $('#new-category-form').on('ajax:complete', function(event, data, status){
    $('#name').val('');
    $('#categories-body').append("<tr>"+data.responseText+"</tr>");
    _init();
  });

  $("[name='edits']").on('click', function(e) {
    show_edit_form(e, this);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $(this).closest('tr').html(data.responseText);
      _init();
    });
    
    $("[name='categorycancel']").on('click', function(e) {
      hide_edit_form(e, this);
    });
  });
})

function _init(){
  $("[name='edits']").on('click', function(e) {
    show_edit_form(e, this);
    $("[name='categorycancel']").on('click', function(e) {
      hide_edit_form(e, this);
    });
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

function hide_edit_form(e, obj){
  stop_default(e);
  $(obj).closest("td").addClass("hidden");
  $(obj).closest("td").siblings("[name='deletecategory']").removeClass("hidden");
  $(obj).closest("td").siblings("[name='editcategory']").removeClass("hidden");
}

function show_edit_form(e, obj){
  stop_default(e);
  $(obj).parent().siblings("[name='displayedit']").removeClass("hidden");
  $(obj).parent().addClass("hidden");
  $(obj).parent().siblings("[name='deletecategory']").addClass("hidden");
}

var flag_prod = true;

$(document).on("turbolinks:load", function() {
  // $('#new-form-wrap').on('ajax:complete', 'form', function(event, data, status){
  $('#new-form').on('ajax:complete', function(event, data, status){
    $("#content").html(data.responseText);
    clearForm($('#new-form'));
    // _init_prod();
  });
  
  $("[name='deleteproduct']").on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      // _init_prod();
  });
  
  $("[name='editproduct']").on('click', function(e) {
    show_edit_product(e, this);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      // _init_prod();
    });
    
    $("[name='productcancel']").on('click', function(e) {
      hide_edit_product(e, this);
    });
  });
})

// function _init_prod(){
//   $('#new-form').on('ajax:complete', function(event, data, status){
//     $("#content").html(data.responseText);
//     clearForm($('#new-form'));
//     if (flag_prod) {
//       _init_prod();
//       flag_prod = false;
//     }
//     flag_prod = true;
//   });
  
//   $("[name='deleteproduct']").on('ajax:complete', function(event, data, status){
//       $("#content").html(data.responseText);
//       if (flag_prod) {
//         _init_prod();
//       flag_prod = false;
//       }
//       flag_prod = true;
//   });
//   $("[name='editproduct']").on('click', function(e) {
//     show_edit_product(e, this);
//     $('form[name="editform"]').on('ajax:complete', function(event, data, status){
//       $("#content").html(data.responseText);
//       if (flag_prod) {
//         _init_prod();
//       flag_prod = false;
//       }
//       flag_prod = true;
//     });
//   });
//   $("[name='productcancel']").on('click', function(e) {
//     hide_edit_product(e, this);
//   });
// }

function show_edit_product(e, obj){
  stop_default(e);
  $(obj).closest("td").addClass("hidden");
  $(obj).closest("td").next().removeClass("hidden");
}
function hide_edit_product(e, obj){
  stop_default(e);
  $(obj).closest("td").addClass("hidden");
  $(obj).closest("td").prev().removeClass("hidden");
}