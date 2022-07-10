const cep = document.querySelector('#input-cep');

cep.addEventListener('keyup', () => {
    if (cep.value.length === 8) {
        return getCEP(cep.value);
    }
})

function getCEP (cep) {
    let url = `https://viacep.com.br/ws/${cep}/json`;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);

    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let dadosJsonText = xmlHttp.responseText;
            let dadosJsonObj = JSON.parse(dadosJsonText);

            document.querySelector('#input-endereco').value = dadosJsonObj.logradouro;
            document.querySelector('#input-bairro').value = dadosJsonObj.bairro;
            document.querySelector('#input-estado').value = dadosJsonObj.localidade;
            document.querySelector('#input-uf').value = dadosJsonObj.uf;
            document.querySelector('#input-complemento').value = dadosJsonObj.complemento;
            document.querySelector('#input-ibge').value = dadosJsonObj.ibge;
            document.querySelector('#input-ddd').value = dadosJsonObj.ddd;
        }
    }
    xmlHttp.send();
}
