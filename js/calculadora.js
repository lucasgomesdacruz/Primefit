const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')


function validarInput(input) {
  let valor = input.value;
  
  if (valor.length > 4) {
      input.value = valor.slice(0, 4);
  }
}

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    let imc = (peso.value / (altura.value * altura.value)).toFixed(2)

    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
    } else if (imc < 25) {
      classification = 'Peso normal'
    } else if (imc < 30) {
      classification = 'Acima do peso'
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
    } else {
      classification = 'Obesidade Grau III'
    }

    resultado.style.color = "green"
    imc = imc.replace(/[.-]/g, ',');
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    altura.style.border = '3px solid red'
    peso.style.border = '3px solid red'
    resultado.innerHTML = `Preencha os campos corretamente`
    resultado.style.color = "red"
  }
  
  altura.value = ""
  peso.value = ""
}



