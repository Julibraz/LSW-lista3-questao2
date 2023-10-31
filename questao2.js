class ClienteBanco {
    constructor(nome, documento, saldo){
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
    }

    sacar(valor){
        this.saldo = this.saldo - valor; 
    }
}

let clientes = [];

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.querySelector("#nome").value;
    let documento = document.querySelector("#documento").value;
    let saldo = 0;

    clientes.push(new ClienteBanco(nome, documento, saldo));

    //atualizando a lista de clientes
    let clientesHTML = "";
    
    for (let i = 0; i < clientes.length; i++){ 
        clientesHTML += `
            <li>
                <strong>${clientes[i].nome}</strong> 
                <br>
                ${clientes[i].saldo} 
                <button onclick="(function(){clientes[i].depositar(100); atualizarLista();})()">Depositar</button> 
                <button onclick="(function(){clientes[i].sacar(100); atualizarLista();})()">Sacar</button> //corrigido
            </li>`;
    }

    document.querySelector("#clientes").innerHTML = clientesHTML;
})

function atualizarLista(){
    //atualiza a lista de clientes
    let clientesHTML = "";
    
    for (let i = 0; i < clientes.length; i++){
        clientesHTML += `
            <li>
                <strong>${clientes[i].nome}</strong>
                <br>
                ${clientes[i].saldo}
                <button onclick="(function(){clientes[i].depositar(100); atualizarLista();})()">Depositar</button>
                <button onclick="(function(){clientes[i].sacar(100); atualizarLista();})()">Sacar</button>
            </li>`;
    }

    document.querySelector("#clientes").innerHTML = clientesHTML;
}