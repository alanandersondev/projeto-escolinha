const form = document.getElementById('cadastroTurmaForm');
const nomeInput = document.getElementById('nome');
const serieInput = document.getElementById('serie');
const turnoInput = document.getElementById('turno');
const vagasInput = document.getElementById('vagas');
const inicioInput = document.getElementById('inicio');
const fimInput = document.getElementById('fim');
const horarioInputs = document.getElementById('horario');
const professorInputs = document.getElementById('professor');
const disciplinaInputs = document.getElementById('disciplinas');
const mensagemDiv = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    if (!nomeInput.value.trim()) {
        document.getElementById('nomeError').textContent = 'Por favor. Insira o nome da turma.';
        isValid = false;
    }

    if (!serieInput.value.trim()) {
        document.getElementById('serieError').textContent = 'Por favor. Insira a série/Ano.';
        isValid = false;
    }

    if (!turnoInput.value.trim()) {
        document.getElementById('turnoError').textContent = 'Por favor. Selecione o turno.';
        isValid = false;
    }

    if (!vagasInput.value.trim() || isNaN(vagasInput.value) || parseInt(vagasInput.value) <= 9) {
        document.getElementById('vagasError').textContent = 'Campo inválido. este campo deve conter no minimo 10 vagas';
        isValid = false;
    }

    if (!inicioInput.value.trim()) {
        document.getElementById('inicioError').textContent = 'Por favor. Selecione a data de início.';
        isValid = false;
    }

    if (!fimInput.value.trim()) {
        document.getElementById('fimError').textContent = 'Por favor. Selecione a data de fim.';
        isValid = false;
    }

    if (!horarioInputs.value.trim()) {
        document.getElementById('horarioError').textContent = 'Por favor. Insira o horário.';
        isValid = false;
    }

    if (!professorInputs.value.trim()) {
        document.getElementById('professorError').textContent = 'Por favor. Insira o nome do professor.';
        isValid = false;
    }

    if (!disciplinaInputs.value.trim()) {
        document.getElementById('disciplinasError').textContent = 'Por favor. Insira a disciplina.';
        isValid = false;
    }

    if (isValid) {
        alert('Cadastro realizado com sucesso!');   
        form.reset();
    } else {
        alert('Erro no cadastro. Verifique os campos.');
    }
});