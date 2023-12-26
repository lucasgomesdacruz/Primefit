const cards = document.querySelectorAll(".structures-card");
const icones = document.querySelectorAll(".structures-icons");

function cardEventos() {
    cards.forEach(function(card, index) {
        card.addEventListener("mouseover", function() {
            icones[index].classList.add("structures-icons-active");
        });
    });
}
cardEventos();


function removeCardEventos() {
    cards.forEach(function(card, index) {
        card.addEventListener("mouseout", function() {
            icones[index].classList.remove("structures-icons-active");
        });
    });
}
removeCardEventos();


//Button Top
var scrollToButton = document.getElementById("scrollTopButton");
var docElement = document.documentElement;

function scrolltoTop(){
    docElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function handleScroll(){
    var scrollTotal = docElement.scrollHeight - docElement.clientHeight;
    var count = docElement.scrollTop / scrollTotal
    if(count > 0.1){
        scrollToButton.classList.add("showBtn");
    } else {
        scrollToButton.classList.remove("showBtn");
    }
}

document.addEventListener("scroll", handleScroll)
scrollToButton.addEventListener("click", scrolltoTop);


var hoje = new Date();

var dia = hoje.getDate();
var mes = hoje.getMonth() + 1; 

if (dia === 25 && mes === 12) {
    console.log("Merry Christmas!");
} else {
    console.log("Today is not Christmas.");
}


