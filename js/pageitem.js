// render product item
var itemProduct = new Array();
var imgDesc = new Array();
function renderProductItem(btnClick) {
    var parentProduct = btnClick.parentElement.parentElement.parentElement;
    var nameProduct = parentProduct.querySelector('.product__name').innerText;
    var imgMain = parentProduct.querySelector('.img__product-main').src;
    var imgProduct = parentProduct.querySelectorAll('img.none-create-item');
    var priceNew = parentProduct.querySelector('.product__price-sale').innerText;
    var priceOld = parentProduct.querySelector('.product__price-old').innerText;
    var brand = parentProduct.querySelector('.brand').innerText;
    var productRender = new Array(nameProduct, imgMain, brand, priceNew, priceOld);
    var ArrayImgDesc = [...imgProduct]
    var imgDescs = new Array(ArrayImgDesc[0].src, ArrayImgDesc[1].src, ArrayImgDesc[2].src, ArrayImgDesc[3].src, ArrayImgDesc[4].src, ArrayImgDesc[5].src, ArrayImgDesc[6].src);
    itemProduct.push(productRender);
    imgDesc.push(imgDescs);
    sessionStorage.setItem('imgDesc', JSON.stringify(imgDesc));
    sessionStorage.setItem('product', JSON.stringify(itemProduct));
    showProductItem();
}

