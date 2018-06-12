/*
* @Author: liyue2018
* @Date:   2018-06-12 14:43:04
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 16:20:39
*/
$(function () {
    // 获取地址栏传进来的id
    var id = getParamsByUrl(location.href,'id');
    console.log(id);
    var detailData = {
        content: [
            {          
                "id": 1,
                "proName": "金龙珠宝 黄金吊坠女款 狗狗本命年生肖萌趣花花狗吊坠 3D硬金首饰品999足金 萌趣狗",
                "oldPrice": 998,
                "price": 600,
                "proDesc": null,
                "pic": "images/product.png",
                "size": '170-195',
                "status": 1,
                "updateTime": "2018-05-05T04:05:23.000Z",
                "num": 10,
                "brandId": 1
            }
        ]
    };

    // var html = template('productTpl', detailData);
    // console.log(detailData);
    // $('.main-content').html(html);

    // 调取接口数据
    // $.ajax({
    //     url: '',
    //     type: 'get',
    //     data: {
    //         id: id
    //     },
    //     success: function(res) {
    //         var html = template("productTpl",res);

    //     }
    // })

    // 给尺码添加点击事件
    $('.size-list').on('tap','span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 增加计算功能
    var count_input = $('.count-input');

    $('.reduce').on('click', function() {
        var num = count_input.val();
        num--;

        if (num < 1) {
            num = 1;
        }
        count_input.val(num);
    });
    $('.plus').on('click', function() {
        var num = count_input.val();
        num++;
        count_input.val(num);
    });
});

