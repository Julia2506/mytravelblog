// alert('Привет, мир 1!');
// alert('Привет, мир 2!');
// alert('Привет, мир 3!');

// Изменение цвета
//$('body').css('background-color', 'red');
$('body').css('background-color', '#cfccff');

// Плавное появление при загрузке страницы
$('.main-picture-content h1').hide(); // display: none;
$('.main-picture-content h1').fadeIn(5000);
$('.main-picture-content h1').fadeOut(5000); //Исчезновение: opacity: 1 -> 0 за 5 сек; display: none;
$('.main-picture-content h1').fadeIn(5000);

// $('.logo').hide();
// $('.logo').fadeIn(5500);

$('.arrow-up').hide();
$('.arrow-up').fadeIn(2000);

// Появление popup при клике на кнопки
$('.form-request-button-box-content .button').click(function(){
    // alert('Событие, работай');
    $('.form-request-popup').css('display', 'flex').hide().fadeIn(1000);
});

$('.main-picture-content .button').click(function(){
    $('.form-request-popup').css('display', 'flex').hide().fadeIn(1000);
});

$('.nav-box .nav:nth-child(4)').click(function(){
    $('.form-request-popup').css('display', 'flex').hide().fadeIn(1000);
});

// Закрытие popup, клик на крестик
$('.form-request-popup-content-close').click(function(){
    $('.form-request-popup').fadeOut(1000);
});

//Описание карточки, открыть-закрыть по клику
$('.cards-block-item').click(function(){
    $(this).find('p').slideToggle(1000);
    
});
// Вопрос-ответ
$('.questions-box-item').click(function(){
    if ($(this).find('.questions-box-item-a').css('display') == 'none') {
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left':0,
            'opacity':1
        },1000);
    } else {
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left': '-50px',
            'opacity':0
        },1000);
    }
    $(this).find('.questions-box-item-a').slideToggle(1000);
});

// Произвольные анимации
// Увеличение - уменьшение картинок
$('.cards-block-item-pic').click(function(){

    if ($(this).css('height') == '120px') {

        $(this).animate({
            'height': '150px'
        },500);

    } else {
        $(this).animate({
            'height': '120px'
        },500);
    } 
});

// $('.header .logo').click(function(){
//     if($(this).css('padding') == '18px') {
//         $(this).animate({
//             'padding': '20px'
//         },500);
//     } else {
//         $(this).animate({
//             'padding': '18px'
//         },500);
//     }
// });

// $('.header .nav-box a'). click(function(){
//     $(this).animate({
//         'font-size': '25px'
//     },500);
//     $(this).animate({
//         'font-size': '20px'
//     },5000);
// });

// Плавный скролл
$('.arrow-up').click(function(){
    $('html, body').animate({
        scrollTop: 600
    },1000);
});

$('.nav-about-us').click(function(){
    $('html, body').animate({
        scrollTop: $('.main-title').offset().top - $('.header').outerHeight()
    },1000);
});

$('.nav-faq').click(function(){
    $('html, body').animate({
        scrollTop: $('.form-request-button-box').offset().top - $('.header').outerHeight()
    },1000);
});

$('.nav-contact').click(function(){
    $('html, body').animate({
        scrollTop: 0 + $('body').outerHeight()
    },1000);
});

// Валидация формы
let errorElemet = $('.error-message');
  
        
$('form').submit(function(e){
    // e.preventDefault();

    let fioVal = $(this).find("[name='fio']").val();
    let emailVal = $(this).find("[name='email']").val();
    let phoneVal = $(this).find("[name='phone']").val();
    

    if ( fioVal == '' || emailVal == '' || phoneVal == '') {

        let errorMessage = 'Вы не  заполнили поля:';

        $(this).find('button').addClass('disabled');

        if (fioVal == '' ) {
            $(this).find("[name='fio']").addClass('error');
            errorMessage = errorMessage + ' ФИО;';
           
        } else {
            $(this).find("[name='fio']").removeClass('error');
        }
        if (emailVal == '') {
            $(this).find("[name='email']").addClass('error');
            errorMessage = errorMessage + ' Email;';
        } else {
            $(this).find("[name='email']").removeClass('error');
        }
        if (phoneVal == '') {
            $(this).find("[name='phone']").addClass('error');
            errorMessage = errorMessage + ' Телефон;';
        } else {
            $(this).find("[name='phone']").removeClass('error');
        }

        errorElemet.slideDown();
        errorElemet.html(errorMessage);

    } else {
        errorElemet.slideUp(); 
        $(this).find("[name='fio']").removeClass('error');
        $(this).find("[name='email']").removeClass('error');
        $(this).find("[name='phone']").removeClass('error');
        $('button').removeClass('disabled'); 
        $(form).submit();
    }
});

