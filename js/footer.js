$(function() {
    var footerList = [
        {
            title: 'Investors'
        },
        {
            title: '物流配送'
        },
        {
            title: '售后服务'
        },
        {
            title: '联系我们'
        },
        {
            title: '加入我们'
        },
        {
            title: '帮助寺库招商'
        },
        {
            title: '[公示]直销管理条例'
        },
        {
            title: '[公示]禁止传销条例'
        },
        {
            title: '《用户注册协议》'
        },
        {
            title: '《隐私政策》'
        },
        {
            title: '《平台服务协议》'
        },
        {
            title: '《消费者告知书》'
        }

    ]
    for(var i = 0;i < footerList.length; i++) {
        // console.log(footerList[i]);
        $(`
            <li class="footerListLi">${footerList[i].title}</li>
        `).appendTo($('#leftList'));
    }
    var banquan = [
        {
            title: '<span>京公网安备 11010502038706号</span>'
        },
        {
            title: '京ICP证110119号 京ICP备09084709号-3'
        },
        {
            title: 'ISO9001中国质量管理体系认证'
        },
        {
            title: ' 出版物经营许可证'
        },
        {
            title: ' 食品经营许可证'
        },
        {
            title: ' 京B2-20181305'
        },
        {
            title: '京食药网食备201810026'
        },
        {
            title: ' (京)-非经营性-2019-0072'
        },
        {
            title: ' 客服电话：400-875-6789'
        },
        {
            title: ' COPYRIGHT © 2010-2018 北京寺库商贸有限公司 版权所有'   
        },
    ]
    for(var i = 0; i < banquan.length; i++) {
        $(`
            <li>${banquan[i].title}</li>
        `).appendTo($('#banquan'))
    }
})
