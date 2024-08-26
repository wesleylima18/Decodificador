
let input = document.getElementById('input');
let output = document.getElementById('output');
let botaoCodificar = document.getElementById('codificador');
let botaoDecodificar = document.getElementById('decodificador');
let botaoCopiar = document.getElementById('copiar');

let codifica = { a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat' };
let decodifica = { ai: 'a', enter: 'e', imes: 'i', ober: 'o', ufat: 'u' };

botaoCodificar.onclick = codificar;
botaoDecodificar.onclick = decodificar;
botaoCopiar.onclick = copiar;

function codificar() {
  let novoTexto = input.value.replace(/a|e|i|o|u/g, function (valores){return codifica[valores];});
  output.value = novoTexto;
}

function decodificar() {
  let novoTexto = input.value.replace(/ai|enter|imes|ober|ufat/g,function (valores){return decodifica[valores];});
  output.value = novoTexto;
}

function copiar() {
    navigator.clipboard.writeText(output.value);
    input.select();
}
