function direction(){
  if(window.scrollTop > pYpos){
    pYpos = window.scrollTop;
    return 'down';
  }
  else if(window.scrollTop < pYpos){
    pYpos = window.scrollTop;
    return 'up';
  }
}

function scrollHandler(e){
  var direction1 = direction();
  if(direction1 == 'down' && scrollPos > min){
    scrollPos--;
    scrollTo(scrollIndex[scrollPos]);
  }
  else if(direction1 == 'up' && scrollPos < max){
    scrollPos++;
    scrollTo(scrollIndex[scrollPos]);
  }
}

function scrollTo(dest){
  window.removeEventListener('scroll',scrollTo);
  disableScroll();
  $(document.body).animate({'scrollTop':$(dest).offset().top },1000);
  enableScroll();
  window.addEventListener('scroll',scrollTo);
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
*/

//scrollIndex bounds:
var max = 2;
var min = 0;
var screenWidth = screen.width;
var scrollPos = 0;
var scrollIndex = [];
var pYpos = 0
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

// Returns a function, that, as long as it continues to be invoked, will not
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
*/

var scroller = debounce(function(e){
  scrollHandler(e)},1000);

window.addEventListener('scroll',scrollHandler);

/*
$(window).on('scroll',_.debounce(function(){
  scrollTo('.about-irina');
},100));
*/
