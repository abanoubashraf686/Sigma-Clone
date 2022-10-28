
document.body.style.zoom=0.8 ;
// Laptop minipage 
// Get the modal and hide it 
var modal = document.getElementsByClassName("modal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  for (var i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
      break;
    }
  }
}




//some functions which it will be called after loading home page 
function after_loading() {
    var targt = new URLSearchParams(window.location.search).get('callFunction');
    if (targt == null) {
      window.scroll( 0 , 0  ) ;
      return;
    }
    if (targt === 'special offer') {
      special_offer();
      return;
    }
    GoToSearch(targt);
}




//Change Page Name 
var page = "home";
function special_offer() {
  page = "special offer";
  _search();
}



// Take value and Search about it 
function GoToSearch(brand) {
  document.getElementById("store").value = brand;
  _search();
}




// Send function which you want to call it after Going home 
function call(brand) {
  var string = "home.html?callFunction=";
  string += brand;
  window.location.replace(string);
}




// Go to Search on Home Page 
function _search_on_home() {
  var input, filter;
  input = document.getElementById("store");
  filter = input.value.toUpperCase();
  call(filter);
}




// search  
function _search() {
  var input, laps;
  input = document.getElementById("store");
  filter = input.value.toUpperCase();
  laps = document.getElementsByClassName("lap");
  for (var i = 0; i < laps.length; i++) {
    var a = laps[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1 && ((i > 5 && page == "special offer") || page == "home")) {
      laps[i].style.display = "flex";
    }
    else {
      laps[i].style.display = "none";
    }
  }
  window.scroll({ top: 496  , behavior: "smooth" });
}


let slideIndex =0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

//show current slide 
function currentSlide(x) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[x].style.display = "block";
  dots[x].className += " active";
  slideIndex = x;
}

// show slid auto 
function showSlide() {
  slideIndex++;
  slideIndex %= 4;
  currentSlide(slideIndex);
  setTimeout(showSlide, 4000);// 4 seconds 
}


//edit the lap links
var laps = document.getElementsByClassName("lap") ;
for(var i=0 ;i<laps.length ;i++){
   laps[i].getElementsByTagName("a")[0].href ="javascript:" + laps[i].getElementsByTagName("img")[0].onclick ;
   laps[i].getElementsByTagName("a")[0].onclick = laps[i].getElementsByTagName("img")[0].onclick ; 
}