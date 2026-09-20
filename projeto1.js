function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosYumara = ['Dosité', 'Ísis', 'Priscila']

    if (ConvidadosYumara.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrar').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrar').innerText = 'Você NÃO pode entrar!'
    }
}
