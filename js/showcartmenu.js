// cart
var cart = document.querySelector('.cart');
var btnCart = document.querySelectorAll('.header__cart span');
var iconCart = document.querySelector('.icon-cart');
var cartOverlay = document.querySelector('.cart__overplay');
var iconCloseCart = document.querySelector('.icon-close-cart');
var noticeCart = document.querySelector('.notice-number');
var bodyCart = document.querySelector('.cart__body');
var sumPay = document.querySelector('.sum__pay');
var emptyCart = document.querySelector('.empty-cart');
// Discount code
var inputCode = document.querySelector('.input-discount'), 
    btnSubmitCode = document.querySelector('.btn-submit'),
    voucher = document.querySelector('.discount-voucher'),
    allProduct = document.querySelector('.pay-all-product');
var discountCode = [
    {
    name: 'AB',
    valueCode: 20000, 
    },
    {
        name: 'ABC',
        valueCode: 260000, 
    },
    {
        name: 'ABE',
        valueCode: 25000, 
    }
]

btnSubmitCode.onclick = function() {
    var trueCode = discountCode.find(function(item) {
        if(item.name == inputCode.value) {
            return item;
        };
    });

    showMyCart(trueCode);
    inputCode.value = '';
    if (trueCode == undefined) {
        showError(trueCode);
    } else {
        showSuccess(trueCode);
    }
}
// ///////
function showCart() {
    cart.classList.toggle('cart__active');
}

btnCart.forEach(function(item) {
    item.onclick = function() {
        showCart();
    }
});
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
    };
});

// show product in menu
var infoProductInCart = JSON.parse(sessionStorage.getItem('infoProductincart'));
if (infoProductInCart == null) {
    infoProductInCart = [];
}
var numberCart = 0;
// add to cart when we click in element
function addToCart(btnBuy) {
    var btnBuyNow = btnBuy.parentElement.parentElement.parentElement.parentElement.parentElement;
    var imgInCart = btnBuyNow.querySelector('.main__product-img-large img').src;
    var nameInCart = btnBuyNow.querySelector('.main__product-name').innerText;
    var priceInCart = btnBuyNow.querySelector('.product__price-new').innerText;
    var numberCart = parseInt(btnBuyNow.querySelector('.number__in-cart input').value);
    var indexProduct = 0;
    var check = false;
    for(var i = 0; i < infoProductInCart.length; i++) {
        if(infoProductInCart[i].name === nameInCart) {
            check = true;
            infoProductInCart[i].number += numberCart;
            break;
        };
    }
    var myObjCart = {
        img: imgInCart,
        name: nameInCart,
        price: priceInCart,
        number: numberCart,
        index: indexProduct
    }
    // check if it not the same, it will push on session
    if(!check) {
        infoProductInCart.push(myObjCart);
        sessionStorage.setItem('infoProductincart', JSON.stringify(infoProductInCart));
    }
    sessionStorage.setItem('infoProductincart', JSON.stringify(infoProductInCart));
    showMyCart();
}
window.onload = function() {
    showMyCart();
}
// function show all product in cart
function showMyCart(discountCode, voucherError) {
    if (infoProductInCart.length < 1) {
        sumPay.style.display = 'none';
        bodyCart.style.display = 'none';
        emptyCart.style.display = 'block';
    } else {
        sumPay.style.display = 'flex';
        bodyCart.style.display = 'flex';
        emptyCart.style.display = 'none';
    };
    var infoProductCart = JSON.parse(sessionStorage.getItem('infoProductincart'));
    if(infoProductCart === null) {
        infoProductCart = [];
    };
    var infoAddToCart = '';
    lengthCart  = 0;
    sumCartPay = 0;
    var discount = 0;
    if(discountCode === undefined) {
        var discount = 0;
    } else {
        discount = discountCode.valueCode / 1000;
    };
    for (var i = 0; i < infoProductCart.length; i++) {
        lengthCart +=parseInt(infoProductCart[i].number);
        sumCartPay += parseFloat(infoProductCart[i].number) * parseFloat(infoProductCart[i].price, 4);
        infoAddToCart += '<div class="cart__img-product col l-4 s-4">' +
            '<img src="'+infoProductCart[i].img+'" alt="Ảnh bị lỗi">' +
        '</div>' +
        '<div class="cart__info-product col l-8 s-8">' +
            '<div class="cart__name-product">' +
                '<span>'+infoProductCart[i].name+'</span>' +
            '</div>' +
            '<div class="cart__type">' +
                '<div class="cart__number">' +
                    '<label for="#number">Số lương:</label>' +
                    '<input id = "number" type="number" value = "'+infoProductCart[i].number+'" min = "1" max = "10000" onchange = "changeNumberProduct('+i+', this.value, this)">' +
                '</div>' +
                '<div class="cart__price">' +
                    '<span>'+infoProductCart[i].price+'</span>' +
                    '<p class="cart__remove" id="'+i+'" onclick = "deleteProduct(this.id)">Xóa sản phẩm</p>' +
                '</div>' +
            '</div>' +
        '</div>'
    };
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    allProduct.innerHTML = formatNumber((sumCartPay*1000).toFixed(3));
    voucher.innerHTML = '-' + (discount).toFixed(3);
    document.querySelector('.pay__all').innerHTML = formatNumber(((sumCartPay*1000) - discount).toFixed(3));
    noticeCart.innerHTML = lengthCart;
    document.querySelector('.number__cart').innerHTML = lengthCart;
    document.querySelector('.cart__item').innerHTML = infoAddToCart;
};
// delete product in cart and splice in session
function deleteProduct(id) {
    this.confirm('Are you sure you want to delete this product?');
    infoProductInCart.splice(id, 1);
    sessionStorage.setItem('infoProductincart', JSON.stringify(infoProductInCart));
    showMyCart();
};

// change product in input and update pay total in cart  
function changeNumberProduct(indexProduct, value) {
    if (value > infoProductInCart[indexProduct].number) {
        infoProductInCart[indexProduct].number += 1;
    } else {
        infoProductInCart[indexProduct].number -= 1;
    }
    sessionStorage.setItem('infoProductincart', JSON.stringify(infoProductInCart));
    showMyCart();
};







