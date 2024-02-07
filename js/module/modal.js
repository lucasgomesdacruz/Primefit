export default function modal() {
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

    if (openModalButton && closeModalButton && modal && fade) {
        
        openModalButton.addEventListener("click", handleClick);
        closeModalButton.addEventListener("click", handleClick);
        fade.addEventListener("click", handleClick);
    } 
}