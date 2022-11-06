function onLoad(){
    adicionaTitulo(pegaValorUrl());
    buscaDados(pegaValorUrl());
}

//pega valor que vem na URL
function pegaValorUrl(){
    var    urlParams = new URLSearchParams(window.location.search);
    var    nomeParam = urlParams.get("valor");
    return nomeParam;
}

//adiciona o valor recebido no título
function adicionaTitulo(nomeParam){
    tituloMeusClientes = document.querySelector("#titulo-meus-clientes");
    console.log(tituloMeusClientes + ' titulo');
    tituloMeusClientes.innerHTML = 'Veja as opções de investimento para clientes ' + nomeParam;
}


// monta a tabela de clientes de um cliente
function montaTabela(cliente){

    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");
    clienteTr.id = cliente.cd_cliente;
    
    
    var id_investimentoTd =  document.createElement("td");
    id_investimentoTd.textContent = cliente.id_investimento;
    clienteTr.appendChild(id_investimentoTd);

    var perfil_clienteTd = document.createElement("td");
    perfil_clienteTd.textContent = cliente.perfil_cliente;
    clienteTr.appendChild(perfil_clienteTd);''

    var nome_investimentoTd = document.createElement("td");
    nome_investimentoTd.textContent = cliente.nome_investimento;
    clienteTr.appendChild(nome_investimentoTd);

    console.log(clienteTr);

    var tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);  
    

}
























