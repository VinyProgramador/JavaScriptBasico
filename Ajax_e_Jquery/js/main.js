function digitarCep() {
    var cep = inputCep.value;

    if (cep.length == 8) {
        buscarCep();
        erros.innerHTML=''

    }
    else if(cep == ''){
        erros.innerHTML=''
        resultadoCep.innerHTML=''
    }
    else{
        erros.innerHTML='Digite todo o cep..'
        resultadoCep.innerHTML=''
    }
}

function buscarCep() {
    var cep = inputCep.value;
    // console.log(cep)
    var url = "https://viacep.com.br/ws/"+cep+"/json/"  
    $.ajax({
        url:url,
        type:"GET",
        success:function(response){
            console.log(response)
            resultadoCep.innerHTML=`Seu logradouro é: ${response.logradouro}<br>
                                    Seu bairro é: ${response.bairro}<br>
                                    Localidade: ${response.localidade}<br>
                                    Uf: ${response.uf}<br><br> `
        }
    })
}