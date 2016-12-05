$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $(".navbar-brand").toggleClass("logotoggled");
        $('#menu ul').hide();
    });
 
     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
$(document).ready(function() {
  initMenu();
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
  // $('#contentareaContainer').css('min-height',(winhgt)+'px')
   $('#wrapper').css('min-height',(dochgt)+'px')
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
   $(".deviceinnercontent").niceScroll({
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
   })
});

