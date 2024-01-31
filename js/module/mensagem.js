export default function mensagem() {
    const botoesEnviarMensagem = document.querySelectorAll("#enviarMensagem");
    const numero = "5521992117045";

    function mensagemWpp() {
        botoesEnviarMensagem.forEach(function(botao) {
            botao.addEventListener("click", function() {
                let texto = "Olá *PrimeFit*, gostaria de mais informações";
                let encode = encodeURIComponent(texto);
                let URL = `https://wa.me/${numero}?text=${encode}`;

                window.open(URL, '_blank');
            });
        });
    }
    mensagemWpp();

    const enviarPlanoWpp = document.querySelectorAll('#enviarPlanoWpp')
    console.log(enviarPlanoWpp)
    const planoUm = 99

    enviarPlanoWpp.forEach(function(element) {
        element.addEventListener('click', function() {
            console.log('clicou em um plano')
        })
    })
}







