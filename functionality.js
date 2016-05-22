function scrollTo(dest){
  $(document.body).animate({'scrollTop':$(dest).offset().top },1000);
}

//scrollIndex bounds:
var max = 2;
var min = 0;
var pTime = 0;
var screenWidth = screen.width;
var scrollPos = 0;
var scrollIndex = new Array();
scrollIndex[0] = '.jumbo-header';
scrollIndex[1] = '.social-media-icons';
scrollIndex[2] = '.about-irina';


$(document).ready(function(){
  $(window).bind('mousewheel',function(e){
    if(screenWidth > 667){
      var d = new Date()
      var time = d.getTime();
      if(time > pTime+1000){
        if(e.originalEvent.wheelDelta/120 >= 0 && scrollPos > min){
          scrollPos--;
          scrollTo(scrollIndex[scrollPos]);
        }
        else if(e.originalEvent.wheelDelta/120 <= 0 && scrollPos < max ){
          scrollPos++;
          scrollTo(scrollIndex[scrollPos]);
        }
        pTime = time;
      }
    }
  })
})
