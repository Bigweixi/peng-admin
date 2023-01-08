/*
 * @Author: peng 1925186789@qq.com
 * @Date: 2022-06-21 15:16:20
 * @LastEditors: peng 1925186789@qq.com
 * @LastEditTime: 2023-01-07 11:55:55
 * @FilePath: /peng-admin/src/api/monitor/operlog.js
 * @Description: 
 * 
 * Copyright (c) 2023 by peng 1925186789@qq.com, All Rights Reserved. 
 */
import request from '@/utils/request'

// 查询操作日志列表
export function list(query) {
  return request({
    url: '/monitor/operlog',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delOperlog(operId) {
  return request({
    url: '/monitor/operlog/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanOperlog() {
  return request({
    url: '/monitor/operlog-clear',
    method: 'delete'
  })
}
