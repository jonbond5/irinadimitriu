// Constructor

var CarIndex = [];
var currentItem = 0;
var max = 27;
function setUp(){
  CarIndex[1] = 'Annatwobirthday.png';
  CarIndex[2] = 'Cookie_Magazine_Sept_2008.png';
  CarIndex[3] = 'DAI_410_DRINKING_VESSEL_IDEATION3.png';
  CarIndex[4] = 'DAI_410_DRINKING_VESSEL_IDEATION4.png';
  CarIndex[5] = 'DAI_410_DRINKING_VESSEL_IDEATION5.png';
  CarIndex[6] = 'DAI_410_DRINKING_VESSEL_IDEATION6.png';
  CarIndex[7] = 'DAI_410_DRINKING_VESSEL_IDEATION7.png';
  CarIndex[8] = 'Glamour_Aug_2008.png';
  CarIndex[9] = 'Glamour_Italy_Sept_2008.png';
  CarIndex[10] = 'Marie_Claire_Sept_2008.png';
  CarIndex[11] = 'Nylon_Oct_2008.png';
  CarIndex[12] = 'photo_1.png';
  CarIndex[13] = 'photo_3.png';
  CarIndex[14] = 'photo_4.png';
  CarIndex[15] = 'photo_5.png';
  CarIndex[16] = 'Sketches1-01.png';
  CarIndex[17] = 'Time_Style&Design_2008.png';
  CarIndex[18] = 'V_Magazine_Winter_2008.png';
  CarIndex[19] = 'Vogue_2007_Bruno_Frisoni_for_Vivier.png';
  CarIndex[20] = 'IMG_4768.png';
  CarIndex[21] = 'zoo_party.png';
  CarIndex[22] = 'CAD-3D_Rendering-01.png';
  CarIndex[23] = 'SOUL-FOODS-Logo-Design-with-Yoga-final.png';
  CarIndex[24] = 'owen_turning_four.png';
  CarIndex[25] = 'GRAYSON_TURNING_FOUR.png';
  CarIndex[26] = 'FINAL_SPEECH_N_MOTION_LOGO.png';
  CarIndex[0] = 'IMG_4776.png';
}

// dir: 'right' and 'left'
function changeImage(dir){
  if(dir == 'right'){
    if(currentItem == max) currentItem = 0;
    else currentItem++;
  }
  else{
    if(currentItem == 0) currentItem = 27;
    else currentItem--;
  }
  var name = 'images/' + CarIndex[currentItem];
  $('#carousel-image1').attr('src', name);
}

setUp();
