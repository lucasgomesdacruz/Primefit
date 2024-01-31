const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function toggleModal() {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

function handleClick() {
    toggleModal();
}

openModalButton.addEventListener("click", handleClick);
openModalButton.addEventListener("touchstart", handleClick);

closeModalButton.addEventListener("click", handleClick);
closeModalButton.addEventListener("touchstart", handleClick);

fade.addEventListener("click", handleClick);
fade.addEventListener("touchstart", handleClick);