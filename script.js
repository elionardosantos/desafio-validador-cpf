console.log('Java script carregado');

function validaCPF(cpf) {
    console.log(cpf.length)
    if(cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        console.log(digitos);
    }
}

function validacao() {
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = "block";
    } else {
        document.getElementById('error').style.display = "block";
    }
}