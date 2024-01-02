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
