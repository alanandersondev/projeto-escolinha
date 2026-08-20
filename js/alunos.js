const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const ultimoNomeInput = document.getElementById('ultimoNome');
const cursoInput = document.getElementById('curso');
const cpfInput = document.getElementById('cpf');
const dataNascimentoInput = document.getElementById('dataNascimento');
const generoInputs = document.getElementsByName('gender');
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;


    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (!nomeInput.value.trim()) {
        document.getElementById('nome-error').textContent = 'Por favor. Insira o primeiro nome.';
        isValid = false;
    }

    if (!ultimoNomeInput.value.trim()) {
        document.getElementById('ultimoNome-error').textContent = 'Por favor. Insira o último nome.';
        isValid = false;
    }

    const cpfRegex = /^\d{11}$/;
    if (!cpfInput.value.trim()) {
        document.getElementById('cpf-error').textContent = 'Por favor. Insira o cpf.';
        isValid = false;
    } else if (!cpfRegex.test(cpfInput.value)) {
        document.getElementById('cpf-error').textContent = 'CPF inválido.';
        isValid = false;
    }

    if (!dataNascimentoInput.value.trim()) {
        document.getElementById('dataNascimento-error').textContent = 'Por favor. Selecione data de nascimento.';
        isValid = false;
    }

    let generoSelecionado = false;
    generoInputs.forEach(input => {
    if (input.checked) {
        generoSelecionado = true;
    }
    });
    if (!generoSelecionado) {
        document.getElementById('genero-error').textContent = 'Por favor. Selecione o gênero.';
        isValid = false;
    }

    if (isValid) {
        alert('Cadastro realizado com sucesso!');   
        form.reset();
    } else {
        alert('Erro no cadastro. Verifique os campos.');
    }
});