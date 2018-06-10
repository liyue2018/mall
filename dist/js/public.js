/*
* @Author: liyue2018
* @Date:   2018-06-11 00:12:22
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-11 00:16:57
*/

$(function () {
    // 回复a元素的跳转
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        })
    })
})