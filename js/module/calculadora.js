export default function calculadora() {
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

    const resultado = document.querySelector('#resultado');
    const altura = document.querySelector('#altura');
    const peso = document.querySelector('#peso');


    window.validarInput = function(input) { // window torna acessível globalmente.
      let valor = input.value;
      
      if (valor.length > 4) {
          input.value = valor.slice(1, 4);
      }
    };
    
    window.calcIMC = function() {
        if (altura.value !== '' && peso.value !== '') {
            let imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    
            let classification = '';
            let color = '';
            
            if (imc < 18.5) {
                classification = 'Abaixo do peso';
                color = 'red';
            } else if (imc < 25) {
                classification = 'Peso normal';
                color = 'green';
            } else if (imc < 30) {
                classification = 'Acima do peso';
                color = 'orange';
            } else if (imc < 35) {
                classification = 'Obesidade Grau I';
                color = 'red';
            } else if (imc < 41) {
                classification = 'Obesidade Grau II';
                color = 'red';
            } else {
                classification = 'Obesidade Grau III';
                color = 'red';
            }
            altura.style.border = '';
            peso.style.border = '';
            resultado.style.color = color;
            imc = imc.replace(/[.-]/g, ',');
            resultado.innerHTML = `IMC: ${imc} (${classification})`;
        } else {
            altura.style.border = '3px solid red';
            peso.style.border = '3px solid red';
            resultado.innerHTML = `Preencha os campos corretamente`;
            resultado.style.color = "red";
        }
        altura.value = '';
        peso.value = '';
    
        setTimeout(() => {
            altura.style.border = '';
            peso.style.border = '';
            resultado.innerHTML = '';
        }, 6000);
    };
}




