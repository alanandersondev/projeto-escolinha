document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastro-form");

	document.getElementById("cpf").addEventListener("input", function (event) {
		let input = event.target;
		let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número

		if (value.length > 11) {
			value = value.substring(0, 11); // Limita de 11 números
		}

		let formatted = value;
		if (value.length > 9) {
			formatted = value.substring(0, 3) + "." + value.substring(3, 6) + "." + value.substring(6, 9) + "-" + value.substring(9);
		} else if (value.length > 6) {
			formatted = value.substring(0, 3) + "." + value.substring(3, 6) + "." + value.substring(6);
		} else if (value.length > 3) {
			formatted = value.substring(0, 3) + "." + value.substring(3);
		}

		input.value = formatted;
	});

	document.getElementById("telefone").addEventListener("input", function (event) {
		let input = event.target;
		let value = input.value.replace(/\D/g, ""); // Remove tudo que não for número

		if (value.length > 11) {
			value = value.substring(0, 11);
		}

		let formatted = "";
		if (value.length > 2) {
			formatted += `(${value.substring(0, 2)}) `;
			value = value.substring(2);
		}
		if (value.length > 5) {
			formatted += `${value.substring(0, 5)}-${value.substring(5)}`;
		} else {
			formatted += value;
		}

		input.value = formatted;
	});

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const primeiroNome = document.getElementById("primeiro-nome").value.trim();
        const ultimoNome = document.getElementById("ultimo-nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const dataNascimento = document.getElementById("data-nascimento").value;
        const responsavel = document.getElementById("responsavel").value.trim();
        const generoSelecionado = document.querySelector('input[name="genero"]:checked');

        const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]{3,30}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
		const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const telefoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (xx) xxxxx-xxxx

        let valido = true;

        if (!nomeRegex.test(primeiroNome)) {
            alert("O primeiro nome deve ter entre 3 e 30 caracteres e não pode conter números.");
            valido = false;
        }
        if (!nomeRegex.test(ultimoNome)) {
            alert("O último nome deve ter entre 3 e 30 caracteres e não pode conter números.");
            valido = false;
        }
        if (!emailRegex.test(email)) {
            alert("Digite um email válido.");
            valido = false;
        }
        if (!cpfRegex.test(cpf)) {
            alert("CPF deve conter exatamente 11 números.");
            valido = false;
        }
        if (!telefoneRegex.test(telefone)) {
            alert("O telefone deve estar no formato (xx) xxxxx-xxxx.");
            valido = false;
        }

        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        if (nascimento > hoje) {
            alert("A data de nascimento não pode ser no futuro.");
            valido = false;
        }

        if (!generoSelecionado) {
            alert("Selecione um gênero.");
            valido = false;
        }

        if (responsavel.length < 2) {
            alert("O campo 'Responsável por' deve ter pelo menos 2 caracteres.");
            valido = false;
        }

        if (valido) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "../PHP/SucessoPais.php"; // Vai pra página sucesso plmds, não aguento mais
        }
    });
});