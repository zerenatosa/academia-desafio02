
var tipoInvestimento = document.querySelector("#input-tipo-investimento");
var perfilCliente = document.querySelector("#select-perfil-cliente");

console.log('tipo investimento' + tipoInvestimento.textContent);
console.log('perfil do cliente' + perfilCliente.options[perfilCliente.selectedIndex].text);


function pegaValor(event){
    event.preventDefault ();
    console.log('valor tela - tipo investimento' + tipoInvestimento.value);
    console.log('valor tela - perfil do cliente' + perfilCliente.options[perfilCliente.selectedIndex].text);
    const perfilClienteValue = perfilCliente.options[perfilCliente.selectedIndex].text;
    const tipoInvestimentoValue = tipoInvestimento.value;
    if(perfilClienteValue === "nihil" || tipoInvestimentoValue == ""){
        alert('revise o preenchimento \nnihil não é um tipo aceito\no tipo de investimento deve estar preenchido');
    }else{
        var cliente = {
            perfil_cliente: perfilClienteValue, 
            nome_investimento: tipoInvestimentoValue
        };
        adicionaBD(cliente);
        window.open("/index.html", "_parent")
    }
}