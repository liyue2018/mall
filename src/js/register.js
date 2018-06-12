/*
* @Author: liyue2018
* @Date:   2018-06-11 01:14:37
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-11 13:44:13
*/

// html结构加载完成后执行
$(function () {
    // 注册
    // 获取用户注册的信息
    // 对用户输入的信息做验证
    // 调用注册接口，实现注册功能
    // 给出提示
    // 跳转到登录页面

    $('.register-btn').on('tap', function() {
        // 获取信息
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var pconfirm = $('[name="pconfirm"]').val();
        var vCode = $('[name="vCode"]').val();
        // 信息验证
        // 用户名非空 

        if (!username) {
            mui.toast('请输入用户名');
            return;
        }
        // 手机号不小于11位
        if (mobile.length < 11) {
            mui.toast('请输入合法的手机号');
            return;
        }
        // 密码和确认密码相同
        if (password != pconfirm) {
            mui.toast('密码不一致');
            return;
        }
        // 认证码是6位
        if (vCode.length != 6) {
            mui.toast('输入的认证码格式不正确');
            return;
        }

        // 注册接口
        // $.ajax({
        //     url: '',
        //     type: 'post',
        //     data: {
        //         username: username,
        //         password: password,
        //         mobile: mobile,
        //         vCode: vCode
        //     },
        //     success: function(res) {
        //         console.log(res);
        //          alert('注册成功');
        //          setTimeout(function() {
                        // location.href = 'login.html'
        //          }, 2000);
        //     }
        // })
    });

    // 获取验证码
    // 给获取认证码的按钮添加点击事件
    // 调用接口获取认证码
    // 将认证码输出到控制台

    // $.ajax({
    //     url:'',
    //     type: 'get',
    //     success: function(res) {
    //         console.log(res.Vcode);
    //     }
    // });

})