/*Exercicio 1 - Crie uma função que receba duas strings e retorna o de maior comprimento.*/

function exercicio1(){
    var primeiro = "";
    primeiro = document.querySelector("#first");
    var segundo = "";
    segundo = document.querySelector("#second");

    if (primeiro.value == "" || segundo.value == ""){
        alert('Não pode deixar os campos vazios');    
    }else{  
        if (primeiro.value.lenght > segundo.value.lenght){
            alert('A maior frase é : + primeiro.value')
        }else if(primeiro.value.lenght < segundo.value.lenght){
            alert('A maior frase é: + segundo.value')
        }else if(primeira.value.lenght === segundo.value.lenght){
            alert('Ambas as frases tem o mesmo tamanho')
        }
    }    
}

/*Exercicio 2 - Crie uma função que receba três argumentos, uma função e duas strings, aplique a função nas duas string e imprima o resultado.*/

function exercicio2 (){

}