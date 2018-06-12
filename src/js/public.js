/*
* @Author: liyue2018
* @Date:   2018-06-11 00:12:22
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-12 10:41:19
*/

$(function () {
    // 回复a元素的跳转
    $('body').on('tap', 'a', function(){
        mui.openWindow({
            url: $(this).attr('href')
        })
    });
});
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
