<?php
    include "../adm/conexao.php";

    if(isset($_POST['nome'])){
        //coleta
        $nome = $_POST['nome'];
        $dia = $_POST['dia'];

        //comunicação
        $sql = "insert into ingresso(nomeIngresso,diaIngresso) values('$nome','$dia')";
        $incluir = mysqli_query($conexao, $sql);

        //saida
        if($incluir){
            echo "
                <script>
                    alert('Seu ingresso foi comprado com sucesso!');
                    window.location = '../index.html';
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
            <p> Clique <a href='comprar.html'>aqui</a> para comprar um ingresso </p>
        ";
    }

?>