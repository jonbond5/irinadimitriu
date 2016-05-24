/*function direction(){
  if(document.body.scrollTop > pYpos){
    i--;
    return 'down';
  }
  else if(document.body.scrollTop < pYpos){
    i++;
    return 'up';
  }
}

function scrollHandler(){
  var d = new Date();
  var t = d.getTime();
  if(t > pTime+2000){
    var di = direction();
    disableScroll();
    setTimeout(enableScroll,1000);
    scrollTo('#'+i);
    pTime = t;
  }
  /*
  var d = new Date();
  var t = d.getTime();
  disableScroll();
  //window.removeEventListener('scroll',scrollHandler);
  if(t > pTime){
    var direction1 = direction();
    if(direction1 == 'down' && scrollPos > min){
      scrollPos--;
      scrollTo(scrollIndex[scrollPos]);
      pTime = t;
    }
    else if(direction1 == 'up' && scrollPos < max){
      scrollPos++;
      scrollTo(scrollIndex[scrollPos]);
      pTime = t;
    }
    enableScroll();
  }
  //window.addEventListener('scroll',scrollHandler);
}

function scrollTo(dest){
  pYpos = $(dest).offset().top;
  $(document.body).animate({'scrollTop':pYpos },1000);
}


  /*
  if(abs(e.originalEvent.wheelDelta) > 0){
    e.preventDefault();
    if(e.originalEvent.wheelDelta > 0 && scrollPos > min){
      scrollPos--;
      scrollTo(scrollIndex[scrollPos]);
    }
    else if(e.originalEvent.wheelDelta < 0 && scrollPos < max){
      scrollPos++;
      scrollTo(scrollIndex[scrollPos]);
    }
  }
}


//scrollIndex bounds:
var i = 1;
var max = 2;
var min = 0;
var screenWidth = screen.width;
var scrollPos = 0;
var scrollIndex = [];
var pYpos = 0;
var pTime = 0;
scrollIndex[0] = '.jumbo-header';
scrollIndex[1] = '.social-media-icons';
scrollIndex[2] = '.about-irina';


function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
}

// Returns a function that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

/*
function clearQueue(){
  eventQueue = [];
}

function begin(){
  if(eventQueue.length > 2){
    alert(eventQueue.pop());
    clearQueue();
  }
}


//var scroller = debounce(function(e){
//  scrollHandler(e)},1000

window.addEventListener('scroll',scrollHandler);

/*
$(window).on('scroll',_.debounce(function(){
  scrollTo('.about-irina');
},100));
*/
