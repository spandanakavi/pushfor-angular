$(document).ready(function() {
  $('.selectpicker').selectpicker({
    style: 'form-control',
    size: 4
  });
  $('#rightpanel-toggle').click(function(){
    if($(this).parent('.rightpanel').hasClass('rightpanel-toggled')){
      $(this).parent('.rightpanel').removeClass('rightpanel-toggled');
    }else{
      $(this).parent('.rightpanel').addClass('rightpanel-toggled');
    }
  })
  var winhgt=$(window).height();
  var dochgt=$('.rightpanel').height();
  $('#sidebar-wrapper').css('min-height',winhgt+'px')
  // $('#contentareaContainer').css('min-height',(winhgt)+'px')
   $('#wrapper').css('min-height',(dochgt)+'px');
   $('body').on('click','.floatingdrop-action',function(){
    if($(this).next('.floatingdrop-menu').is(':visible')){
      $(this).next('.floatingdrop-menu').fadeOut();
      $('.floatingdropoverlay').fadeOut();
    }else{
      $(this).next('.floatingdrop-menu').fadeIn();
      $('.floatingdropoverlay').fadeIn();
    }
   });
   $('.deviceinnercontent').hover(function(){
    $(".deviceinnercontent").getNiceScroll().resize();
   })
   $('.customscroll').hover(function(){
    $(".customscroll").getNiceScroll().resize();
   })
   $(".deviceinnercontent").niceScroll({
    cursorcolor: "#585757",
    cursorborder: 0,
    cursorwidth: '3px',
    railpadding: { top: 0, right: 1, left: 0, bottom: 0 }
   });
   $(".customscroll").niceScroll({
    cursorcolor: "#585757",
    cursorborder: 0,
    cursorwidth: '3px',
    railpadding: { top: 0, right: 1, left: 0, bottom: 0 }
   });
   $('body').on('click','.devicewidget', function(){
    $('.devicewidget').removeClass('devicewidget-selected');
    $(this).addClass('devicewidget-selected');
   });
   $('body').on('click','.checkboxchild-caret', function(){
    $(this).parents('.checkbox-haschild').find('.checkbox-child').slideToggle();
   });
   $('body').on('click','.checkbox-haschild > .checkbox-wrap [type="checkbox"]',function(){
    if($(this).is(':checked')){
      $(this).parents('.checkbox-haschild').find('.checkbox-child [type="checkbox"]').each(function(){
          $(this)[0].checked = true; 
      });
    }else{
      $(this).parents('.checkbox-haschild').find('.checkbox-child [type="checkbox"]').each(function(){
          $(this)[0].checked = false; 
      });
    }
   });
});