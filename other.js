/*Exercicio 1 - Crie uma função que receba duas strings e retorna o de maior comprimento.*/

function exercicio1() {
    var primeiro = "";
    primeiro = document.querySelector("#first");
    var segundo = "";
    segundo = document.querySelector("#second");

    if (primeiro.value == "" || segundo.value == "") {
        alert('Não pode deixar os campos vazios');
    } else {
        if (primeiro.value.length == segundo.value.length) {
            alert('Ambas as frases tem o mesmo tamanho')
        } else if (primeiro.value.length > segundo.value.length) {
            alert('A maior frase é: ' + primeiro.value)
        } else if (primeiro.value.length < segundo.value.length) {
            alert('A maior frase é: ' + segundo.value)
        }
    }
}

/*Exercicio 2 - Crie uma função que receba três argumentos, uma função e duas strings, aplique a função nas duas string e imprima o resultado.*/

function exercicio2() {

    var primeiro = "";
    primeiro = document.querySelector("#first2");
    var segundo = "";
    segundo = document.querySelector("#second2");
    var aux = "";
    var igual = "";

    if (primeiro.value == "" || segundo.value == "") {
        alert('Não pode deixar os campos vazios');
    } else {
        aux = funcaoDoEx2(primeiro, segundo, aux)
        if (aux.value == igual.value) {
            alert('As duas frases tem o mesmo tamanho');
        } else {
            alert('A menor frase  é: \n' + aux.value);
            alert('Ela invertida fica:' + aux.value.split('').reverse().join(''))
        }
    }
}

function funcaoDoEx2(primeiro, segundo, aux) {
    if (primeiro.value.length < segundo.value.length) {
        aux = primeiro;
        /*for(var i = aux.length-1; i>=0;i--){
            inverte += aux[i];
            
        }return inverte;*/
    } else if (primeiro.value.length > segundo.value.length) {
        aux = segundo;
        /*for(var i = aux.length-1; i>=0;i--){
            inverte += aux[i];
            
        }return inverte;*/
    } else if (primeiro.value.length == segundo.value.length) {
        aux = "";
    }
    return aux;

}
/*function funçaoInverte(primeiro, segundo, inverte) {
    
    for(var i = primeiro.length - 1; i >=0;i--){
        inverte += primeiro[i];
    }
    return inverte;
}*/

function exercicio3() {
    var PrimeiroNome = ""
    var Sobrenome = ""
    var SuaIdade = ""
    var Responsavel = ""
    var Sobrenome2 = ""
    var Idade = ""
    var concatena = ""

    PrimeiroNome = document.querySelector("#Nome")
    Sobrenome = document.querySelector("#Sobrenome")
    SuaIdade = document.querySelector("#Idade")
    Responsavel = document.querySelector("#NomeResponsavel")
    Sobrenome2 = document.querySelector("#SobrenomeResponsavel")
    Idade = document.querySelector("#Idade2")

    if (PrimeiroNome.value == "" || Sobrenome.value == "" || SuaIdade.value == "" || Responsavel.value == "" || Sobrenome2.value == "" || Idade.value == "") {
        alert('Não pode deixar os campos vazios');
    } else {
        concatena = "Seu nome: " + PrimeiroNome.value + " "
        concatena += Sobrenome.value + "\n"
        concatena += "Idade: " + SuaIdade.value + "\n"
        concatena += "Nome do seu responsável: " + Responsavel.value + " "
        concatena += Sobrenome2.value + "\n"
        concatena += "Idade do responsável: " + Idade.value
        alert(concatena)
    }
}

function exercicio4() {
    var X = "Olá 1, tudo bem 4 com você 6";
    var Modifica = X.replace(/[1/4/6]/g, "[removido]")

    alert(Modifica)
}

function exercicio5() {
    var Modifica = "N05 50M05 4 51NGU"

    Modifica = Modifica.replace(/[0]/g, "o")
    Modifica = Modifica.replace(/[1]/g, "i")
    Modifica = Modifica.replace(/[4]/g, "a")
    Modifica = Modifica.replace(/[5]/g, "s")

    Modifica = Modifica.toUpperCase();
    alert(Modifica)
}


