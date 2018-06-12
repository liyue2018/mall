/*
* @Author: liyue2018
* @Date:   2018-06-10 17:28:38
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 13:42:42
*/



$(function () {
    // 获取用户输入的关键字
    var keyword = getParamsByUrl(location.href,"keyword");
    var html = "";
    // 侧边栏滑动
    mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 价格排序
    // 轻敲事件
    // var data = [];
    // var flag = true;
    // var len = searchData.content.length;
    // $('.price-sort').on('tap', function () {
    //     if (flag) {
    //         for (var i = 0; i < len; i ++) {
    //             data.push(searchData.content[i].proNowprice);
    //             data.sort(sortNumber);
    //         }
    //     }
    // });


var searchData = {
    content: [
        {
            "id": 1,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '560.00',
            "proDelprice": '990.00'
        },
        {
            "id": 2,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '400.00',
            "proDelprice": '990.00'
        },
        {
            "id": 3,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '240.00',
            "proDelprice": '990.00'
        },
        {
            "id": 4,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '900.00',
            "proDelprice": '990.00'
        },
        {
            "id": 5,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '600.00',
            "proDelprice": '990.00'
        },
        {
            "id": 6,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '260.00',
            "proDelprice": '990.00'
        },
        {
            "id": 7,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '50.00',
            "proDelprice": '990.00'
        },
        {
            "id": 8,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '60.00',
            "proDelprice": '990.00'
        },

    ]
}


// var page = 1;
// $.ajax({
//     url: '',
//     type: 'get',
//     data: {
//         page: page++,
//         pageSize: 6,
//         proName: keyword,
//         
//     },
//     success: function(response) {
//         if (response.data.length > 0) {
//             html += template('.searchTpl',response);
//             $('.search-results').html(html);
//             this.endPullupToRefresh(false);
//         } else {
//             // 告诉上拉加载当前数据加载完毕
//             this.endPullupToRefresh(true);
//         }

//     }
// });

// 上拉加载

mui.init({
  pullRefresh : {
    container:'#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
    up : {
      height:50,//可选.默认50.触发上拉加载拖动距离
      auto:true,//可选,默认false.自动上拉加载一次
      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
      callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    }
  }
});

// 下拉渲染数据

function getData() {
    html += template('searchTpl',searchData);
    $('.search-results').html(html);
    if (searchData.length > 0) {
        html += html;
        $('.search-results').html(html);
        this.endPullupToRefresh(false);
    } else {
        // 加载完毕
        this.endPullupToRefresh(true);
    }
}

// 排序函数

// function sortNumber(a,b)
// {
//     return a - b
// }

});
















