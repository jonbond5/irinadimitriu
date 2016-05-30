// Constructor

var CarIndex = [];
var item1 = 0;
var item2 = 1;
var item3 = 2;
var max = 26;
var first = 0;
//  CarIndex[1] = 'annatwobirthday.png';
//CarIndex[2] = 'photo_1.png';
//CarIndex[3] = 'marie_claire_sept_2008.png';
//CarIndex[4] = 'vogue_2007_bruno_frisoni_for_vivier.png';
function setUp(){
  CarIndex[0] = 'img_4776.png';
  CarIndex[1] = 'new-image1.png';
  CarIndex[2] = 'new-image2.png';
  CarIndex[3] = 'new-image3.png';
  CarIndex[4] = 'new-image4.png';
  CarIndex[5] = 'DAI_410_DRINKING_VESSEL_IDEATION5.png';
  CarIndex[6] = 'CAD-3D_Rendering-01.png';
  CarIndex[7] = 'FINAL_SPEECH_N_MOTION_LOGO.png';
  CarIndex[8] = 'Glamour_Aug_2008.png';
  CarIndex[9] = 'Time_Style&Design_2008.png';
  CarIndex[10] = 'dai_410_drinking_vessel_ideation5.png';
  CarIndex[11] = 'nylon_oct_2008.png';
  CarIndex[12] = 'cookie_magazine_sept_2008.png';
  CarIndex[13] = 'photo_3.png';
  CarIndex[14] = 'glamour_italy_sept_2008.png';
  CarIndex[15] = 'photo_4.png';
  CarIndex[16] = 'sketches1-01.png';
  CarIndex[17] = 'photo_5.png';
  CarIndex[18] = 'v_magazine_winter_2008.png';
  CarIndex[19] = 'dai_410_drinking_vessel_ideation4.png';
  CarIndex[20] = 'img_4768.png';
  CarIndex[21] = 'zoo_party.png';
  CarIndex[22] = 'dai_410_drinking_vessel_ideation6.png';
  CarIndex[23] = 'soul-foods-logo-design-with-yoga-final.png';
  CarIndex[24] = 'owen_turning_four.png';
  CarIndex[25] = 'grayson_turning_four.png';
  CarIndex[26] = 'dai_410_drinking_vessel_ideation7.png';
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
