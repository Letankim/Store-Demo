// --------------------------------slide--------------------------------------
var imgs = document.querySelectorAll('.slider__img');
var dotItem = document.querySelectorAll('.dot__control-slider-item');
var slideWrapper = document.querySelector('.slider__wrapper');
var imgsLenght = imgs.length;
var index = 0;
// auto click 
function slideAuto() {
    index++;
    if(index >= imgsLenght) {
       index = 0;
    };
    clickSlider();
    slideWrapper.style.left = "-" + index*100 + "%";
    [...dotItem].forEach(rm => rm.classList.remove('slide__active'));
    dotItem[index].classList.add('slide__active');
};
// khi click vào control
function clickSlider() {
    [...dotItem].forEach(function(item, indexDot) {
        item.onclick = function() {
            slideWrapper.style.left = "-" + indexDot*100 + "%";
            [...dotItem].forEach(rm => rm.classList.remove('slide__active'));
            dotItem[indexDot].classList.add('slide__active');
            index = indexDot;
        };
    });
};

// -----------------------------------notice-sale----------------------------------------------------
// var noticeWrapper = document.querySelector('.notice__sale-wrapper');
// var noticeFade = document.querySelector('.notice__sale-run');

// function runNoticeContent() {
//    noticeWrapper.style.opacity = '1';
//    noticeFade.classList.add('active__notice');
// };
// function removeNotice() {
//     noticeWrapper.style.opacity = '0';
//     noticeFade.classList.remove('active__notice');
// };
// chnage product filled

function changeProductFilter(type, element) {
    var tabs = document.getElementsByClassName('apple__list-link');
    var symbolProduct = document.getElementsByClassName('highlight__type-item-link');
    for(var i = 0; i <symbolProduct.length; i++) {
        symbolProduct[i].style.color = 'var(--color-primary)';
    };
    for(var i = 0; i < tabs.length; i++) {
        tabs[i].style.color = 'var(--color-primary)';
    };
    element.style.color = '#ffab41';
    document.getElementById(type).style.display = 'flex';
    switch(type) {
        case 'smart-phone':
            document.getElementById('latop').style.display = 'none';
            document.getElementById('tablet').style.display = 'none';
            document.getElementById('accessory').style.display = 'none';
            document.getElementById('speaker').style.display = 'none';
            break;
        case 'latop':
            document.getElementById('smart-phone').style.display = 'none';
            document.getElementById('tablet').style.display = 'none';
            document.getElementById('accessory').style.display = 'none';
            document.getElementById('speaker').style.display = 'none';
            break;
        case 'tablet':
            document.getElementById('latop').style.display = 'none';
            document.getElementById('smart-phone').style.display = 'none';
            document.getElementById('accessory').style.display = 'none';
            document.getElementById('speaker').style.display = 'none';
            break;
        case 'speaker':
            document.getElementById('latop').style.display = 'none';
            document.getElementById('tablet').style.display = 'none';
            document.getElementById('accessory').style.display = 'none';
            document.getElementById('smart-phone').style.display = 'none';
            break;
        case 'accessory':
            document.getElementById('latop').style.display = 'none';
            document.getElementById('tablet').style.display = 'none';
            document.getElementById('smart-phone').style.display = 'none';
            document.getElementById('speaker').style.display = 'none';
            break;
// symbol product;
        case 'iphone':
            document.getElementById('vivo').style.display = 'none';
            document.getElementById('huawei').style.display = 'none';
            document.getElementById('samsung').style.display = 'none';
            document.getElementById('oppo').style.display = 'none';
            break;
        case 'vivo':
            document.getElementById('iphone').style.display = 'none';
            document.getElementById('huawei').style.display = 'none';
            document.getElementById('samsung').style.display = 'none';
            document.getElementById('oppo').style.display = 'none';
            break;
        case 'huawei':
            document.getElementById('vivo').style.display = 'none';
            document.getElementById('iphone').style.display = 'none';
            document.getElementById('samsung').style.display = 'none';
            document.getElementById('oppo').style.display = 'none';
            break;
        case 'samsung':
            document.getElementById('vivo').style.display = 'none';
            document.getElementById('huawei').style.display = 'none';
            document.getElementById('iphone').style.display = 'none';
            document.getElementById('oppo').style.display = 'none';
            break;
        case 'oppo':
            document.getElementById('vivo').style.display = 'none';
            document.getElementById('huawei').style.display = 'none';
            document.getElementById('samsung').style.display = 'none';
            document.getElementById('iphone').style.display = 'none';
            break;
    };
};

// my cart discount control

var inputCodeDiscount = document.querySelector('.input-discount');
var titleSubDiscountCode = document.querySelector('.title-discount-code');

inputCodeDiscount.onfocus = function() {
    titleSubDiscountCode.classList.add('active');
}
titleSubDiscountCode.onclick = function() {
    inputCodeDiscount.focus();
}
inputCodeDiscount.onblur = function() {
    if(inputCodeDiscount.value == '') {
        titleSubDiscountCode.classList.remove('active');
        titleSubDiscountCode.style.display = 'block';
    }
}
