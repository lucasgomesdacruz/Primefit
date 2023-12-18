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



