<?php
    include("conexao.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $matricula_aluno = mysqli_real_escape_string($conexao, trim($_POST['matricula-aluno']));
        
        $matematica_nota1 = (float)mysqli_real_escape_string($conexao, trim($_POST['matematica_nota1']));
        $matematica_nota2 = (float)mysqli_real_escape_string($conexao, trim($_POST['matematica_nota2']));
        
        $portugues_nota1 = (float)mysqli_real_escape_string($conexao, trim($_POST['portugues_nota1']));
        $portugues_nota2 = (float)mysqli_real_escape_string($conexao, trim($_POST['portugues_nota2']));
        
        $ciencias_nota1 = (float)mysqli_real_escape_string($conexao, trim($_POST['ciencias_nota1']));
        $ciencias_nota2 = (float)mysqli_real_escape_string($conexao, trim($_POST['ciencias_nota2']));
        
        $educacao_fisica_nota1 = (float)mysqli_real_escape_string($conexao, trim($_POST['educacao_fisica_nota1']));
        $educacao_fisica_nota2 = (float)mysqli_real_escape_string($conexao, trim($_POST['educacao_fisica_nota2']));
        
        $historia_geografia_nota1 = (float)mysqli_real_escape_string($conexao, trim($_POST['historia_geografia_nota1']));
        $historia_geografia_nota2 = (float)mysqli_real_escape_string($conexao, trim($_POST['historia_geografia_nota2']));

        if (
            $matricula_aluno === '' ||
            $matematica_nota1 < 0 || $matematica_nota1 > 10 || $matematica_nota2 < 0 || $matematica_nota2 > 10 ||
            $portugues_nota1 < 0 || $portugues_nota1 > 10 || $portugues_nota2 < 0 || $portugues_nota2 > 10 ||
            $ciencias_nota1 < 0 || $ciencias_nota1 > 10 || $ciencias_nota2 < 0 || $ciencias_nota2 > 10 ||
            $educacao_fisica_nota1 < 0 || $educacao_fisica_nota1 > 10 || $educacao_fisica_nota2 < 0 || $educacao_fisica_nota2 > 10 ||
            $historia_geografia_nota1 < 0 || $historia_geografia_nota1 > 10 || $historia_geografia_nota2 < 0 || $historia_geografia_nota2 > 10
        ) {
            header('Location: ../notas.html?erro=dados_invalidos');
            exit;
        }

        $matematica_media = ($matematica_nota1 + $matematica_nota2) / 2;
        $portugues_media = ($portugues_nota1 + $portugues_nota2) / 2;
        $ciencias_media = ($ciencias_nota1 + $ciencias_nota2) / 2;
        $educacao_fisica_media = ($educacao_fisica_nota1 + $educacao_fisica_nota2) / 2;
        $historia_geografia_media = ($historia_geografia_nota1 + $historia_geografia_nota2) / 2;

        $sql = "INSERT INTO notas (
                    matricula_aluno,
                    matematica_nota1, matematica_nota2, matematica_media,
                    portugues_nota1, portugues_nota2, portugues_media,
                    ciencias_nota1, ciencias_nota2, ciencias_media,
                    educacao_fisica_nota1, educacao_fisica_nota2, educacao_fisica_media,
                    historia_geografia_nota1, historia_geografia_nota2, historia_geografia_media
                )
                VALUES (
                    '$matricula_aluno',
                    '$matematica_nota1', '$matematica_nota2', '$matematica_media',
                    '$portugues_nota1', '$portugues_nota2', '$portugues_media',
                    '$ciencias_nota1', '$ciencias_nota2', '$ciencias_media',
                    '$educacao_fisica_nota1', '$educacao_fisica_nota2', '$educacao_fisica_media',
                    '$historia_geografia_nota1', '$historia_geografia_nota2', '$historia_geografia_media'
                )";

        if ($conexao->query($sql) === TRUE) {
            header('Location: ../sucesso.html?cadastro=sucesso');
        } else {
            echo "Erro ao cadastrar notas: " . $conexao->error;
        }

        $conexao->close();

    } else {
        header('Location: ../notas.html');
        exit;
    }
?>