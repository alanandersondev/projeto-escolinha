<?php
    // Inclui o arquivo de conexão com o banco de dados
    include("conexao.php");

    // Sanitiza e recupera os dados do formulário
    // Usamos mysqli_real_escape_string para evitar injeção de SQL e trim para remover espaços em branco
    $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
    $serie = mysqli_real_escape_string($conexao, trim($_POST['serie']));
    $turno = mysqli_real_escape_string($conexao, trim($_POST['turno']));
    $vagas = mysqli_real_escape_string($conexao, trim($_POST['vagas'])); // Já é um número, mas sanitizar é bom
    $inicio = mysqli_real_escape_string($conexao, trim($_POST['inicio']));
    $fim = mysqli_real_escape_string($conexao, trim($_POST['fim']));
    $horario = mysqli_real_escape_string($conexao, trim($_POST['horario']));
    $professor = mysqli_real_escape_string($conexao, trim($_POST['professor']));
    $disciplinas = mysqli_real_escape_string($conexao, trim($_POST['disciplinas']));

    // Constrói a consulta SQL para inserir dados na tabela 'turmas'
    // Certifique-se de que sua tabela 'turmas' no banco de dados tenha colunas com esses nomes
    $sql = "INSERT INTO turmas (nome, serie, turno, vagas, data_inicio, data_termino, horario_aulas, professores, disciplinas, data_cadastro) VALUES (
        '$nome',
        '$serie',
        '$turno',
        '$vagas',
        '$inicio',
        '$fim',
        '$horario',
        '$professor',
        '$disciplinas',
        NOW()
    )";

    // Executa a consulta SQL
    if ($conexao->query($sql) === TRUE) {
        // Se o cadastro for bem-sucedido, você pode adicionar uma mensagem aqui ou registrar
        // echo "Nova turma cadastrada com sucesso!";
    } else {
        // Lida com erros se a consulta falhar
        echo "Erro ao cadastrar turma: " . $sql . "<br>" . $conexao->error;
    }

    // Fecha a conexão com o banco de dados
    $conexao->close();

    // Redireciona de volta para a página de cadastro de turma (assumindo que o HTML se chama 'cadastroTurma.php' ou similar)
    header('Location: turmas.php'); // Ajuste o nome do arquivo se necessário
    exit;
?>