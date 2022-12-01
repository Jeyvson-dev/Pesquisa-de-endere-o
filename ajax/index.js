function getDadosEnderecoPorCEP(cep){

    let url = 'https://viacep.com.br/ws/'+cep+'/json/'
    let ajax = new XMLHttpRequest()

    ajax.open('GET', url)

    ajax.onreadystatechange = () =>{


        if(ajax.readyState == 4 && ajax.status == 200){

            let dadosJsonText = ajax.responseText

            let dadosJsonOBJ = JSON.parse(dadosJsonText)

            document.getElementById('endereco').value = dadosJsonOBJ.logradouro

            document.getElementById('bairro').value = dadosJsonOBJ.bairro

            document.getElementById('cidade').value = dadosJsonOBJ.localidade

            document.getElementById('uf').value = dadosJsonOBJ.uf

        }

    }

    ajax.send()

}