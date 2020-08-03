import {request} from './requst'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}