function buscaDados(perfilCliente){
    var xhr = new XMLHttpRequest();
    /* xhr.open("GET", "http://127.0.0.1:3000/clientes");  */
    perfilCliente = "http://127.0.0.1:3000/clientes_perfil/" + perfilCliente;
    /* xhr.open("GET", "http://127.0.0.1:3000/clientes_perfil"); */
    xhr.open("GET", perfilCliente);
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            resposta = JSON.parse(resposta);
            const list = document.getElementById('list');
            resposta.response.forEach(function(cadaCliente){
                montaTabela(cadaCliente);
            });
        }else{
            console.log(xhr.status + 'nnnn');
            console.log(xhr.responseText);
        }
    });
    xhr.send();
}


function adicionaBD(cliente){
    var xhr = new XMLHttpRequest();
    xhr.open("POST","http://127.0.0.1:3000/clientes_perfil" );
    var data = 'perfil_cliente='     + cliente.perfil_cliente 
             + '&nome_investimento=' + cliente.nome_investimento; 
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(data);
    alert('Você adicionou ' + cliente.nome_investimento);
}

