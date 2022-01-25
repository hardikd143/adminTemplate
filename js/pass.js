$(document).ready(function () {
  $(".passVisibility").click(function () {
    $(this).toggleClass("hidden");
    let passinp = $(this).prev()[0];
    if ($(this).hasClass("hidden")) {
        $(passinp).attr('type', 'text')
        $(this).addClass('fa-eye-slash').removeClass('fa-eye')
    }
    else{
        $(passinp).attr('type', 'password')
        $(this).removeClass('fa-eye-slash').addClass('fa-eye')
    }
  });
});
