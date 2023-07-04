const form = document.getElementById('contact-Form');
const nome = [];
const phone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const nomeContacto = document.getElementById('name');
    const phoneContacto = document.getElementById('phone');

    const nomeValue = nomeContacto.value;
    const phoneValue = phoneContacto.value;

    if (phone.includes(phoneValue)) {
        alert(`O número ${phoneValue} já foi inserido.`);
    } else {
        nome.push(nomeValue);
        phone.push(phoneValue);

        let linha = '<tr>';
        linha += `<td>${nomeValue}</td>`;
        linha += `<td>${phoneValue}</td>`;
        linha += '</tr>';

        linhas += linha;
        nomeContacto.value = '';
        phoneContacto.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.getElementById('contact-CorpoTabela');
    corpoTabela.innerHTML = linhas;
}
