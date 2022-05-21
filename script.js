console.log('Java script carregado');

function validaCPF(cpf) {
    if(cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
        var soma = 0;
        for (i=10; i>1; i--) {
            
        }
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