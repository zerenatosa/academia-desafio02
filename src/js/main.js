var opcao = document.getElementById("opcoes");
console.log(opcao);

var opcaoTexto = opcao.options[opcao.selectedIndex].text;
var opcaoValor = opcao.options[opcao.selectedIndex].value;

console.log(opcaoTexto);
console.log(opcaoValor);


function opcaoSelecionada(selecao){
    console.log(selecao.value);
    var urlGo = "/src/html/investimentos.html?valor=" + selecao.value; 
    console.log('url' + urlGo);
    /* window.open("/src/html/investimentos.html"); */
    window.open(urlGo, "_parent");

}



/* const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams)
const nomeParam = urlParams.get("nome");

console.log(nomeParam) */
