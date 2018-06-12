/*
* @Author: liyue2018
* @Date:   2018-06-11 11:47:15
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-11 13:44:32
*/

    // 处理用户未登录
    // 点击会员中心 未登录跳转至注册页面 已登录跳转到用户中心
    // ajax 
    // 将要保存用户信息
    // var userInfo = null;


    // $.ajax({
    //     url: '',
    //     type: 'get',
    //     同步
    //     async: 'false',
    //     success: function(res) {
    //         if (res.error && res.error === 400) {
    //             location.href = "login.html";
    //         }
    //         userInfo = res;
    //     }
    // });
$(function() {
    // 退出登录
    // 获取登录按钮添加点击事件
    // 调用退出登录接口，实现退出登录
    // 如果退出成功， 跳转到首页

    $('.quit-btn').on('tap', function () {
        // 退出成功 跳转到首页
        mui.toast("退出成功");
        setTimeout(function () {
            location.href = "index.html";
        }, 1000);

        // ajax 
        // $.ajax({
        //     url: '',
        //     type: 'get',
        //     success: function(res) {
        //         if (res.success) {
        //             mui.toast("退出成功");
        //             setTimeout(function () {
        //                 location.href = "index.html";
        //             }, 1000);
        //         }
        //     }
        // });

    });
})