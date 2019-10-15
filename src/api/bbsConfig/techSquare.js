import request from '@/common/js/request'

// 创建
export function createApi (data) {
  return request({
    url: '/api/techSquare/create',
    method: 'post',
    data
  })
}

// 编辑
export function updateApi (data) {
  return request({
    url: '/api/techSquare/update',
    method: 'put',
    data
  })
}

// 删除
export function deleteApi (id) {
  return request({
    url: `/api/techSquare/delete/${id}`,
    method: 'delete'
  })
}

// 得到单条数据
export function getRowApi (id) {
  return request({
    url: `/api/techSquare/getRow/${id}`,
    method: 'get'
  })
}

// 获取列表
export function getListApi (params) {
  return request({
    url: '/api/techSquare/getList',
    method: 'get',
    params
  })
}

// 获取全部
export function getAllApi (params) {
  return request({
    url: '/api/techSquare/getAll',
    method: 'get',
    params
  })
}
