$(function(){

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var cutH = $(window).height() / 2;
    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
  
    if (scrollTop >= ($('.graphic2').offset().top - cutH)) {
      $('.graphic2').find('span.runNum').each(function (index, element) {
        var runNumber = $(this).attr('data-number');
        $(this).animateNumber({
          number: runNumber,
          numberStep: comma_separator_number_step
        }, 1500);
      });
    }

    if (scrollTop >= ($('.graphic3').offset().top - cutH)) {
      $('.graphic3').find('span.runNum').each(function (index, element) {
        var runNumber = $(this).attr('data-number');
        $(this).animateNumber({
          number: runNumber,
          numberStep: comma_separator_number_step
        }, 1500);
      });
    }

    if(scrollTop >= ($('.graphic4').offset().top - cutH)){
      $('.graphic4').find('b.runNum').each(function(index, element) {
        var runNumber = $(this).attr('data-number');
        $(this).animateNumber({
          number: runNumber,
          numberStep: comma_separator_number_step
          }, 1500);
      });	
      
      $('.graphic4').find('.bar').each(function(index, element) {
        var w = $(this).attr('data-bar');
        $(this).animate({
          'width': w +'%'
        },1500,'easeOutSine');
      });
    }

    if(scrollTop >= ($('.graphic7').offset().top - cutH)){
      $('.graphic7').find('b.runNum').each(function(index, element) {
        var runNumber = $(this).attr('data-number');
        $(this).animateNumber({
          number: runNumber,
          numberStep: comma_separator_number_step
          }, 1500);
      });		
      
      $('.graphic7').find('.bar').each(function(index, element) {
        var w = $(this).attr('data-bar');
        $(this).animate({
          'width': w +'%'
        },1500,'easeOutSine');
      });
    }

    if(scrollTop >= ($('.graphic8').offset().top - cutH)){
      $('.graphic8').find('b.runNum').each(function(index, element) {
        var runNumber = $(this).attr('data-number');
        $(this).animateNumber({
          number: runNumber,
          numberStep: comma_separator_number_step
          }, 1500);
      });	
      
      $('.graphic8').find('.bar').each(function(index, element) {
        var w = $(this).attr('data-bar');
        $(this).animate({
          'width': w +'%'
        },1500,'easeOutSine');
      });
    }
  });

  $('.wrapH100').waypoint(function() {
    $('.wrapH100').addClass('animated-slow fadeIn')
    $('.wrapH100 h2').addClass('delay-04s animated-slow fadeInUp');
    $('.wrapH100 p').addClass('delay-05s animated-slow fadeInUp');
    $('.wrap-scrolldownhoney').addClass('delay-10s animated-slow fadeIn');
    
}, {
    offset: '60%'
});

})