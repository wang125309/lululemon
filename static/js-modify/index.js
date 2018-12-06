import Swiper from 'swiper'

let imageLoad = () => {
  let imgArrays = ['page1-bg.png', 'page1-text1-bg.png', 'logo.png']
  let url = '/static/img/'
  img
  new Promise((resolve, reject) => {

  })
}

window.onload = () => {
  new Swiper('.swiper-container', {
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
