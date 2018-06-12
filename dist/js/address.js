/*
* @Author: liyue2018
* @Date:   2018-06-11 15:03:58
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 10:57:51
*/

$(function () {
    var html = template('addressTpl', addressData);
    $('.address-list').html(html);

    // 删除收货地址
    $('.address-list').on('click','.del-btn', function() {
        var id = $(this).attr('data-id');
        var li = this.parentNode.parentNode;
        var that = this;
        mui.confirm("确认要删除吗？","真的要删了我？", function(message) {
            // 确认删除
            if (message.index == 1) {
                $(that).parent().parent().remove();
                // $.ajax({
                //     url: '',
                //     type: 'post',
                //     data: {
                //         id: id
                //     },
                //     success: function (res) {
                //         if (res.success) {
                //             // 删除成功 重新加载页面
                //             location.reload();
                //         }
                //     }
                // });
            } else {
                // 取消删除
                mui.swipeoutClose(li);
            }

        });
    });

    // 编辑收获地址
    $('.address-list').on('click', '.edit-btn', function () {
        var id = $(this).attr('data-id');
        for (var i = 0; i < addressData.content.length;i++) {
            if (addressData.content[i].id == id) {
                // alert(addressData.content[i]);

                localStorage.setItem('editAddress',JSON.stringify(addressData.content[i]));
                // 终止循环
                break;

            }
        }
        // 跳转至收货地址管理页面
        location.href = "addAddress.html?isEdit=1";
        // 传递数据至地址管理页面
        // 确认按钮添加点击事件
        // 调用接口 执行编辑操作
        // 跳转回收货地址列表页面

    })
}) 

var addressData = {
    content: [
        {
            "id": 1,
            "userId": 2,
            "userName": '希希',
            "address": '北京市海淀区',
            "addressDetail": '西三旗建材路555号',
            "postCode": '1001010',
            isDelete: 1
        },
        {
            "id": 2,
            "userId": 2,
            "userName": '哈哈',
            "address": '上海市海淀区',
            "addressDetail": '西三旗建材路555号',
            "postCode": '1001012',
            isDelete: 1
        },
        {
            "id": 3,
            "userId": 3,
            "userName": '呵呵',
            "address": '上海市虹口区',
            "addressDetail": '西三旗建材路555号',
            "postCode": '1001013',
            isDelete: 1
        },
        {
            "id": 4,
            "userId": 4,
            "userName": '悠悠',
            "address": '合肥市经济技术开发区',
            "addressDetail": '西三旗建材路555号',
            "postCode": '1001014',
            isDelete: 1
        },
    ]
}