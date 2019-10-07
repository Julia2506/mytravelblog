let slider = $('.slider');
let sliderLenta = slider.find('.slider-lenta');

let sliderItems = slider.find('.slider-lenta-item.real');
let sliderBullets = slider.find('.slider-bullets button');
let nowShowIndex = 0;

sliderLenta.css('width', (sliderItems.length + 2) * 100 + '%');

slider.find('.slider-lenta-arrow-left').click(function(){
    // sliderLenta.css('left', -100 * nowShowIndex + '%');
    if (sliderLenta.hasClass('animated')) {
        return;
    }

    sliderLenta.addClass('animated');
    if (nowShowIndex <= 0) {
        nowShowIndex = nowShowIndex -1;

        sliderLenta.animate({
            left : -100 * (nowShowIndex + 1) + '%'
        },500, function(){
            nowShowIndex = sliderItems.length-1;
            sliderLenta.css('left', -100 * (nowShowIndex + 1 ) + '%')
            sliderLenta.removeClass('animated');     
        });
    } else {
        nowShowIndex = nowShowIndex - 1;
        sliderLenta.animate({
            left : -100 * (nowShowIndex + 1) + '%'
        },500, function(){
            sliderLenta.removeClass('animated');
        });      
    }
//     if (nowShowIndex <= 0) {
//         sliderItems.eq(nowShowIndex).fadeOut();
//         nowShowIndex = sliderItems.length-1;
//         sliderItems.eq(nowShowIndex).css('display', 'flex');

//     } else {
//         sliderItems.eq(nowShowIndex).fadeOut();
//         sliderItems.eq(nowShowIndex - 1).css('display', 'flex');
//         nowShowIndex = nowShowIndex - 1;
//     }
});

slider.find('.slider-lenta-arrow-right').click(function(){
    

    if (sliderLenta.hasClass('animated')) {
        return;
    }
    sliderLenta.addClass('animated');
    if (nowShowIndex >= sliderItems.length-1) {
        nowShowIndex = nowShowIndex + 1;
        sliderLenta.animate({
            left : -100 * nowShowIndex + '%'
        },500, function(){
            nowShowIndex = 0;  
            sliderLenta.css('left', -100 * nowShowIndex + '%');
            sliderLenta.removeClass('animated');
        });    
    
    } else {
        nowShowIndex = nowShowIndex + 1;

        sliderLenta.animate({
            left : -100 * nowShowIndex + '%'
        },500, function(){
            sliderLenta.removeClass('animated');
        });       
    }
    

//     if (nowShowIndex >= sliderItems.length-1) {
//         sliderItems.eq(nowShowIndex).fadeOut(500, function(){
//         nowShowIndex = 0;
//         sliderItems.eq(nowShowIndex).css('display', 'flex');    
//         });   
//     } else {
//         sliderItems.eq(nowShowIndex).fadeOut();
//         sliderItems.eq(nowShowIndex + 1).css('display', 'flex');
//         nowShowIndex = nowShowIndex + 1; 
//     }
});
sliderBullets.click(function(){
    let index = sliderBullets.index($(this));
    nowShowIndex = index;

    sliderLenta.animate({
        left : -100 * (nowShowIndex + 1) + '%'
    },500, function(){
        sliderLenta.removeClass('animated');
    });

});

// setInterval(function(){
//     slider.find('.slider-lenta-arrow-right').click();
// }, 1000);
