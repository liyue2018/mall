/*
* @Author: liyue2018
* @Date:   2018-06-11 09:59:21
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 07:59:21
*/

$(function () {
    // 用户登录
    // 获取登录按钮添加点击事件
    // 获取用户输入的表单信息
    // 调用登录接口实现登录
    // 登录成功跳转到会员中心

    $('.login-btn').on('tap', function() {
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();

        if (!username) {
            mui.toast('用户名不能为空');
            return;
        }
        if (!password) {
            mui.toast('密码不能为空');
            return;
        }
        if (username && password) {
            // 正在登录
            $('.login-btn').html('正在登录...');
            setTimeout(function(){
                mui.toast('登录成功');
            },1000);

            // 登录成功实现页面跳转
            setTimeout(function () {
                location.href = 'user.html';
            }, 2500);
        }

        // ajax

        // $.ajax({
        //     url: '',
        //     type: 'post',
        //     data: {
        //         username: username,
        //         password: password
        //     },
        //     beforeSend: function() {
        //         $('.login-btn').html('正在登录...');
        //     }
        //     success: function(res) {
        //         mui.toast('登录成功');
        //         $('.login-btn').html('登录');
        //         setTimeout(function () {
        //             location.href = 'user.html';
        //         }, 2000);
        //     }
        // });

    });

})

