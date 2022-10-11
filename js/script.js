function valuetipo(){
    //entrada
    let tipo = document.form.tipo.value;

    //processamento
    if(tipo == "acrilico"){
        valor = 10;
    }
    else if(tipo == "antiqueda"){
        valor = 12;
    }
    else if(tipo == "silicone"){
        valor = 15;
    }

    //saida
    document.getElementById("res").value = valor;

    document.getElementById("glitter").checked = false;
    document.getElementById("name").checked = false;
    document.getElementById("numero").checked = false;
    document.getElementById("foto").checked = false;
}
function valuea(valor, marcado){
    //entrada
    total = document.getElementById("res").value;

    //processamento
    if(marcado){
        total = Number(total) + Number(valor);
    }
    else {
        total = Number(total) - Number(valor)
    }

    //saida
    document.getElementById("res").value = total;
}
function envia(form){
    if(form.email.value == "") {
        alert("O Campo email é obrigatório")
        form.email.focus();
        return false;
    } 
    else if(form.senha.value == "") {
        alert("O Campo senha é obrigatório")
        form.senha.focus();
        return false;
    } 
    else if(form.nome.value == "") {
        alert("O Campo nome é obrigatório")
        form.nome.focus();
        return false;
    } 
    else if(form.cpf.value == "") {
        alert("O Campo cpf é obrigatório")
        form.cpf.focus();
        return false;
    } 
    else if(form.tel.value == "") {
        alert("O Campo Telefone é obrigatório")
        form.tel.focus();
        return false;
    } 
    else if(form.endereco.value == "") {
        alert("O Campo Endereço é obrigatório")
        form.endereco.focus();
        return false;
    } 
    else if(form.city.value == ""){
        alert("O Campo Cidade é obrigatório")
        form.city.focus();
        return false;
    }
    else if(form.state.value == "0"){
        alert("O Campo Estado é obrigatório")
        form.state.focus();
        return false;
    }
    else if(form.marca.value == "0"){
        alert("O Campo Marca é obrigatório")
        form.marca.focus();
        return false;
    }
    else if(form.nmod.value == ""){
        alert("O Campo Nome do Modelo é obrigatório")
        form.nmod.focus();
        return false;
    }
    else if(form.res.value == "0") {
        alert("Impossível enviar o formulário com valor 0")
        return false;
    }
    else if(form.senha.value != form.senha2.value){
        alert("As senhas não coincidem");
        return false;
    }

    var chk1 = document.form.check.checked;
    if(chk1 == false){
        alert("Você não aceitou os termos")
        return false
    } else {
        return true
    }
}

function senhas(){
    senha1 = document.form.senha.value;
    senha2 = document.form.senha2.value;

    
    if(senha1 != senha2) {
        document.getElementById("msg").style.display = "block";
    }
    else {
        document.getElementById("msg").style.display = "none";
    }
}
function mascara_cpf(obj){
    if(obj.value.length == 3){
        obj.value += "."
    }
    else if(obj.value.length == 7){
        obj.value += "."
    }
    else if(obj.value.length == 11){
        obj.value += "-"
    }
}
function mascara_tel(obj) {
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}
function somente_numero(e){
    tecla = (window.event)?event.keyCode:e.witch;

    if((tecla >= 48 && tecla <=57) || (tecla>=96 && tecla<=105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46)){
        return true;
    }
    else {
        return false;
    }
}