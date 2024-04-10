const texto = document.querySelector('.input-text');
const resultText = document.querySelector('.result-text');


const criptButton = document.querySelector('.cript-button');
const descriptButton = document.querySelector('.descript-button');
const copyButton = document.querySelector('.copy-button');


criptButton.addEventListener('click', function(){
    const textoParaCriptografar = texto.value.toLowerCase(); // Garante que o texto esteja todo em minúsculas
    const textoCriptografado = criptografarTexto(textoParaCriptografar);
    resultText.value = textoCriptografado;
});

descriptButton.addEventListener('click', function(){
    const textoParaDescriptografar = texto.value.toLowerCase();
    const textoDescriptografado = descriptografarTexto(textoParaDescriptografar);
    resultText.value = textoDescriptografado;
});

copyButton.addEventListener('click', function () {
    
    resultText.select(); // seleciona a mensagem
    document.execCommand('copy'); //executar comando de copiar texto selecionado
    
    copyButton.textContent = 'Copiado'; // alterar o texto do botão para "Copiado"
});


function criptografarTexto(texto) {
    //mapaamento de cada 
    const criptoMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Converter cada letra do texto de acordo com o mapeamento
    const textoCriptografado = texto.split('').map(letra => criptoMap[letra] || letra).join('');
    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografarTexto(textoCriptografado) {
    const descriptoMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Substituir cada sequência criptografada de acordo com o mapeamento
    const textoDescriptografado = textoCriptografado.replace(/enter|imes|ai|ober|ufat/g, match => descriptoMap[match]);

    return textoDescriptografado;
}