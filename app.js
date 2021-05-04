$('.blade1').click(function() {
    $('body').toggleClass('blade1');
    let on = $('#on')[0];
    if($('body').hasClass('blade1')) {
      $('.blade1 .sabre1, .blade1 .sombra1').css({
        'height': '0px'
      })
    }else{
      $('.blade1 .sabre1, .blade1 .sombra1').css({
        'height': '200px'
      })
      on.play();
    }
  })
  
  $('.blade2').click(function() {
    $('body').toggleClass('blade2');
      let on = $('#on')[0];
    if($('body').hasClass('blade2')) {
      $('.blade2 .sabre2, .blade2 .sombra2').css({
        'height': '0px'
      })
    }else{
      $('.blade2 .sabre2, .blade2 .sombra2').css({
        'height': '200px'
      })
      on.play();
    }
  })