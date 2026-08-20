<?php
    // Inclui o arquivo de conexão com o banco de dados
    include("conexao.php");

    // Sanitiza e recupera os dados do formulário
    $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
    $ultimoNome = mysqli_real_escape_string($conexao, trim($_POST['ultimoNome']));
    $matricula = mysqli_real_escape_string($conexao, trim($_POST['matricula']));
    $curso = mysqli_real_escape_string($conexao, trim($_POST['curso']));
    $cpf = mysqli_real_escape_string($conexao, trim($_POST['cpf']));
    $dataNascimento = mysqli_real_escape_string($conexao, trim($_POST['dataNascimento']));
    $genero = mysqli_real_escape_string($conexao, trim($_POST['gender'])); // 'gender' é o nome do seu grupo de rádio

    // Constrói a consulta SQL para inserir dados na tabela 'alunos'
    // Certifique-se de que sua tabela 'alunos' tenha colunas que correspondam a esses nomes (nome, ultimo_nome, matricula, curso, cpf, data_nascimento, genero, data_cadastro)
    $sql = "INSERT INTO alunos (nome, ultimo_nome, matricula, curso, cpf, data_nascimento, genero, data_cadastro) VALUES (
        '$nome',
        '$ultimoNome',
        '$matricula',
        '$curso',
        '$cpf',
        '$dataNascimento',
        '$genero',
        NOW()
    )";

    // Executa a consulta SQL
    if ($conexao->query($sql) === TRUE) {
        // Você pode adicionar uma mensagem de sucesso ou registrar aqui, se necessário
        // echo "Novo registro criado com sucesso";
    } else {
        // Lida com erros se a consulta falhar
        echo "Erro: " . $sql . "<br>" . $conexao->error;
    }

    // Fecha a conexão com o banco de dados
    $conexao->close();

    // Redireciona de volta para a página de cadastro (ou uma página de sucesso)
    header('Location: cadastro.php'); // Assumindo que seu arquivo HTML se chama cadastro.php ou similar
    exit;
?>