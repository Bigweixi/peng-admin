import request from '@/utils/request'

// 查询节点列表
export function listNode(query) {
    return request({
        url: '/node',
        method: 'get',
        params: query
    })
}

// 测速
export function ping(data) {
    return request({
        url: '/node/ping',
        method: 'get',
        data: data
    })
}

// 选中节点
export function click(data) {
    return request({
        url: '/node/config',
        method: 'post',
        data: data
    })
}

// 选中节点
export function subscribe(data) {
    return request({
        url: '/node',
        method: 'post',
        data: data
    })
}
