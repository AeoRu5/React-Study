import request from '@/utils/request'

export function init(data) {
  return request({
    url: '/init',
    method: 'post',
    data
  })
}
