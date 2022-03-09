const CEP = new Promise((resolve, reject) => {
    var NUMBER = document.getElementById("cep").value;

    if (NUMBER == 'A') {
        resolve("Esse deu certo");
    } else {
        reject("DEu erro");
    }
});

CEP
    .then((dado) => {
        var dado = document.getElementById("cep").value;
        var SIT = dado
        document.getElementById("SITUACAO").innerHTML = SIT
        console.log(SIT);
        return SIT.toLowerCase();
    })

.then((dadoModificado) => {
    console.log(dadoModificado);
    return dadoModificado.toUpperCase();
})

.then((dadodoisModificado) => {
    console.log(dadodoisModificado);
})

.catch((erro) => {
    console.log(erro)
})