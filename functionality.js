
$(document).ready(function(){
  if(screen.width > 800){

    $('.col-7').hover(
      function(){
        $(this).css('width','325px').css('z-index','1');
      },
      function(){
        $(this).css('width','14%').css('z-index','99');
      }
    )
    $('#b1').hover(
      function(){
        $('#book-text1').fadeIn(250);
        $('#book1').animate({top:'-=30px'});
      },
      function(){
        $('#book-text1').fadeOut(250);
        $('#book1').animate({top:'+=30px'});
      }
    )
    $('#b2').hover(
      function(){
        $('#book-text2').fadeIn(250);
        $('#book2').animate({top:'-=30px'});
      },
      function(){
        $('#book-text2').fadeOut(250);
        $('#book2').animate({top:'+=30px'});
      }
    )
    $('#b3').hover(
      function(){
        $('#book-text3').fadeIn(250);
        $('#book3').animate({top:'-=30px'});
      },
      function(){
        $('#book-text3').fadeOut(250);
        $('#book3').animate({top:'+=30px'});
      }
    )
    $('#b4').hover(
      function(){
        $('#book-text4').fadeIn(250);
        $('#book4').animate({top:'-=30px'});
      },
      function(){
        $('#book-text4').fadeOut(250);
        $('#book4').animate({top:'+=30px'});
      }
    )
    $('#b5').hover(
      function(){
        $('#book-text5').fadeIn(250);
        $('#book5').animate({top:'-=30px'});
      },
      function(){
        $('#book-text5').fadeOut(250);
        $('#book5').animate({top:'+=30px'});
      }
    )
  }
})
