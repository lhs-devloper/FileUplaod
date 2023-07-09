<?php
    
    $file_name     = $_FILES["files"]["name"];
    $file_type     = $_FILES["files"]["type"];
    $file_size     = $_FILES["files"]["size"];
    $file_tmp_name = $_FILES["files"]["tmp_name"];
    $file_error = $_FILES["files"]["error"];

    var_dump($file_error);

    $upload_directory = '../../uploads';

    for($i = 0; $i < count($file_name); $i++){
        move_uploaded_file($file_tmp_name[$i], $upload_directory.'/'.$file_name[$i]);
    }
    

    // DB에 내용을 저장하면 다운로드도 만들 수 있음

?>