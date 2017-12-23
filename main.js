
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       // x[i].style.opacity = 0;
       x[i].style.display = "none";
       // x[i].style.animationTimingFunction = "ease-in";
       // x[i].style.animationDuration = "5s"
       // x[i].style.transition = "opacity .5s ease-out"  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    // x[myIndex-1].style.opacity = 1;
    x[myIndex-1].style.display = "block";
    // x[myIndex-1].style.animationTimingFunction = "easeout";
    // x[myIndex-1].style.animationDuration = "3s"
    // x[myIndex-1].style.transition= "opacity .5s ease-in";  
    setTimeout(carousel, 3500); // Change image every 2 seconds
}

// var current = 0,
//     slides = document.getElementsByClassName("slides");

// setInterval(function() {
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   current = (current != slides.length - 1) ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 3000);