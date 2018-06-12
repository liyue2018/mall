$(function () {

    var isEdit = Number(getParamsByUrl(location.href,'isEdit'));

    if (isEdit) {
        // 编辑操作
            if (localStorage.getItem("editAddress")) {
            var address = JSON.parse(localStorage.getItem("editAddress"));
            var html = template('editTpl',address);
            $('.addAdress-form').html(html);
        }

    } else {
        // 添加操作
            var html = template('editTpl',{});
            $('.addAdress-form').html(html);
    }
    // 初始化
    // 三级联动
     var picker = new mui.PopPicker({layer: 3});
     // 为picker选择器添加数据
     picker.setData(cityData);
     $('#selectCity').on('tap',function() {
        picker.show(function(selectItems) {
            $('#selectCity').val(selectItems[0].text + selectItems[1].text + selectItems[2].text);
        });
     });

     // 添加收货地址
     // 1.获取地址管理按钮并且添加点击事件
     // 2.获取用户输入的表单信息
     // 3.对用户输入的表单信息进行校验
     // 4.调用添加收货地址接口 实现功能
     // 5.跳转回收货地址列表页面 

     $('.sure-btn').on('tap', function () {
        var username = $.trim($('[name="username"]').val());
        var postCode = $.trim($('[name="postCode"]').val());
        var city = $.trim($('[name="city"]').val());
        var detail = $.trim($('[name="detail"]').val());

        // 信息校验

        if (!username) {
            mui.toast('请输入收货人姓名');
            return;
        }
        if (!postCode) {
            mui.toast('请输入邮政编码');
            return;
        }
        if (!city) {
            mui.toast('请选择收货地址');
            return;
        }
        if (!detail) {
            mui.toast('请输入详细地址');
            return;
        }

        if (username && postCode && city && detail) {
            if (isEdit) {
                $('.sure-btn').text('正在修改地址...');
                setTimeout(function() {
                     mui.toast("地址修改成功");
                 }, 1000);
            } else {
                $('.sure-btn').text('正在添加地址...');
                setTimeout(function() {
                     mui.toast("地址添加成功");
                 }, 1000);
            }
            // 页面跳转
            setTimeout(function() {
                location.href = 'address.html'
            }, 2000);
        }


        // var data = {
        //         address: city,
        //         addressDetail: detail,
        //         recipients: username,
        //         postCode: postCode
        // }
        // if (isEdit) {
        //     // 编辑操作
        //     var url = "addadress";
        //     data.id = address.id;
        // } else {
        //     // 添加操作
        //     var url = "updateAdress";


        // }

        // ajax 
        // $.ajax(function () {
        //     url: url,
        //     type: 'post',
        //     data: data,
        //     success: function(res) {
        //         console.log(res);
        //         if (res.success) {
        //             if (isEdit) {
        //                 mui.toast("地址添加成功");
        //             } else {
        //                 mui.toast("地址修改成功");
        //             }
        //             setTimeout(function() {
        //                 location.href = 'address.html'
        //             }, 2000);
        //         }
        //     }
        // });
     });
})