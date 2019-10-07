<?php
    $title = 'Thank You Page';
    require_once($_SERVER['DOCUMENT_ROOT'] . '/parts/header.php');
?>

<h2 class="main-title">Спасибо за Вашу заявку</h2>
<div class="article">

<!-- <?php
    d($_POST);

    $db = mysqli_connect('localhost', 'root', '', '20180512_32');
    mysqli_set_charset($db, 'utf8');

    $sql ="INSERT INTO leads (id, fio, email, phone, comment) VALUE
        (NuLL, '{$_POST['fio']}', '{$_POST['email']}', '{$_POST['phone']}', '{$_POST['comment']}')
    ";
    $result = mysqli_query($db, $sql);

    if ($result) {
        echo 'Данные успешно добавлены';
    } else {
        echo 'Произошла ошибка';
    }
?> -->

</div>

<?php
    include($_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php');
?>