function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {

        var num = document.querySelector("#num");
        var rua = value = (conteudo.logradouro);
        var cidade = value = (conteudo.localidade);
        var uf = value = (conteudo.uf);

        alert(rua + ", " + num.value + ", " + cidade + ", " + uf)
    }
    else {
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        }
        else {
            alert("Formato de CEP inválido.");
        }
    }
}

function exercicio7() {
    var objetos = [
        { id: 1, nome: 'Eduardo', sobrenome: 'Aparecido', idade: 16 },
        { id: 2, nome: 'Luis', sobrenome: 'Inácio', idade: 70 },
        { id: 3, nome: 'Alberto', sobrenome: 'Roberto', idade: 28 },
        { id: 4, nome: 'Monica', sobrenome: 'de Leão', idade: 21 }
    ]

    for (var i = 0; i < objetos.length; i++) {
        alert("Olá, " + objetos[i].nome + " " + objetos[i].sobrenome + "!")
    }
}

function exercicio8() {
    var objetos = [
        { id: 1, nome: 'Eduardo', sobrenome: 'Aparecido', idade: 16 },
        { id: 2, nome: 'Luis', sobrenome: 'Inácio', idade: 70 },
        { id: 3, nome: 'Alberto', sobrenome: 'Roberto', idade: 28 },
        { id: 4, nome: 'Monica', sobrenome: 'de Leão', idade: 21 }
    ]

    var Media = 0
    var Soma = 0
    for (var i = 0; i < objetos.length; i++) {
        Media = Media + (objetos[i].idade * objetos[i].id)
        Soma = Soma + objetos[i].id
    }
    Media = Media / Soma
    alert("Média Ponderada das idades: " + Media)
}

function exercicio9() {
    var objetos = [
        { id: 1, nome: 'Eduardo', sobrenome: 'Aparecido', idade: 16 },
        { id: 2, nome: 'Luis', sobrenome: 'Inácio', idade: 70 },
        { id: 3, nome: 'Alberto', sobrenome: 'Roberto', idade: 28 },
        { id: 4, nome: 'Monica', sobrenome: 'de Leão', idade: 21 }
    ]

    var i = 0
    var OBJ = ""
    for (var x = 0; x < objetos.length; x++) {
        if (objetos[i].idade < 60) {
            OBJ += "{Id: " + objetos[x].id + ", nome: " + objetos[x].nome + ", sobrenome: " + objetos[x].sobrenome + ", idade: " + objetos[x].idade + "} \n"
        }
    } alert(OBJ)
}

function exercicio10() {
    var objetos = [
        { id: 1, nome: 'Eduardo', sobrenome: 'Aparecido', idade: 16 },
        { id: 2, nome: 'Luis', sobrenome: 'Inácio', idade: 70 },
        { id: 3, nome: 'Alberto', sobrenome: 'Roberto', idade: 28 },
        { id: 4, nome: 'Monica', sobrenome: 'de Leão', idade: 21 }
    ]

    var OBJ = ""
    for (var i = 0; i < objetos.length; i++) {
        if (objetos[i].idade < 30) {
            OBJ += "{Id: " + objetos[i].id + ", nome: " + objetos[i].nome + ", sobrenome: " + objetos[i].sobrenome + ", idade: " + objetos[i].idade + "} \n"
        }
    } alert(OBJ)
}

function exercicio11() {
    var objetos = [
        { id: 1, nome: 'Eduardo', sobrenome: 'Aparecido', idade: 16 },
        { id: 2, nome: 'Luis', sobrenome: 'Inácio', idade: 70 },
        { id: 3, nome: 'Alberto', sobrenome: 'Roberto', idade: 28 },
        { id: 4, nome: 'Monica', sobrenome: 'de Leão', idade: 21 }
    ]
    var OBJ = ""

    objetos.sort((a, b) => {

        /*if (a.idade === b.idade) {
            return 0
        }*/ 
        if (a.idade > b.idade) {
            return 1
        } else {
            return -1
        }
    })
    for (var i = 0; i < objetos.length; i++) {
        OBJ += "{Id: " + objetos[i].id + ", nome: " + objetos[i].nome + ", sobrenome: " + objetos[i].sobrenome + ", idade: " + objetos[i].idade + "} \n"
    } alert(OBJ)
}