// Constructor
var CarIndex = [];
var counter = 2;
var max = 27;
var time = 0;

function setUp(){
  CarIndex[0] = "cad-3d_rendering-01.png";
  CarIndex[1] = "pr7-irinadimitriucom-01-01.png";
  CarIndex[2] = "dai_410_drinking_vessel_ideation7.png";
  CarIndex[3] = "sketch1_irinadimitriucom-05.png";
  CarIndex[4] = "graphic_design1_irinadimitriucom-01.png";
  CarIndex[5] = "graphic_design6_irinadimitriucom-01-01-01-01-01-01.png";
  CarIndex[6] = "sketch3_irinadimitriucom-01-01-01.png";
  CarIndex[7] = "pr6-irinadimitriucom-01.png";
  CarIndex[8] = "graphic_design8_irinadimitriucom-01-01-01-01-01-01-01-01.png";
  CarIndex[9] = "graphic_design9_irinadimitriucom-01-01-01-01-01-01-01-01-01.png";
  CarIndex[10] = "photo_4.png";
  CarIndex[11] = "sketch4_irinadimitriucom-01-01-01-01.png";
  CarIndex[12] = "pr1-irinadimitriucom-01.png";
  CarIndex[13] = "graphic_design2_irinadimitriucom-01-01.png";
  CarIndex[14] = "sketches1-01.png";
  CarIndex[15] = "pr2-irinadimitriucom-01-01.png";
  CarIndex[16] = "graphic_design3_irinadimitriucom-01-01-01.png";
  CarIndex[17] = "pr3-irinadimitriucom-01-01-01.png";
  CarIndex[18] = "sketch6_irinadimitriucom-01-01.png";
  CarIndex[19] = "pr4-irinadimitriucom-01-01-01-01.png";
  CarIndex[20] = "graphic_design4_irinadimitriucom-01-01-01-01.png";
  CarIndex[21] = "pr5-irinadimitriucom-01-01-01-01-01.png";
  CarIndex[22] = "sketch5_irinadimitriucom-01.png";
  CarIndex[23] = "graphic_design5_irinadimitriucom-01-01-01-01-01.png";
  CarIndex[24] = "pr8-irinadimitriucom-01.png";
  CarIndex[25] = "sketch1_irinadimitriucom-01.png";
  CarIndex[26] = "graphic_design7_irinadimitriucom-01-01-01-01-01-01-01.png";
  CarIndex[27] = "sketch2_irinadimitriucom-01-01.png";

  for(var i=0;i <= max; i++){
    $('.carousel')
      .append('<div class=col-3 style="position: relative;display:inline;float:none;padding-left:3%" id='+(i+1)+'><img src=images/' + CarIndex[i] + ' width=30% height=350px></div>');
  }
}

function begin(){
  if(counter >= max-1){
    reset();
    return;
  }
  for(var i=0; i<=max; i++){
    $('#'+i).animate({ left:'-=33%' }, 800);
  }
  counter++;
}

function reset(){
  clearInterval(mainLoop);
  for(var i=0; i<=max; i++){
    $('#'+i)
      .animate({ left:'+=792%' }, 1000);
  }
  counter=2;
  mainLoop = setInterval(begin,5000);
}

// dir: 'right' and 'left'
function changeImage(dir){
  d = new Date();
  if(d.getTime() < time+1000){
    return;
  }
  time = d.getTime();
  clearInterval(mainLoop);
  if(dir == 'right' && counter >= max-1){
    reset();
  }
  else if(dir == 'right'){
    for(var i=0; i<=max; i++){
      $('#'+i)
        .animate({ left:'-=33%' }, 800);
    }
    counter++;
  }
  else if(dir == 'left' && counter > 2){
    for(var i=0; i<=max; i++){
      $('#'+i)
        .animate({ left:'+=33%' }, 800);
    }
    counter--;
  }
  mainLoop = setInterval(begin,5000);
}


$(document).ready(function(){
  setUp();
  mainLoop = setInterval(begin,5000);
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
})
