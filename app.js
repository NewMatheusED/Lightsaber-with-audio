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

  var color1 = $('#1');
  var color2 = $('#2');
  var color3 = $('#3');
  var color4 = $('#4');

  $(color1).click(function(){
    document.documentElement.style.setProperty('--color', 'hsl(120, 100%, 50%)');
  });

  $(color2).click(function(){
    document.documentElement.style.setProperty('--color', 'hsl(0, 100%, 50%)');
  })

  $(color3).click(function(){
    document.documentElement.style.setProperty('--color', 'hsl(25, 100%, 50%)');
  })

  $(color4).click(function(){
    document.documentElement.style.setProperty('--color', 'hsl(50, 100%, 50%)');
  })
  
  // $('.blade2').click(function() {
  //   $('body').toggleClass('blade2');
  //     let on = $('#on')[0];
  //   if($('body').hasClass('blade2')) {
  //     $('.blade2 .sabre2, .blade2 .sombra2').css({
  //       'height': '0px'
  //     })
  //   }else{
  //     $('.blade2 .sabre2, .blade2 .sombra2').css({
  //       'height': '200px'
  //     })
  //     on.play();
  //   }
  // })