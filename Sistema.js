//Sistema de cadastro de peças
/*
*/
//Declaração de variàveis 

    let peso = 50;  
    let listadePecas = ["Amortecedor","Disco de Freio","Motor","Cabecote"]
    let nomePeca = "Ata"

// Se o peso for maior que 100g libera o cadastro da peça

if(peso < 100){

    console.log("A peça precisa pesar no mínimo 100g!")

}else{

    console.log("A peça tem o peso adequado.")

}

//Verifica se há espaço na lista com capacidade de 10 itens

if(listadePecas.length < 10){

    console.log("Há espaço para o cadastro da peça.")

}else{

    console.log("Sem espaço para o cadastro de novas peças!")

}

//Verifica se o nome possuiu o número mínimo de caracteres

switch(nomePeca.length){

    case 0:
        console.log("Você precisa inserir um nome.")
    break;

    case 1:
        console.log("O nome deve conter pelo menos 4 caracteres, faltam 3.")
    break;

    case 2:
        console.log("O nome deve conter pelo menos 4 caracteres, faltam 2.")
    break;

    case 3:
        console.log("O nome deve conter pelo menos 4 caracteres, falta 1.")
    break;

    default:
        console.log("O nome foi cadastrado com sucesso.")
    break;

}