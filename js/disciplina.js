document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro_disciplina');
    const name_Disciplina = document.getElementById('name_Disciplina');
    const name_Professor = document.getElementById('name_Professor');
    const carga_horaria = document.getElementById('carga_horaria');
    const name_option = document.getElementById('name_option');

    const errorNameDisciplina = document.getElementById('error-name_disciplina');
    const errorNameProfessor = document.getElementById('error-name_professor');
    const errorCargaHoraria = document.getElementById('error-carga_horaria');
    const errorNameOption = document.getElementById('error-name_option');
    const errorGlobal = document.getElementById('error-global');

   
    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block'; 
    }

    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none'; 
    }

    function validateDisciplina() {
        let isValid = true;
        const disciplineValue = name_Disciplina.value.trim();
        clearError(errorNameDisciplina);

        if (disciplineValue === '') {
            showError(errorNameDisciplina, 'Nome da Disciplina é obrigatório.');
            isValid = false;
        } else if (disciplineValue.length < 3) {
            showError(errorNameDisciplina, 'Nome da Disciplina deve ter no mínimo 3 caracteres.');
            isValid = false;
        } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(disciplineValue)) {
            showError(errorNameDisciplina, 'Nome da Disciplina deve conter apenas letras e espaços.');
            isValid = false;
        }
        return isValid;
    }

    function validateProfessor() {
        let isValid = true;
        const professorValue = name_Professor.value.trim();
        clearError(errorNameProfessor);

        if (professorValue === '') {
            showError(errorNameProfessor, 'Nome do Professor é obrigatório.');
            isValid = false;
        } else if (professorValue.length < 3) {
            showError(errorNameProfessor, 'Nome do Professor deve ter no mínimo 3 caracteres.');
            isValid = false;
        } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(professorValue)) { 
            showError(errorNameProfessor, 'Nome do Professor deve conter apenas letras e espaços.');
            isValid = false;
        }
        return isValid;
    }

    function validateCargaHoraria() {
        let isValid = true;
        const cargaHorariaValue = carga_horaria.value.trim();
        clearError(errorCargaHoraria);

        if (cargaHorariaValue === '') {
            showError(errorCargaHoraria, 'Carga Horária é obrigatória.');
            isValid = false;
        } else if (isNaN(cargaHorariaValue) || parseInt(cargaHorariaValue) <= 0) {
            showError(errorCargaHoraria, 'Carga Horária deve ser um número positivo.');
            isValid = false;
        }
        return isValid;
    }

    function validateTurno() {
        let isValid = true;
        clearError(errorNameOption);

        if (name_option.value === '' || name_option.value === 'Selecione:') {
            showError(errorNameOption, 'Selecione um Turno.');
            isValid = false;
        }
        return isValid;
    }

    name_Disciplina.addEventListener('blur', validateDisciplina);
    name_Professor.addEventListener('blur', validateProfessor);
    carga_horaria.addEventListener('blur', validateCargaHoraria);
    name_option.addEventListener('change', validateTurno);


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        clearError(errorGlobal); 

        const isDisciplinaValid = validateDisciplina();
        const isProfessorValid = validateProfessor();
        const isCargaHorariaValid = validateCargaHoraria();
        const isTurnoValid = validateTurno();

        if (isDisciplinaValid && isProfessorValid && isCargaHorariaValid && isTurnoValid) {

            alert('Formulário enviado com sucesso!');

        } else {
            showError(errorGlobal, 'Por favor, corrija os erros no formulário antes de enviar.');
        }
    });
});