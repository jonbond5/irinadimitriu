// Constructor

var CarIndex = [];
var item1 = 0;
var item2 = 1;
var item3 = 2;
var max = 26;
var first = 0;

function setUp(){
  CarIndex[0] = "cad-3d_rendering-01.png";
  CarIndex[1] = "dai_410_drinking_vessel_ideation7.png";
  CarIndex[2] = "graphic_design1_irinadimitriucom-01.png";
  CarIndex[3] = "graphic_design2_irinadimitriucom-01-01.png";
  CarIndex[4] = "graphic_design3_irinadimitriucom-01-01-01.png";
  CarIndex[5] = "graphic_design4_irinadimitriucom-01-01-01-01.png";
  CarIndex[6] = "graphic_design5_irinadimitriucom-01-01-01-01-01.png";
  CarIndex[7] = "graphic_design6_irinadimitriucom-01-01-01-01-01-01.png";
  CarIndex[8] = "graphic_design7_irinadimitriucom-01-01-01-01-01-01-01.png";
  CarIndex[9] = "graphic_design8_irinadimitriucom-01-01-01-01-01-01-01-01.png";
  CarIndex[10] = "graphic_design9_irinadimitriucom-01-01-01-01-01-01-01-01-01.png";
  CarIndex[11] = "photo_4.png";
  CarIndex[12] = "pr1-irinadimitriucom-01.png";
  CarIndex[13] = "pr2-irinadimitriucom-01-01.png";
  CarIndex[14] = "pr3-irinadimitriucom-01-01-01.png";
  CarIndex[15] = "pr4-irinadimitriucom-01-01-01-01.png";
  CarIndex[16] = "pr5-irinadimitriucom-01-01-01-01-01.png";
  CarIndex[17] = "pr6-irinadimitriucom-01.png";
  CarIndex[18] = "pr7-irinadimitriucom-01-01.png";
  CarIndex[19] = "pr8-irinadimitriucom-01.png";
  CarIndex[20] = "sketch1_irinadimitriucom-01.png";
  CarIndex[21] = "sketch1_irinadimitriucom-05.png";
  CarIndex[22] = "sketch2_irinadimitriucom-01-01.png";
  CarIndex[23] = "sketch3_irinadimitriucom-01-01-01.png";
  CarIndex[24] = "sketch4_irinadimitriucom-01-01-01-01.png";
  CarIndex[25] = "sketch5_irinadimitriucom-01.png";
  CarIndex[26] = "sketch6_irinadimitriucom-01-01.png";
  CarIndex[27] = "sketches1-01.png";

  for(var i=0;i <= max; i++){
    $('.carousel')
      .append('<div class=col-3 style=position:relative;display:inline;float:none;padding-left:3% id='+(i+1)+'><img src=images/' + CarIndex[i] + ' width=30% height=350px></div>');
  }
}

function begin(){
  for(var i=0; i<=max; i++){
    $('#'+i)
      .animate({ left:'-=33%' }, 800);
  }
}

function reset(){
  for(var i=0; i<=max; i++){
    $('#'+i)
      .animate({ left:'+=825%' }, 1000);
  }
}

// dir: 'right' and 'left'
function changeImage(dir){
  if(dir == 'right'){
    if     (item1 == max){ item1 = 0;item2++;item3++;}
    else if(item2 == max){ item2 = 0;item1++;item3++;}
    else if(item3 == max){ item3 = 0;item1++;item2++;}
    else                 { item1++;item2++;item3++;}
  }
  else{
    if     (item1 == 0){ item1 = max;item2--;item3--;}
    else if(item2 == 0){ item2=max;item1--;item3--;}
    else if(item3 == 0){ item3=max;item1--;item2--;}
    else               { item1--;item2--;item3--;}
  }
  $('#carousel-image1').fadeOut('slow');
  $('#carousel-image2').fadeOut('slow');
  $('#carousel-image3').fadeOut('slow');
  var name1 = 'images/' + CarIndex[item1];
  var name2 = 'images/' + CarIndex[item2];
  var name3 = 'images/' + CarIndex[item3];
  $('#carousel-image1').attr('src', name1).fadeIn('slow').delay(1000);
  $('#carousel-image2').attr('src', name2).fadeIn('slow').delay(1000);
  $('#carousel-image3').attr('src', name3).fadeIn('slow').delay(1000);

}


$(document).ready(function(){
  setUp();
  mainLoop = setInterval(begin,5000);
  clear = setInterval(reset,125000);
})
