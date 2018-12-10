import Swiper from 'swiper'
import 'iosselect/src/iosSelect'
import {initData} from "../js/date"
import {iosProvinces, iosCountys, iosCitys} from '../js/areaData_v2'

const imageLoad = () => {
    let imgArrays = ['page1-bg.png', 'page1-text1-bg.png', 'logo.png']
    let url = '/static/img/'
    new Promise((resolve, reject) => {

    })
}

const swiper1Show = () => {
    let $swiper1 = $('.page3')
    return !$swiper1.hasClass('show') && $swiper1.addClass('show')
}

const swiper2Show = () => {
    let $swiper2 = $('.page2')
    return !$swiper2.hasClass('show') && $swiper2.addClass('show')
}

const welcomeHide = () => {
    let $welcome = $('.welcome')
    return !$welcome.hasClass('hide') && $welcome.addClass('hide')
}

const swiperShow = () => {
    let $swiper = $('.swiper-container')
    return !$swiper.hasClass('show') && $swiper.addClass('show')
}

const pageHide = (page) => {
    let $page = $(page)
    return $page.hasClass('show') && $page.removeClass('show')
}

const pageShow = (page) => {
    let $page = $(page)
    return !$page.hasClass('show') && $page.addClass('show')
}

const pagePopupShow = (page) => {
    let $page = $(page)
    return !$page.hasClass('show') && $page.addClass('show')
}

const provinceSelect = () => {
    let showContactDom = $('#show_contact');
    let oneLevelId = showContactDom.attr('data-province-code');
    let twoLevelId = showContactDom.attr('data-city-code');
    let iosSelect = new IosSelect(2,
        [iosProvinces, iosCitys], {
        title: '地址选择',
        itemHeight: 35,
        relation: [1, 1],
        oneLevelId: oneLevelId,
        twoLevelId: twoLevelId,
        callback: function (selectOneObj, selectTwoObj) {
            $('#provinceSpan').html(selectOneObj.value);
            $('#citySpan').html(selectTwoObj.value);
        }
    });
}

const sexSelect = () => {
    let oneLevelId = '0';
    let sexData = [{
        'id': '0',
        'value': '男'
    },{
        'id': '1',
        'value': '女'
    }]
    let iosSelect = new IosSelect(1,
        [sexData], {
            title: '性别选择',
            itemHeight: 35,
            oneLevelId: oneLevelId,
            callback: function (selectOneObj) {
                $('#sexSpan').html(selectOneObj.value);
            }
        });
}

let hasSubmited = false

const errorMessage = (text) => {
    $('#error-message').html(text)
    setTimeout(() => {
        $('#error-message').html('')
    }, 3000)
}

const eventListeners = () => {
    let path1Button = $('.active-button.button1')
    let path2Button = $('.active-button.button2')
    let page2Logo = $('.page2-logo')
    let page3Logo = $('.page3-logo')
    let province = $('#province')
    let sex = $('#sex')
    initData()
    path1Button.on('click',
        () => {
            welcomeHide()
            swiper1Show()
        })
    path2Button.on('click',
        () => {
            welcomeHide()
            swiper2Show()
        })
    page2Logo.on('click',
        () => {
            pageHide('.page2')
            swiperShow()
            pagePopupShow('.page2-popup')
        })
    page3Logo.on('click',
        () => {
            pageHide('.page3')
            swiperShow()
            pagePopupShow('.page3-popup')
        })
    province.on('click',
        () => {
            provinceSelect()
        })
    sex.on('click',
        () => {
            sexSelect()
        })
    $('.submit').on('click', () => {
        if (!hasSubmited) {
            let postBody = {
                name: $('#name').val(),
                gender: $('#sexSpan').text().trim() === '男' ? 'F' : 'M',
                birthday: `${parseInt($('#year').text())}-${parseInt($('#month').text())}-${parseInt($('#date').text())}`,
                province: $('#provinceSpan').text(),
                city: $('#citySpan').text(),
                mobile: parseInt($('#mobile').val()),
                email: $('#email').val()
            };
            if (Number.isNaN(postBody.mobile)) {
                errorMessage('请输入正确手机号')
            }
            if (postBody.name.trim() === '') {
                errorMessage('请填写您的姓名')
            }

            $.post('https://lululemon-xmas.curio.im/api/info', postBody, (data) => {
                if (data.code === 200) {
                    hasSubmited = true
                    pageHide('.input-area')
                    pageHide('.submit-button-area')
                    pageShow('.thanks')
                } else {
                    errorMessage(data.msg)
                }
            })
        }
    })
}

window.onload = () => {
    eventListeners()
    const swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        speed:500,
        onInit () {
        },
        onSlideChangeEnd(swiper) {
            if (swiper.activeIndex === 0) {
            }
        }
    })
}
