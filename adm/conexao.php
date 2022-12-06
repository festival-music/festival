<?php

    $local = "localhost";
    $usuario = "id19912576_gustavo";
    $senha = "Gugucassaro12!";
    $banco = "id19912576_festival";

    $conexao = mysqli_connect($local,$usuario,$senha,$banco);

    
    header("Content-Type: text/html; charset=utf-8");
    mysqli_query($conexao,"SET NAMES 'utf-8'");
    mysqli_query($conexao,"SET character_set_connection = utf8");
    mysqli_query($conexao,"SET character_set_client = utf8");
    mysqli_query($conexao,"SET character_set_results = utf8");
    
    // echo "Banco de Dados ok";

    



?>