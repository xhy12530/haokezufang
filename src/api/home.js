import request from '@/utils/request'
export const getSwiper = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}
