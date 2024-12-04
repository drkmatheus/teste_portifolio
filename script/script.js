// Contador de Caracteres - Formulário contatos.html

// Seleciona a área de texto e o elemento contador
const campoMsg = document.getElementById("mensagem");
const contador = document.getElementById("contador");

//Funcao para monitorar os caracteres digitados

campoMsg.addEventListener("input", () => {
    const caracteres = campoMsg.value.length;
    contador.textContent = `${caracteres}/500 caracteres` // Atualiza o contador
});