$("[name='fio'], [name='email'], [name='phone']").keyup(function(e){

    let errorMessage = 'Вы не  заполнили поля:';

    // console.log(e.keyCode);
    // ctrl - 17, shift - 16, esc - 27, tab - 9

    if (e.keyCode != 9 && e.keyCode != 16 && e.keyCode != 17 && e.keyCode != 27 ) {

        let fioLength = $('form').find("[name='fio']").val().length;
        let emailength = $('form').find("[name='email']").val().length;
        let phoneength = $('form').find("[name='phone']").val().length;
            
        if (fioLength < 2  || fioLength > 24) {
            errorMessage = errorMessage + ' ФИО;';
        }
    
        if (emailength < 2 || emailength > 24) {
            errorMessage = errorMessage + ' Email;';
        }
       
        if (phoneength < 2 || phoneength > 24) {
            errorMessage = errorMessage + ' Телефон;';
        }
         
        errorElemet.html(errorMessage);  

        if (($(this).val().length >= 2 && $(this).val().length <= 24)) {
            $(this).removeClass('error');
            if ($('form').find('input.error').length == 0) {
                $('form').find('button').removeClass('disabled');
                errorElemet.slideUp();
            }
          
        } else { 
            $(this).addClass('error');
            $('form').find('button').addClass('disabled');
            errorElemet.slideDown();
        }  
    }
});


$(window).keydown(function(e){
    if(e.keyCode == 27){
        $('.form-request-popup').fadeOut();
    }
});

$('.form-request-popup').click(function(){
    $(this).fadeOut();
});

$('.form-request-popup-content').click(function(e){
    e.stopPropagation();
});


// Cлайдер

// $('.main-picture').click(function(){

//     if( $(this).hasClass('photo1')) {
        
//         $(this).animate({'opacity': 0},500, function() {
//         $(this).removeClass('photo1').addClass('photo2');
//     });
//         $(this).delay(500).animate({'opacity': 1},500); 
//     } 

//     if( $(this).hasClass('photo2')) {
        
//         $(this).animate({'opacity': 0},500, function() {
//         $(this).removeClass('photo2').addClass('photo3');
//     });
//         $(this).delay(500).animate({'opacity': 1},500); 
//     } 

//     if( $(this).hasClass('photo3')) {
        
//         $(this).animate({'opacity': 0},500, function() {
//         $(this).removeClass('photo3').addClass('photo1');
//     });
//         $(this).delay(500).animate({'opacity': 1},500); 
//     }    

// });

let slider = $('.main-picture-slider-content');
let sliderItems = slider.find('.main-picture-slider-content-item');

let currentIndex = 0;

slider.find('.main-picture-slider-content-arrow-left').click(function(){
    if(currentIndex <= 0) {
        sliderItems.eq(currentIndex).hide();
        currentIndex = sliderItems.length-1;
        sliderItems.eq(currentIndex).css('display', 'flex');
    } else {
        sliderItems.eq(currentIndex).hide();
        sliderItems.eq(currentIndex - 1).css('display', 'flex');
        currentIndex = currentIndex - 1;
    }
});

slider.find('.main-picture-slider-content-arrow-right').click(function(){
    if(currentIndex >= sliderItems.length-1) {
        sliderItems.eq(currentIndex).hide();
        currentIndex = 0;
        sliderItems.eq(currentIndex).css('display', 'flex');        
    } else {
        sliderItems.eq(currentIndex).hide();
        sliderItems.eq(currentIndex + 1).css('display', 'flex');
        currentIndex = currentIndex + 1;
    }
});

setInterval(function(){
    slider.find('.main-picture-slider-content-arrow-right').click();
},7000);

// Меню для адаптивной версии
$('.burger').click(function(){
    $('.header').toggleClass('open');
},);
$('.header .nav-box a').click(function(){
    $('.header').removeClass('open');
});
