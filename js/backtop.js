// back top
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('.back_top').fadeIn();
        } else {
            $('.back_top').fadeOut();
        };
    });
    $('.back_top').click(function() {
        $('body, html').animate({scrollTop: 0}, 1000);
    });
});
// 
// hiện ẩn add products
function addProductNew() {
    document.querySelector('.from__add-product').style.display = 'none';
};
// toggle
const btn = document.querySelector('.add__product'),
      toggleBtn = document.querySelector('.add__toggle');

toggleBtn.addEventListener('click', () =>{
    btn.classList.toggle('open');
});
// 
// see more
var btnMore = document.querySelector('.footer__btn-title');
var infoMore = document.querySelector('.info__more');
var btnSeeLess = document.querySelector('.footer__btn-title-less');

btnMore.onclick = function() {
    infoMore.classList.toggle('info__more');
    btnMore.classList.remove('btn-active');
    btnSeeLess.classList.add('btn-active');
};
btnSeeLess.onclick = function() {
    infoMore.classList.add('info__more');
    btnMore.classList.add('btn-active');
    btnSeeLess.classList.remove('btn-active');
};

