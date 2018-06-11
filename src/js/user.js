/*
* @Author: liyue2018
* @Date:   2018-06-11 11:47:15
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-11 12:02:16
*/

$(function() {
    // 退出登录
    // 获取登录按钮添加点击事件
    // 调用退出登录接口，实现退出登录
    // 如果退出成功， 跳转到首页

    $('.quit-btn').on('click', function () {
        // 退出成功 跳转到首页
        location.href = "index.html";
    })
})