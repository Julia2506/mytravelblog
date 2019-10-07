<?php
    $title = "Главная страница";
    include('parts/header.php');
?>
        <div class="main-picture" id="top">
            <div class="main-picture-content">
                <h1>Только красивые путешествия!</h1>
                <div class="button">присоединяйся </div>
            </div>
            <div class="main-picture-slider">
                <div class="main-picture-slider-content">
                    <div class="main-picture-slider-content-item"></div>
                    <div class="main-picture-slider-content-item"></div>
                    <div class="main-picture-slider-content-item"></div>
                    <div class="main-picture-slider-content-item"></div>
                    <div class="main-picture-slider-content-item"></div>
                    <div class="main-picture-slider-content-arrow-left"></div>
                    <div class="main-picture-slider-content-arrow-right"></div>
                </div>
            </div>
            <div class="main-picture-scroll-box">
                <div class="main-picture-scroll-box-content"></div>
            </div>
            <div class="main-picture-social-buttons">
                <div class="main-picture-social-buttons-btn vk"></div>
                <div class="main-picture-social-buttons-btn fb"></div>
                <div class="main-picture-social-buttons-btn insta"></div>
            </div>
        </div>
        <h2 class="main-title">Путешествуй красиво! Блог в фотографиях</h2>
        <div class="article">
            <p>Представьте себе все лучшее, что есть в России: широкие просторы, разнообразная природа, щедрая душа, девушки особой красоты, баня в конце концов. Добавьте к этому все то, чем так привлекательна Москва: гастрономические рестораны, безудержные вечеринки, звезды ТВ и инстаграмма вокруг. Взболтайте, но не смешивайте и получите Розу Хутор 2017 – правильный баланс здорового лайфстайла и роскоши.</p>
            <p>Красная поляна также радует своей доступностью: перелет занимает 2,5 часа, иметь визу необходимости нет, заказать такси можно через привычное приложение за 1400 руб., а время в пути от аэропорта до отеля составляет менее часа! Ну, где еще такое есть? При этом местная инфраструктура не просто ничуть не уступает Альпам, но и даже предвосхищает ожидания: здесь вкуснее, уютнее и веселее. Я уже не говорю об удивительном контрасте температур – наверху зима, а внизу лето!</p>
            <p>Более того, несмотря на весну за окном, успеть все это оценить лично совсем не поздно – рекордное количество снега обещает продлить сезон на весь апрель, а курорт тем временем предлагает на этот период очень привлекательные цены!</p>
            <p>В общем, какое бы время вы ни выбрали, Роза Хутор удивит и подарит желание говорить о России с восторгом!</p>
        </div>
        <div class="cards-block">
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-moscow"></div>
                <h3>Путешествия по России</h3>
                <p>
                    Самые интересные уголки России<br>
                    Самые необычные маршруты
                </p>
            </div>
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-big-ben"></div>
                <h3>Путешествия по Европе</h3>
                <p>Разные страны, разные культуры, исторические места и все самое интересное в современной Европе!</p>
            </div>
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-pyramids"></div>
                <h3>Путешествия по Африке</h3>
                <p>Дикая природа, крокодилы, обезьяны, сафари на джипах, гостиницы на деревьях и самые опасные приключения ждут тебя!</p>
            </div>
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-north-america"></div>
                <h3>Путешествия по Северной Америке</h3>
                <p>Конечно, мы проедем через всю Америку и побываем как в главных туристических местах, так и в уголках, где почти не ступала нога человека.</p>
            </div>
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-south-america"></div>
                <h3>Путешествия по Южной Америке</h3>
                <p>Южная Америка - место, где хочет побывать каждый. Богатые районы и заброшенные фавелы, опасности и приключения, темпераментные люди и многое другое на страницах наших путешествий.</p>
            </div>
            <div class="cards-block-item">
                <div class="cards-block-item-pic pic-kangaroo"></div>
                <h3>Путешествия по Австралии</h3>
                <p>Мы побываем на отдельном континенте. Почему-то думая об Австралии, сразу представляешь кенгуру, хотя это совершенно не символ страны.</p>
            </div>
        </div>
        <div class="form-request">
            <div class="form-request-button-box">
                <div class="form-request-button-box-content">
                    <h2>Отправьте нам вопрос, и мы ответим в ближайшее время</h2>
                    <div class="button">отправить вопрос</div>
                </div>
            </div>
            <div class="form-request-popup">
                <div class="form-request-popup-content">
                    <div class="logo"></div>
                    <div class="form-request-popup-content-close">
                        <div class="cross"></div>
                    </div>
                   <h3>Напишитe нам:</h3>
                   <form method="POST" action="thank.php">
                        <input type="text" name="fio" placeholder="ФИО">
                        <input type="email" name="email" placeholder="Email">
                        <input type="tel" name="phone" placeholder="Ваш телефон">
                        <textarea name="comment" placeholder="Ваш комментарий"></textarea>
                        <div class="checkbox">
                            <input type="checkbox" name="ok"> Я согласен на обработку персональных данных
                        </div>
                        <button type="submit">Отправить</button>
                        <div class="error-message"></div>
                   </form> 
                </div>
            </div>
        </div>
        <div class="questions">
            <h2>Вопросы и ответы</h2>
            <div class="questions-box">
                <div class="questions-box-item">
                    <div class="questions-box-item-q">У Вас есть скидки?</div>
                    <div class="questions-box-item-a"><p>Нет</p></div>
                </div>
                <div class="questions-box-item">
                    <div class="questions-box-item-q">У Вас есть скидки?</div>
                    <div class="questions-box-item-a"><p>Нет</p></div>
                </div>
                <div class="questions-box-item">
                    <div class="questions-box-item-q">У Вас есть скидки?</div>
                    <div class="questions-box-item-a"><p>Нет</p></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-contacts">
                <h2 class="contacts">Мы рядом с Вами:</h2>
                <p class="address">Москва, ул. Комсомола 12 оф.234</p>
                <p>Тел: 8(495)626-46-00</p>
                <p>E-mail: travel@mytravel.ru</p>
                <p>Часы работы: пн-пт 10:00-18:00</p>
                <div class="footer-social-buttons">
                    <div class="footer-social-buttons-btn vk"></div>
                    <div class="footer-social-buttons-btn fb"></div>
                    <div class="footer-social-buttons-btn insta"></div>
                </div>
            </div>
            <div class="footer-logo"></div>
            <div class="footer-nav">
                <a href="#">Путешествия по России</a> <br>
                <a href="#">Путешествия по Европе</a> <br>
                <a href="#">Путешествия по Африке</a> <br>
                <a href="#">Путешествия по Северной Америке</a> <br>
                <a href="#">Путешествия по Южной Америке</a> <br>
                <a href="#">Путешествия по Австралии</a>
            </div>
        </div> 
    </div>
<?php
    include('parts/footer.php');
?>   