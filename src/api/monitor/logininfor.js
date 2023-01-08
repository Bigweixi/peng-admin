/*
 * @Author: peng 1925186789@qq.com
 * @Date: 2022-10-13 11:37:23
 * @LastEditors: peng 1925186789@qq.com
 * @LastEditTime: 2023-01-07 11:55:57
 * @FilePath: /peng-admin/src/api/monitor/logininfor.js
 * @Description: 
 * 
 * Copyright (c) 2023 by peng 1925186789@qq.com, All Rights Reserved. 
 */
import request from '@/utils/request'

// 查询登录日志列表
export function list(query) {
  return request({
    url: '/monitor/logininfor',
    method: 'get',
    params: query
  })
}

// 删除登录日志
export function delLogininfor(infoId) {
  return request({
    url: '/monitor/logininfor/' + infoId,
    method: 'delete'
  })
}

// 解锁用户登录状态
export function unlockLogininfor(userName) {
  return request({
    url: '/monitor/logininfor/unlock/' + userName,
    method: 'get'
  })
}

// 清空登录日志
export function cleanLogininfor() {
  return request({
    url: '/monitor/logininfor-clear',
    method: 'delete'
  })
}
