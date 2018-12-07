import Swiper from 'swiper'
const imageLoad = () => {
  let imgArrays = ['page1-bg.png', 'page1-text1-bg.png', 'logo.png']
  let url = '/static/img/'
  new Promise((resolve, reject) => {

  })
}

const swiper1Show = () => {
  let $swiper1 = $('.swiper-container.swiper1')
  return !$swiper1.hasClass('show') && $swiper1.addClass('show')
}

const swiper2Show = () => {
  let $swiper2 = $('.swiper-container.swiper2')
  return !$swiper2.hasClass('show') && $swiper2.addClass('show')
}

const welcomeHide = () => {
  let $welcome = $('.welcome')
  return !$welcome.hasClass('hide') && $welcome.addClass('hide')
}

const eventListeners = () => {
  let path1Button = $('.active-button.button1')
  let path2Button = $('.active-button.button2')
  path1Button.on('click',
    () => {
      welcomeHide()
      swiper1Show()
    }
  )
  path2Button.on('click',
    () => {
      welcomeHide()
      swiper2Show()
    }
  )
}

window.onload = () => {
  eventListeners()
  const swiper1 = new Swiper('.swiper-container', {
    direction:'vertical',
    speed:500,
    onInit () {
    },
    onSlideChangeEnd(swiper) {
      if (swiper.activeIndex === 0) {
        page2()
      }
    }
  })
}
