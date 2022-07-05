import request from '@/utils/request'
export const login = (body) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: body
  })
}
