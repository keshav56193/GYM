window.addEventListener("scroll", function(){

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});
