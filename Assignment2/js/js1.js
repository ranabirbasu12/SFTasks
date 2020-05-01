window.onscroll = function() {yourFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function yourFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function func1() {
  var x = document.getElementById("linesbitch");
  if (x.className === "navlist") {
    x.className += " responsive";
  } else {
    x.className = "navlist";
  }
}

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 730) {
      $("#trial").css("background-color" , "#5fcf80");
      $("#trial").css("color" , "white");
	  }

	  else{
      $("#trial").css("background-color" , "white");
      $("#trial").css("color" , "#5fcf80");
	  }
  })
})
