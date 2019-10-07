<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/parts/config.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/parts/functions.php');
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo $title; ?> </title>
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <a href="/" id="logo" class="logo"></a>
            <div class="nav-box"> 
                <?php                    
                    $sql = "SELECT * FROM menu ORDER BY priority DESC";
                    $result = mysqli_query($db, $sql);

                    // d(mysqli_fetch_assoc($result));
                    // d(mysqli_fetch_assoc($result));
                    // d(mysqli_fetch_assoc($result));
                    // d(mysqli_fetch_assoc($result));

                    while ( $row = mysqli_fetch_assoc($result)) {
                        echo "<a href= '{$row['href']}' class='{$row['class']}'>{$row['name']} </a>";
                    }

                ?>
                <!-- <a href="/" class="nav">Главная</a>
                <a href="/about.php" class="nav nav-about-us">О нас</a>
                <a href="#" class="nav nav-faq">Оставить вопрос</a>
                <a href="#" class="nav nav-contact">Контакты</a>
                <a href="#" class="nav">Оставить заявку</a>   -->
            </div>
            <div class="burger">
                <div></div>
            </div>
        </div>