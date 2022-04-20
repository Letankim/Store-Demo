// cart
var cart = document.querySelector('.cart');
var btnCart = document.querySelector('.header__cart span');
var iconCart = document.querySelector('.icon-cart');
var cartOverlay = document.querySelector('.cart__overplay');
var iconCloseCart = document.querySelector('.icon-close-cart')

function showCart() {
    cart.classList.toggle('cart__active');
}

btnCart.addEventListener('click', showCart);
iconCart.addEventListener('click', showCart);
cartOverlay.addEventListener('click', showCart);
iconCloseCart.addEventListener('click', showCart);

// menu on mobile
var openMenu = document.querySelector('.icon__bars');
var closeMenu = document.querySelector('.icon__close-menu');
var menuOnMobile = document.querySelector('.menu__on-mobile');
var overplayMobileMenu = document.querySelector('.overplay__menu');
var fadeInMenuChilds = document.querySelectorAll('.icon-plus-mobile');

function showMenuMobile() {
    menuOnMobile.classList.toggle('menu-active');
}
openMenu.addEventListener('click', showMenuMobile);
closeMenu.addEventListener('click', showMenuMobile);
overplayMobileMenu.addEventListener('click', showMenuMobile);

Array.from(fadeInMenuChilds).forEach(function(itemChild) {
    itemChild.onclick = function() {
        this.classList.toggle('plus-active');
        var parentMenu = this.parentElement.parentElement;
        var menuChild = parentMenu.querySelector('.menu__mobile-child-list');
        var activeText = parentMenu.querySelector('.menu__mobile-link ');
        activeText.classList.toggle('active__text');
        menuChild.classList.toggle('menu__child-active');
    }
});

// show product in menu
var infoProductInCart = new Array();
function addToCart(btnBuy) {
    var btnBuyNow = btnBuy.parentElement.parentElement.parentElement.parentElement.parentElement;
    var imgInCart = btnBuyNow.querySelector('.main__product-img-large img').src;
    var nameInCart = btnBuyNow.querySelector('.main__product-name').innerText;
    var priceInCart = btnBuyNow.querySelector('.product__price-new').innerText;
    var numberCart = parseInt(btnBuyNow.querySelector('.number__in-cart input').value);
    var infoProduct = new Array(nameInCart, priceInCart, imgInCart, numberCart);
    localStorage.setItem('infoProductincart', JSON.stringify(infoProductInCart));
    var check = false;
    for(var i = 0; i < infoProductInCart.length; i++) {
        if(infoProductInCart[i][0] == nameInCart) {
            check = true;
            numberCart += infoProductInCart[i][3];
            infoProductInCart[i][3] = parseInt(numberCart);
            console.log(typeof(numberCart));
            break;
        }
    }
    if(!check) {
        infoProductInCart.push(infoProduct);
    }
    showMyCart();
}
showMyCart();
// show my cart
function showMyCart() {
    var infoProductCart = JSON.parse(localStorage.getItem('infoProductincart'));
    var infoAddToCart = '';
    lengthCart  = 0;
    sumCartPay = 0;
    for (var i = 0; i < infoProductCart.length; i++) {
        lengthCart +=parseInt(infoProductCart[i][3]);
        sumCartPay += parseFloat(infoProductCart[i][3]) * parseFloat(infoProductCart[i][1], 4);
        infoAddToCart += '<div class="cart__img-product col l-4 s-4">' +
            '<img src="'+infoProductCart[i][2]+'" alt="Ảnh bị lỗi">' +
        '</div>' +
        '<div class="cart__info-product col l-8 s-8">' +
            '<div class="cart__name-product">' +
                '<span>'+infoProductCart[i][0]+'</span>' +
            '</div>' +
            '<div class="cart__type">' +
                '<div class="cart__number">' +
                    '<label for="#number">Số lương:</label>' +
                    '<input id = "number" type="number" value = "'+infoProductCart[i][3]+'" min = "1" max = "10000">' +
                '</div>' +
                '<div class="cart__price">' +
                    '<span>'+infoProductCart[i][1]+'</span>' +
                    '<p class="cart__remove">Xóa sản phẩm</p>' +
                '</div>' +
            '</div>' +
        '</div>'
    }
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
      
    document.querySelector('.pay__all').innerHTML = formatNumber((sumCartPay*1000).toFixed(3));
    document.querySelector('.number__cart').innerHTML = lengthCart;
    document.querySelector('.cart__item').innerHTML = infoAddToCart;
}