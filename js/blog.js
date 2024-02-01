let listElement = document.querySelector("#app");
let loadingElement = document.createElement("h3"); // texto caso a Api demore a carregar
loadingElement.classList.add("carregando");
loadingElement.textContent = "Carregando...";
listElement.appendChild(loadingElement);

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((r) => r.json())
        .then((json) => {
            posts = json;
            listElement.removeChild(loadingElement); 

            posts.map((item) => {
                let liElement = document.createElement("li");
                let titleElement = document.createElement("h2");
                let imgElement = document.createElement("img");
                let descriptionElement = document.createElement("p");

                let titleText = document.createTextNode(item.titulo);
                titleElement.appendChild(titleText);
                liElement.append(titleElement);

                imgElement.src = item.capa;
                liElement.appendChild(imgElement);

                let descriptionText = document.createTextNode(item.subtitulo);
                descriptionElement.appendChild(descriptionText);
                liElement.appendChild(descriptionElement);

                listElement.appendChild(liElement);
            });
        })
        .catch(() => {
            listElement.removeChild(loadingElement);
            console.log("Erro");
        });
}
nutriApp();
