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






