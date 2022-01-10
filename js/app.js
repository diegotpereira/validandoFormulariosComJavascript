function validar() {

    var nome = form1.nome.value
    var email = form1.email.value
    var senha = form1.senha.value
    var rep_senha = form1.rep_senha.value

    if (nome == "") {
        alert('Por favor, preencha o campo nome')
        form1.nome.focus()

        return false
    }
    if (nome.length < 5) {
        alert('Por favor, digite seu nome completo')
        form1.nome.focus()

        return false
    }

    if (email == "") {
        alert('Por favor, digite um email válido.')
        form1.email.focus()

        return false
    }

    if (senha != rep_senha) {
        alert('Por favor, digite senha iguais')
        form1.senha.focus()

        return false
    }
}