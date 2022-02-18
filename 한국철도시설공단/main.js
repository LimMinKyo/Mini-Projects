$(function () {
  var sch_ck_num = 0;
  $('.search a').click(function () {
    $('.search form').slideToggle('fast');
    if (sch_ck_num == 0) {
      $(this).css('background', 'url(images/btn_close.png) no-repeat center');
      sch_ck_num = 1;
    } else {
      $(this).css('background', 'url(images/header_search.gif) no-repeat');
      sch_ck_num = 0;
    }
  });

  var fl_ck_num = 0;
  $('.footer_link h2').click(function () {
    $('.search form').slideToggle('fast');
    if (fl_ck_num == 0) {
      $('.footer_link ul').animate({ top: -175, height: 180 });
      fl_ck_num = 1;
    } else {
      $('.footer_link ul').animate({ top: 0, height: 0 });
      fl_ck_num = 0;
    }
  });
});
