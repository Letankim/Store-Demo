var imgBanners = JSON.parse(sessionStorage.getItem('imgDesc'));
var dotBanners = document.querySelectorAll('.dot-item');
var wrapperBanner = document.querySelector('.banner__img-main');
var index = 0;

function slideBannerAuto() {
    index++;
    if (index >= imgBanners[0].length - 4) {
        index = 0; 
    }
    wrapperBanner.style.left = '-' + index*100 + '%';
    Array.from(dotBanners).forEach(item => {
        item.classList.remove('dot_item-active');
    });
    dotBanners[index].classList.add('dot_item-active');
    clickBanner();
};

function clickBanner() {
    Array.from(dotBanners).forEach(function(item, indexDot) {
        item.onclick = function() {
            wrapperBanner.style.left = '-' + indexDot*100 + '%';
            Array.from(dotBanners).forEach(ev => {
                ev.classList.remove('dot_item-active')
            });
            dotBanners[indexDot].classList.add('dot_item-active');
            index = indexDot;
        };
    });
};

// 
showProductItem();
// show ở trang sap
function showProductItem() {
    var infoProduct = JSON.parse(sessionStorage.getItem('product'));
    var imgSub = JSON.parse(sessionStorage.getItem('imgDesc'));
    var innerProduct = '';
    // show source
    var source = '';
    var descproduct = '';
    for(var i = 0; i < infoProduct.length; i++) {
        var saveMoney = parseFloat(infoProduct[i][4])*1000 - parseFloat(infoProduct[i][3])*1000;
        innerProduct += '<div class="main__product-container">' +
        '<div class="main__product-header">' +
            '<h3 class="main__product-name">'+infoProduct[i][0]+'</h3>' +
        '</div>' +
        '<div class="main__product-body wide">' +
            '<div class="main__product-body-wrapper row">' +
                '<div class="main__product-img col l-4 s-12">' +
                    '<div class="main__product-img-large">' +
                        '<img src="'+infoProduct[i][1]+'" alt="">' +
                    '</div>' +
                    '<div class="main__product-img-desc">' +
                    '</div>' +
                '</div>' +
                '<div class="main__product-type-buy col l-5 s-12">' +
                    '<div class="product-brand">' +
                        '<span>Thương hiệu: <b>'+infoProduct[i][2]+'</b></span>' +
                    '</div>' +
                    '<div class="product-qr">' +
                        '<span>Mã sản phẩm: <b>(Đang cập nhật...)</b></span>' +
                    '</div>' +
                    '<div class="product-price">' +
                        '<span class = "product__price-new">'+infoProduct[i][3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'</span>' +
                        '<span class = "product__price-old">' +
                            '<span>Giá niêm yết:</span>' +
                            '<span class="price">'+infoProduct[i][4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'</span>' +
                        '</span>' +
                        '<span class="save__money">' +
                            'Tiết kiệm: <b>'+saveMoney+'.000'+'</b> so với giá thị trường' +
                        '</span>' +
                    '</div>' +
                    '<div class="product-color">' +
                        '<p class="product-color-title">Màu sắc</p>' +
                        '<div class="product-color-type-color">' +
                            '<span class="color red"></span>' +
                            '<span class="color black"></span>' +
                        '</div>'+
                        '<div class = "number__in-cart"><input type="text" min = "1" value = "1"></div>' +
                    '</div>' +
                    '<div class="btn__product-buy">' +
                        '<button class="buy__now" onclick = "addToCart(this)">' +
                            '<span>Mua ngay</span>' +
                            '<p>Giao tận nới hoặc nhận tại cửa hàng</p>' +
                        '</button>' +
                        '<div class="btn__other row">' +
                            '<button class="like btn col l-5">Yêu thích</button>' +
                            '<button class="credit btn col l-5">Trả góp</button>' +
                            '<button class="compare btn col l-2"><i class="fas fa-compress-arrows-alt"></i></button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="call__saler">' +
                        '<span>Gọi <b>1900 6750</b> để tư vấn mua hàng</span>' +
                    '</div>' +
                '</div>' +
                '<div class="main__product-status col l-3 s-12">' +
                    '<div class="benifi__customer">' +
                        '<div class="status">' +
                            '<span>Tình trạng</span>' +
                            '<p>Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất</p>' +
                        '</div>' +
                        '<div class="guaranteed">' +
                            '<span>Bảo hành</span>' +
                            '<p>Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi nhà sản xuất.</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="type__pay">' +
                        '<div class="type__pay-item row">' +
                            '<img class = "col l-2-5 s-2-5" src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/product_main_policy_1_img.jpg?1639989125504" alt="">' +
                            '<div class="type__pay-desc col">' +
                                '<p>Thanh toán Smartpay</p>' +
                                'Giảm ngay 20% tối đa 500.000đ khi thanh toán qua Smartpay tại quầy' +
                            '</div>' +
                        '</div>' +
                        '<div class="type__pay-item row">' +
                            '<img class = "col l-2-5 s-2-5" src="https://bizweb.dktcdn.net/100/415/483/themes/804267/assets/product_main_policy_1_img.jpg?1639989125504" alt="">' +
                            '<div class="type__pay-desc col">' +
                                '<p>Thanh toán Smartpay</p>' +
                                'Giảm ngay 20% tối đa 500.000đ khi thanh toán qua Smartpay tại quầy' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>'
    // show source
    source += '<a href="./index.html"class="source__product-item">Trang chủ</a>' +
    '<span class="source__spectrum">/</span>' +
    '<span class="source__product-item">Sản phẩm mới</span>' +
    '<span class="source__spectrum">/</span>' +
    '<span class="source__product-item">'+infoProduct[i][0]+'</span>'
    // show name product desc
    descproduct += '<span>Đặc điểm nổi bật của '+infoProduct[i][0]+'</span>'
    }
    document.querySelector('.main__product').innerHTML = innerProduct;
    document.querySelector('.source__wrapper').innerHTML = source;
    document.querySelector('.product-title').innerHTML = descproduct;
    // show anhr
    var imgs = '';
    var imgDesc = '';
    for(var i=0; i<imgSub.length; i++) {
        imgs += '<img src="'+imgSub[i][0]+'" alt="">' +
        '<img src="'+imgSub[i][1]+'" alt="">' +
        '<img src="'+imgSub[i][2]+'" alt="">' +
        '<img src="'+imgSub[i][3]+'" alt="">' 
    // show img desc
        imgDesc += '<img src="'+imgSub[i][4]+'" alt="">' +
        '<img src="'+imgSub[i][5]+'" alt="">' +
        '<img src="'+imgSub[i][6]+'" alt="">'
    }
    document.querySelector('.main__product-img-desc').innerHTML = imgs;
    document.querySelector('.banner__img-main').innerHTML = imgDesc;
}


// img desc
var imgMore = document.querySelectorAll('.main__product-img-desc img');
var imgProductMain = document.querySelector('.main__product-img-large img');

Array.from(imgMore).forEach(function(itemsub) {
    itemsub.onclick = function() {
        imgProductMain.src = itemsub.src;
    }
});