
var flag_prod = true;

$(document).on("turbolinks:load", function() {
  $('#new-form').on('ajax:complete', function(event, data, status){
    $("#content").html(data.responseText);
    clearForm($('#new-form'));
    _init_prod();
  });
  
  $("[name='deleteproduct']").on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      _init_prod();
  });
  
  $("[name='editproduct']").on('click', function(e) {
    show_edit_product(e, this);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      _init_prod();
    });
    
    $("[name='productcancel']").on('click', function(e) {
      hide_edit_product(e, this);
    });
  });
})

function _init_prod(){
  $('#new-form').on('ajax:complete', function(event, data, status){
    $("#content").html(data.responseText);
    clearForm($('#new-form'));
    if (flag_prod) {
      _init_prod();
      flag_prod = false;
    }
    flag_prod = true;
  });
  
  $("[name='deleteproduct']").on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      if (flag_prod) {
        _init_prod();
       flag_prod = false;
      }
      flag_prod = true;
  });
  $("[name='editproduct']").on('click', function(e) {
    show_edit_product(e, this);
    $('form[name="editform"]').on('ajax:complete', function(event, data, status){
      $("#content").html(data.responseText);
      if (flag_prod) {
        _init_prod();
       flag_prod = false;
      }
      flag_prod = true;
    });
  });
  $("[name='productcancel']").on('click', function(e) {
    hide_edit_product(e, this);
  });
}