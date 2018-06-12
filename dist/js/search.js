/*
* @Author: liyue2018
* @Date:   2018-06-10 16:38:53
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 08:31:38
*/

// 搜索跳转

$(function () {
    // 实现用户点击搜索按钮，跳转到搜索结果页面
    // 给搜索按钮添加点击事件
    // 点击按钮跳转页面
    $('.search-btn').on('click', function() {
        // 用户输入的关键字
        var keyword = $(this).siblings('input').val();

        // 判断用户是否输入搜索关键字
        if (keyword) {

            // 当用户点击搜索按钮时，追加至数组中
            keyArr.push(keyword);
            // 存储到本地存储中 转换数组为字符串
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            // 关键字跳转，把关键字带入结果页面
            location.href = "search-result.html?keyword=" + keyword;

        } else {
            // 若没有搜索关键字，阻止跳转，并给出提示
            alert('请输入关键字');
        }
    });

    // 历史关键字存储

    // 存储关键的数组
    var keyArr = [];

    // 判断本地存储中是否有内容

    if (localStorage.getItem('keyArr')) {
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        // 拼接数据，展示到页面中
        var html = template('historyTpl', {result: keyArr});
        $('.history-list').html(html);
    }

    // 清空历史

    $('.clear-btn').on('click', function () {
        $('.history-list').html("");
        // 清空本地存储
         localStorage.removeItem('keyArr');
    })

});