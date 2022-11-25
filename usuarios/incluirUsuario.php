<?php
    include "../adm/conexao.php";

    if(isset($_POST['nome'])){
        //coleta
        $senha = $_POST['senha'];
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $telefone = $_POST['tel'];
        $end = $_POST['end'];


        //comunicação
        $sql = "insert into usuarios(nomeUsu,emailUsu,senhaUsu,telUsu,endUsu) values('$nome','$email','$senha','$telefone','$end')";
        $incluir = mysqli_query($conexao, $sql);

        //saida
        if($incluir){
            echo "
                <script>
                    alert('Usuário cadastrado com sucesso');
                    window.location = '../login.php';
                </script>

            ";
        } else {
            echo "
            <p> Sistema indisponivel</p>
        ";
        }

    } else {
        echo "
            <p> Esta é uma pagina de tratamento de dados</p>
            <p> Clique <a href='formularioUsuario.php'>aqui</a> para incluir um usuario </p>
        ";
    }

?>