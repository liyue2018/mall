/*
* @Author: liyue2018
* @Date:   2018-06-11 13:23:27
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 06:20:10
*/
$(function () {
    // 修改密码
    // 获取修改密码按钮并添加点击事件
    // 获取用户输入的信息
    // 对用户输入的信息做校验
    // 调用修改密码接口 实现修改密码功能
    // 跳转到登录页面 重新登录


    $('.modify-btn').on('click', function() {
        // 获取信息
        var oldPassword = $('[name="originPassword"]').val();
        var newPassword = $('[name="newPassword"]').val();
        var pconfirmNewPass = $('[name="pconfirmNewPass"]').val();
        var vCode = $('[name="vCode"]').val();
        // 信息验证
        var check = true;

        mui(".modify-form input").each(function() {
            //若当前input为空，则alert提醒 
            if(!this.value || this.value.trim() == "") {
                var label = this.previousElementSibling;
                mui.alert(label.innerText + "不允许为空");
                check = false;
                return false;
            }
            }); //校验通过，继续执行业务逻辑 
            if(check){
                mui.alert('验证通过!')
            }
        // 用户名非空 

        // if (!oldPassword) {
        //     mui.toast('请填写原密码');
        //     return;
        // }
        // 密码和确认密码相同
        // if (newPassword != pconfirmNewPass) {
        //     mui.toast('密码不一致');
        //     return;
        // }
        // // 认证码是6位
        // if (vCode.length != 6) {
        //     mui.toast('输入的认证码格式不正确');
        //     return;
        // }

        if(oldPassword && newPassword && pconfirmNewPass && vCode && newPassword === pconfirmNewPass) {
            $(this).html('正在修改新密码...');
            // setTimeout(function () {
            //     mui.toast('新密码修改成功');
            // }, 1000); 
            // 跳转
            setTimeout(function () {
                location.href = 'user.html';
            }, 2000)       
        }

        // 发送修改密码请求
        // $.ajax(function () {
        //     url: '',
        //     type: 'post',
        //     data: {
        //         oldPassword: oldPassword,
        //         newPassword: newPassword,
        //         vCode: vCode
        //     },
        //     success: function (res) {
        //         if (res.success) {
        //             mui.toast("修改密码成功");
        //             setTimeout(function () {
        //                 location.href = "login.html"
        //             }, 2000);
        //         }
        //         console.log(res);
        //     }
        // });

    // 获取认证码

    // $('.get-code').on('tap', function() {
    //     $.ajax(function () {
    //         url: '',
    //         type: 'get',
    //         success: function (res) {
    //             console.log(res.vCode);
    //         }
    //     });
    // });
    });
})