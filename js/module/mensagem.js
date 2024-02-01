export default function mensagem() {
    const botoesEnviarMensagem = document.querySelectorAll("#enviarMensagem");
    const numero = `5521992117045`;

    const enviarPlanoWpp = document.querySelectorAll('#enviarPlanoWpp')
    let valorDosPlanos = document.querySelectorAll('.card-plans h3')
    let resultado = funcaoDeValorPlanos()
    

    function mensagemWpp() {
        botoesEnviarMensagem.forEach(function(botao) {
            botao.addEventListener("click", function() {
                let texto = `Olá *PrimeFit*, gostaria de mais informações`;
                let encode = encodeURIComponent(texto);
                let URL = `https://wa.me/${numero}?text=${encode}`;

                window.open(URL, `_blank`);
            });
        });
    }
    mensagemWpp();

    function funcaoDeValorPlanos() {
        let valores = []

        valorDosPlanos.forEach(function(element) {
            valores.push(element.textContent)
        })
        return valores;
    }
    funcaoDeValorPlanos()
    
    function funcaoDeClick() {
        enviarPlanoWpp.forEach(function(element, index) {
            element.addEventListener('click', function() {
                let plano = resultado[index].toUpperCase()
                let texto = `Olá *PrimeFit*, gostaria de mais informações sobre o *${plano}*`;
                let encode = encodeURIComponent(texto);
                let URL = `https://wa.me/${numero}?text=${encode}`;

                window.open(URL, `_blank`);
            })
        })
    }
    funcaoDeClick()
}







