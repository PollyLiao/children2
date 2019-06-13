$(function(){

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var cutH = $(window).height() / 2;
    var cutH3 = $(window).height() / 10;
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

    if(scrollTop >= ($('.graphic4').offset().top - cutH3)){
      // $('.graphic4').find('b.runNum').each(function(index, element) {
      //   var runNumber = $(this).attr('data-number');
      //   $(this).animateNumber({
      //     number: runNumber,
      //     numberStep: comma_separator_number_step
      //     }, 1500);
      // });	
      
      // $('.graphic4').find('.bar').each(function(index, element) {
      //   var w = $(this).attr('data-bar');
      //   $(this).animate({
      //     'width': w +'%'
      //   },1500,'easeOutSine');
      // });

      var iLength = $('.graphic4').find('i')
      for(var i = 0; i<iLength.length; i++){
        (function(i){
          setTimeout(function(){
            $(iLength[i]).addClass('on')
          },i*200)
        })(i)

      }
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

  var dataText={
    one :'<h3>社區經濟不利 導致文化不利</h3>表面上的形式關心極少出現之外，從孩子們參與學習活動的被動、消極、無所謂等表徵，更可以感受家長在形式以外的實質關心與要求也幾乎不存在，更別提學習落後時的協助補救作為，以及學科學習以外的多元學習支持。',
    two:'<h3>家庭支持力道極低</h3>當地沒有任何可以提供文化資源的場所，只有老人集會的活動中心翻飛著幾張報紙，以及大樹下三三兩兩散落的各式佛書道義。學生的文化刺激來源就是電視台，那些娛樂新聞裡，影視明星的過時動態及軼聞趣事，就是他們認識這個封閉偏鄉社區以外世界的唯一來源。',
    three:'<h3>教師專業及熱情不足</h3>民國57年開始延長國民義務教育為九年，國中教師需求增加，但合格教師不足，且不願意到偏鄉任教，因此許多偏鄉國中只能將就應急，聘用原本不具備教師資格的大專畢業生，導致偏鄉學校教師來源良莠不齊、因陋就簡。'
  }

  $('.pointBlock').on('click','.mask',function(){

    var dText = $(this).attr('data-text')
    //console.log(dText)
    $('.lightBox').fadeIn(500)
    if(dText == 'one'){
      $('.lightText').html(dataText.one)
      $('.innBox').addClass('one')
    }else if(dText == 'two'){
      $('.lightText').html(dataText.two)
      $('.innBox').addClass('two')
    }else if(dText == 'three'){
      $('.lightText').html(dataText.three)
      $('.innBox').addClass('three')
    }
  })

  $('.clearX').on('click',function(){
    $('.innBox').removeClass('one two three')
    $('.lightBox').fadeOut(500)
  })

  $('.wrapH100').waypoint(function() {
    $('.wrapH100').addClass('animated-slow fadeIn')
    $('.wrapH100 h2').addClass('delay-04s animated-slow fadeInUp');
    $('.wrapH100 p').addClass('delay-06s animated-slow fadeInUp');
    $('.wrap-scrolldownhoney').addClass('delay-10s animated-slow fadeIn');    
}, {
    offset: '60%'
});

})