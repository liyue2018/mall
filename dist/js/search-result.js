/*
* @Author: liyue2018
* @Date:   2018-06-10 17:28:38
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-10 21:50:36
*/

// 获取用户输入的关键字
var keyword = getParamsByUrl(location.href,"keyword");

$(function () {
    // var html = template('searchTpl',searchData);
    // $('.search-results').html(html);
    // getData(keyword);

});

var searchData = {
    content: [
        {
            "id": 1,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 2,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 3,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 4,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 5,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 6,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 7,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },
        {
            "id": 8,
            "proName": '图拉姆皮鞋春夏新款尖头商务休闲鞋系带正装鞋子 黑色单里款 43',
            "proImg": 'images/product.png',
            "proNowprice": '￥560.00',
            "proDelprice": '￥990.00'
        },

    ]
}

// 从地址栏中获取参数
// @param {string} url 地址字符串
// @param {string} name 要获取的参数名
// @return {string} 参数名称对应的参数值

function getParamsByUrl (url, name) {
    var params = url.substr(url.indexOf('?')+1);
    var param = params.split('&');
    for (var i = 0;i<param.length;i++) {
        var current = param[i].split('=');
        if (current[0] == name) {
            return current[1];
        }
    }
    return null;
}

// $.ajax({
//     url: '',
//     type: 'get',
//     data: {
//         page: 1,
//         pageSize: 6,
//         proName: keyword
//     },
//     success: function(response) {

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

function getData() {
    var html = template('searchTpl',searchData);
    $('.search-results').html(html);
    this.endPullupToRefresh(true);
}


















