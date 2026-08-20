<?php
	include("conexao.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$matricula_aluno = mysqli_real_escape_string($conexao, trim($_POST['matricula-aluno']));
    
	$name_professor = mysqli_real_escape_string($conexao, trim(md5($_POST['name_professor'])));
	$carga_horaria = mysqli_real_escape_string($conexao, trim($_POST['carga_horaria']));
    $name_option = mysqli_real_escape_string($conexao, trim($_POST['name_option']));
    $description_text = mysqli_real_escape_string($conexao, trim($_POST['description_text'] ?? ''));

     if (empty($name_disciplina) || empty($name_professor) || empty($carga_horaria) || empty($name_option)) {
        header('Location: cadastro.php?erro=campos_vazios');
        exit;
    }

	 $sql = "INSERT INTO disciplinas (
            nome_disciplina,
            nome_professor,
            carga_horaria,
            turno, 
            descricao
        ) 
VALUES ('$name_disciplina', '$name_professor', '$carga_horaria', '$name_option', '$description_text')";

if ($conexao->query($sql) === TRUE) {
        header('Location: sucesso.html?cadastro=sucesso');
    } else {
        echo "Erro ao cadastrar disciplina: " . $conexao->error;
    }

	$conexao->close();
    } else {
	header('Location: disciplina.html');
	
	exit;
}

?>
