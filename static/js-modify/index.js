import Swiper from 'swiper'

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
