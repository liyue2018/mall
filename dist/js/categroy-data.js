/*
* @Author: liyue2018
* @Date:   2018-06-10 11:25:52
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-10 18:37:13
*/

$(function () {
    // 侧边栏滑动
    mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 一级分类的数据
    var firstData = {
        content: [
            {
                "id": 1,
                "categoryName": "女士馆",
                "isDelete": 1
            },
            {
                "id": 2,
                "categoryName": "男士馆",
                "isDelete": 1
            },
            {
                "id": 3,
                "categoryName": "运动馆",
                "isDelete": 1
            },
            {
                "id": 4,
                "categoryName": "海洋馆",
                "isDelete": 1
            },
            {
                "id": 5,
                "categoryName": "生物馆",
                "isDelete": 1
            },
            {
                "id": 7,
                "categoryName": "流量馆",
                "isDelete": 1
            },
            {
                "id": 8,
                "categoryName": "舞台馆",
                "isDelete": 1
            },
            {
                "id": 9,
                "categoryName": "舞蹈馆",
                "isDelete": 1
            },
            {
                "id": 10,
                "categoryName": "笑容馆",
                "isDelete": 1
            },
            {
                "id": 11,
                "categoryName": "生活馆",
                "isDelete": 1
            },
            {
                "id": 12,
                "categoryName": "哈哈馆",
                "isDelete": 1
            },
            {
                "id": 13,
                "categoryName": "天空馆",
                "isDelete": 1
            },
            {
                "id": 14,
                "categoryName": "虞姬馆",
                "isDelete": 1
            },
            {
                "id": 15,
                "categoryName": "花瓣馆",
                "isDelete": 1
            },
            {
                "id": 16,
                "categoryName": "玫瑰馆",
                "isDelete": 1
            }
        ]
}

    // ajax
    // 因为没有接口，所有这个ajax没有任何作用

    // $.ajax({
    //     url: '',
    //     type: 'get',
    //     success: function (response) {
    //         // console.log(response)
    //         // 拼接数据
    //         var html = template('category-first', {result: response.rows});
    //         $('.category-leftLinks').html(html);
    //         
    //         如果一级分类有数据，就获取一级分类的第一个id
    //         if (response.rows.length) {
    //              $('.category-leftLinks').find('li').eq(0).addClass('active');
    //              var id = response.rows[0].id;
    //              getSecondCategory(id);
    // }
    //     }
    // });
    // 二级分类的ajax
    // getSecondCategory();

    // function getSecondCategory(id) {
    //     $.ajax({
    //         url: '',
    //         type: 'get',
    //         data: {
    //             id: id;
    //         }
    //         success: function (response) {
    //             var html = template('category-second',response);
    //             $('.category-rightContent').html(html_second);
    //         }
    //     });
    // }


    // 二级分类的数据
    var secondData = {
        content: [
            {
                "id": 1,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 2,
                "brandName": "男士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 3,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 4,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 5,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 6,
                "brandName": "运动馆",
                "brandId": 3,
                "brandLogo": 'images/brand03.png'
            },
            {
                "id": 7,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            },
            {
                "id": 8,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            },
            {
                "id": 1,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 2,
                "brandName": "男士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 3,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 4,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 5,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 6,
                "brandName": "运动馆",
                "brandId": 3,
                "brandLogo": 'images/brand03.png'
            },
            {
                "id": 7,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            },
            {
                "id": 8,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            },
            {
                "id": 1,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 2,
                "brandName": "男士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 3,
                "brandName": "女士馆",
                "brandId": 1,
                "brandLogo": 'images/brand01.png'
            },
            {
                "id": 4,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 5,
                "brandName": "男士馆",
                "brandId": 2,
                "brandLogo": 'images/brand02.png'
            },
            {
                "id": 6,
                "brandName": "运动馆",
                "brandId": 3,
                "brandLogo": 'images/brand03.png'
            },
            {
                "id": 7,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            },
            {
                "id": 8,
                "brandName": "海洋馆",
                "brandId": 4,
                "brandLogo": 'images/brand04.png'
            }

        ]
    }
    // 一级分类的数据展示
    var html = template('category-first', firstData);
    document.querySelector('.category-leftLinks').innerHTML = html;
    // 默认第一个高亮显示
        $('.category-leftLinks').find('li').eq(0).addClass('active');

    // 二级分类数据的展示



    var html_second = template('categroy-second', secondData);
    $('.category-rightContent').html(html_second);

    // 点击一级分类获取二级分类的数据
    // 1. 一级分类添加点击事件
    $('.category-leftLinks').on('click','a', function () {

        var id = $(this).attr('data-id');
        // console.log(id);

        // 设置当前样式
        $(this).parent().addClass('active').siblings('li').removeClass('active');
    })
    // 2. 在事件处理函数中获取到一级分类的ID
    // 3. 调用二级分类的接口获取到对应的数据
    // 4.将数据展示到对应的位置
    // 5.如果接口中没有数据，要在页面中显示暂无数据
})

