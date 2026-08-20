document.addEventListener('DOMContentLoaded', () => {
    const disciplinas = [
        "matematica",
        "portugues",
        "ciencias",
        "educacao_fisica",
        "historia_geografia"
    ];

    const inputMatriculaAluno = document.getElementById('matricula-aluno');
    const errorMatriculaSpan = document.getElementById('error-matricula');
    const errorGeralSpan = document.getElementById('error-geral');
    const resultadoDiv = document.getElementById('resultado');

    disciplinas.forEach(disciplina => {
        const nota1Input = document.getElementById(`${disciplina}_nota1`);
        const nota2Input = document.getElementById(`${disciplina}_nota2`);
        
        if (nota1Input && nota2Input) {
            nota1Input.addEventListener('input', () => validarECalcular(disciplina));
            nota2Input.addEventListener('input', () => validarECalcular(disciplina));
        } else {
            console.warn(`Elementos para ${disciplina} não encontrados. Verifique os IDs no HTML.`);
        }
    });

    function validarECalcular(disciplina) {
        const nota1Input = document.getElementById(`${disciplina}_nota1`);
        const nota2Input = document.getElementById(`${disciplina}_nota2`);
        const mediaCell = document.getElementById(`media-${disciplina}`);

        if (!nota1Input || !nota2Input || !mediaCell) {
            console.error(`Um ou mais elementos para a disciplina ${disciplina} não foram encontrados.`);
            return;
        }

        let nota1 = parseFloat(nota1Input.value);
        let nota2 = parseFloat(nota2Input.value);

        nota1Input.classList.remove('invalido');
        nota2Input.classList.remove('invalido');
        if (mediaCell) mediaCell.textContent = '-';

        if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
            nota1Input.classList.add('invalido');
            resultadoDiv.textContent = `Por favor, insira notas válidas entre 0 e 10 para ${disciplina}.`;
            resultadoDiv.style.color = '#fbe505';
            return;
        }

        if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
            nota2Input.classList.add('invalido');
            resultadoDiv.textContent = `Por favor, insira notas válidas entre 0 e 10 para ${disciplina}.`;
            resultadoDiv.style.color = '#fbe505';
            return;
        }

        const media = (nota1 + nota2) / 2;
        if (mediaCell) {
            mediaCell.textContent = media.toFixed(2);
        }
        resultadoDiv.textContent = '';
        resultadoDiv.style.color = '';
    }

    function validarMatriculaAluno() {
        const matricula = inputMatriculaAluno.value.trim();
        const matriculaRegex = /^\d{5,10}$/; 

        if (!matriculaRegex.test(matricula)) {
            inputMatriculaAluno.classList.add('invalido');
            errorMatriculaSpan.textContent = 'A matrícula deve conter apenas números (5 a 10 dígitos).';
            resultadoDiv.style.color = '#fbe505';
            return false;
        } else {
            inputMatriculaAluno.classList.remove('invalido');
            errorMatriculaSpan.textContent = '';
            return true;
        }
    }

    if (inputMatriculaAluno) {
        inputMatriculaAluno.addEventListener('input', validarMatriculaAluno);
    }
    
    const salvarButton = document.querySelector('button[type="submit"]'); 
    
    if (salvarButton) {
        salvarButton.addEventListener('click', (event) => {
            event.preventDefault();

            let matriculaValida = validarMatriculaAluno();
            if (!matriculaValida) {
                errorGeralSpan.textContent = 'Por favor, verifique a matrícula.';
                errorGeralSpan.style.color = '#fbe505';
                return;
            }

            let todasAsNotasValidas = true;
            disciplinas.forEach(disciplina => {
                const nota1Input = document.getElementById(`${disciplina}_nota1`);
                const nota2Input = document.getElementById(`${disciplina}_nota2`);

                validarECalcular(disciplina);

                if (nota1Input && nota2Input && (nota1Input.classList.contains('invalido') || nota2Input.classList.contains('invalido'))) {
                    todasAsNotasValidas = false;
                }
            });

            if (todasAsNotasValidas) {
                errorGeralSpan.textContent = '';
                resultadoDiv.textContent = `Todas as médias foram calculadas com sucesso!`;
                resultadoDiv.style.color = 'green';
                

            } else {
                resultadoDiv.textContent = 'Por favor, corrija as notas inválidas.';
                resultadoDiv.style.color = '#f5464f';
                errorGeralSpan.textContent = 'Existem notas inválidas. Por favor, verifique.';
                errorGeralSpan.style.color = '#f5464f';
            }
        });
    } else {
        console.warn("Botão 'Salvar' não encontrado. Verifique o seletor.");
    }
});