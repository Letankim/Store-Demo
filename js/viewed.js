var ArrayProduct = JSON.parse(sessionStorage.getItem('InfoProduct'));
if (ArrayProduct == null) {
    ArrayProduct = [];
}
function renderProductViewed(x) {
    var productImgChild = x.children[0].children[0].children[0].children[0].src;
    var imgSale = x.children[0].children[0].children[0].children[8].children[0].src;
    var infoSale = x.children[0].children[0].children[0].children[8].children[1].innerText;
    var productName = x.children[1].children[1].children[0].innerText;
    var productPriceSale = x.children[1].children[2].children[0].innerText;
    var productPriceOld = x.children[1].children[2].children[1].innerText;
    var productDescTitle = x.children[1].children[3].children[0].innerText;
    var productDescInfo = x.children[1].children[3].children[1].innerText;
    var myObjInfoProduct = {
        img: productImgChild,
        iconSale: imgSale,
        infoSale: infoSale,
        name: productName,
        priceSale: productPriceSale,
        priceOld: productPriceOld,
        title: productDescTitle,
        descInfo: productDescInfo,
    }
    var isChecked = false;
    for (var i = 0; i < ArrayProduct.length; i++) {
        if(ArrayProduct[i].name == productName) {
            isChecked = true;
        }
    }
    if(!isChecked) {
        ArrayProduct.push(myObjInfoProduct);
        sessionStorage.setItem('InfoProduct', JSON.stringify(ArrayProduct));
    }
    if(ArrayProduct.length >=5) {
        ArrayProduct.splice(0, ArrayProduct.length - 1);
        sessionStorage.setItem('InfoProduct', JSON.stringify(ArrayProduct));
    }
}

// lấy infor product
showProductViewed();
function showProductViewed() {
    var productRender = JSON.parse(sessionStorage.getItem('InfoProduct'));
    if (productRender == null) {
        productRender = [];
    }
    var productViewed = '';
    for (var i = 0; i < productRender.length; i++) {
        productViewed +=  '<div class="product__cart col l-2-5 s-6">' +
        '<div class="product__img">' +
            '<a href="" class="product__img-link">' +
                '<img src="'+productRender[i].img+'" alt="">' +
                '<div class="sale__now">' +
                    '<img src="'+productRender[i].imgSale+'" alt="">' +
                    '<span>'+productRender[i].infoSale+'</span>' +
                '</div>' +
            '</a>' +
        '</div>' +
        '<div class="product__desc">' +
                '<a href="" class="product__name">'+productRender[i].name+'</a>' +
            '<div class="product__price">' +
                '<span class="product__price-sale">'+productRender[i].priceSale+'</span>' +
                '<span class="product__price-old">'+productRender[i].priceOld+'</span>' +
            '</div>' +
            '<div class="product__notice-sale">' +
                '<span class="product__notice-title">'+productRender[i].title+'</span>' +
                '<span class="product__notice-info">'+productRender[i].descInfo+'</span>' +
            '</div>' +
            '<div class="btn__buy hide">' +
                '<span class="btn btn__buy-now">Mua ngay</span>' +
                '<span class="btn btn__desc">Chi tiết</span>' +
            '</div>' +
        '</div>' +
    '</div>'
    }
    document.querySelector('.product__wrapper-viewed').innerHTML = productViewed;
}

//  add product

// var newproduct = new Array();
// function addProduct(x) {
//     var parent = x.parentElement.parentElement;
//     var imgP = parent.children[0].children[1].value;
//     console.log(imgP);
//     var imgSaleP = parent.children[1].children[1].value;
//     var infoSaleP = parent.children[2].children[1].value;
//     var nameP = parent.children[3].children[1].value;
//     var priceSaleP = parent.children[4].children[1].value;
//     var priceOldP = parent.children[5].children[1].value;
//     var source = parent.children[6].children[1].value;
//     var infoDescP = parent.children[7].children[1].value;
//     var imgSub1 = parent.children[8].children[1].value;
//     var imgSub2 = parent.children[9].children[1].value;
//     var imgSub3 = parent.children[10].children[1].value;
//     var imgSub4 = parent.children[11].children[1].value;

