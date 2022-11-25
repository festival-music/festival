<?php
    include "conexao.php";

    if(isset($_POST['email'])){
        $login = trim($_POST['email']);
        $senha = trim($_POST['senha']);
        
        //escreve a sql
        $sql = "select * from usuarios where login = '$login' and senha = '$senha'";
        //executa a sql
        $testeLogin = mysqli_query($conexao,$sql);
        $existe = mysqli_num_rows($testeLogin);
       
        
        if($existe){
            //carrega a sql em um vetor(array)
            $dados = mysqli_fetch_array($testeLogin);
            $senha = $dados['senhaUsu'];
            $nome = $dados['nomeUsu'];
            $telefone = $dados['telUsu'];
            $email = $dados['emailUsu'];
            $endereco = $dados['endUsu'];

            if(!isset($_SESSION)){
                session_start();
            }

            $_SESSION['nomeUsu'] = $nome;
            $_SESSION['telUsu'] = $telefone;
            $_SESSION['emailUsu'] = $email;
            $_SESSION['endUsu'] = $endereco;



                header('location: ../comprar.php');
        }
        else{
            echo "Usuário ou senha inválidos.";
        }
    }
    

?>