//     var newproductIf =new Array(imgP, imgSaleP, infoSaleP, nameP, priceSaleP, priceOldP, source, infoDescP, imgSub1, imgSub2, imgSub3, imgSub4);
//     newproduct.push(newproductIf);
//     sessionStorage.setItem('newproduct', JSON.stringify(newproduct));
//     renderNewProduct();
//     showProductViewed();
// }
// renderNewProduct();
// function renderNewProduct() {
//     var spnew =sessionStorage.getItem('newproduct');
//     var newPUse = JSON.parse(spnew);
//     var productNewAdd = '';
//     for (var i = 0; i < newPUse.length; i++) {
//         productNewAdd += '<div class="product__cart col l-2-5 s-6" onclick="renderProductViewed(this)">' +
//         '<div class="product__img">' +
//             '<div>' +
//                 '<a href = "../html/pageitem.html" class="product__img-link" onclick = "renderProductItem(this)">' +
//                     '<img src="'+newPUse[i][0]+'" alt="" class = "img__product-main">' +
//                     '<img src="'+newPUse[i][8]+'" alt="" class = "none-create-item">' +
//                     '<img src="'+newPUse[i][9]+'" alt="" class = "none-create-item">' +
//                     '<img src="'+newPUse[i][10]+'" alt="" class = "none-create-item">' +
//                     '<img src="'+newPUse[i][11]+'" alt="" class = "none-create-item">' +
//                     '<div class="sale__now">' +
//                         '<img src="'+newPUse[i][1]+'" alt="">' +
//                         '<span>'+newPUse[i][2]+'</span>' +
//                     '</div>' +
//                 '</a>' +
//             '</div>' +
//         '</div>' +
//         '<div class="product__desc">' +
//             '<span class="none-create-item brand">'+newPUse[i][6]+'</span>' +
//             '<div>' +
//                 '<a href="./pageitem.html" class="product__name" onclick = "renderProductItem(this)">'+newPUse[i][3]+'</a>' +
//             '</div>' +
//             '<div class="product__price">' +
//                 '<span class="product__price-sale">'+newPUse[i][4]+'</span>' +
//                 '<span class="product__price-old">'+newPUse[i][5]+'</span>' +
//             '</div>' +
//             '<div class="product__notice-sale">' +
//                 '<span class="product__notice-title">KM</span>' +
//                 '<span class="product__notice-info">'+newPUse[i][7]+'</span>' +
//             '</div>' +
//             '<div class="btn__buy hide">' +
//                 '<span class="btn btn__buy-now">Mua ngay</span>' +
//                 '<a href = "./pageitem.html" onclick = "renderProductItem(this)" class="btn btn__desc">Chi tiết</a>' +
//             '</div>' +
//         '</div>' +
//     '</div>'
//     }
//     document.querySelector('.product__wrapper-smartphone').innerHTML = productNewAdd;
//     if(newPUse.length >=6) {
//         document.querySelector('.btn__control i:first-child').style.display = 'block';
//     }
// }
// 
// btn control smartphone
// var btnNext = document.querySelector('.btn__control i:first-child');
//     var prevNext = document.querySelector('.btn__control i:last-child');
//     var wrapperProduct = document.querySelector('.product__wrapper-smartphone');
//     var spLeght = document.querySelectorAll('.product__control');
//     var i = 0;

//     btnNext.onclick = function() {
//         console.log(spLeght);
//         if(i < spLeght.length - 5) {
//             i = i +1;
//             wrapperProduct.style.left = '-' + i*20 + '%';
//         }
//     }
//     prevNext.onclick = function() {
//         if(i>0) {
//             i--;
//             wrapperProduct.style.left = '-' + i*20 + '%';
//         }
//     }
