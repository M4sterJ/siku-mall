$(function() {
    $('.login').click(function() {
        location.assign('../html/login.html')
    });
    $('.register').click(function() {
        location.assign('../html/register.html')
    });
    
    var listTitle = [
        {
            title: 'PANDORA/潘多拉'
        },
        {
            title: 'Swarovski/施华洛世奇'
        },
        {
            title: 'DIOR/迪奥'
        },
        {
            title: 'redline/redline'
        },
        {
            title: 'APM Monaco/APM Monaco'
        },
        {
            title: 'GUCCI/古驰'
        },
        {
            title: 'CLORIS/克劳瑞斯'
        },
        {
            title: 'Daisy Fellowes/黛西法罗'
        },
        {
            title: 'CARTIER/卡地亚'
        },
        {
            title: 'SANDYRILLA/仙蒂瑞拉'
        },
    ];
    var listCard = [
        {
            bigimg1: '../img/card1-1.png',
            bigimg2: '../img/card1-2.png',
            bigimg3: '../img/card1-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【ins网红同款】APM Monaco/APM Monaco大小星星项链女轻奢六芒星流星锁骨链 3350 气质时尚百搭毛衣颈链潮首饰品 送女友闺蜜生日礼物吊坠',
            money: '489',
        },
        {
            bigimg1: '../img/card2-1.jpg',
            bigimg2: '../img/card2-2.jpg',
            bigimg3: '../img/card2-3.jpg',
            hongkong: '欧洲',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【预售2周左右发货】HERMES/爱马仕 Clic H窄版纯色珐琅彩玫瑰金底色手镯多色可选图片',
            money: '4899',
        },
        {
            bigimg1: '../img/card3-1.png',
            bigimg2: '../img/card3-2.png',
            bigimg3: '../img/card3-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【林志玲 姚晨 蔡依林同款】APM Monaco/APM Monaco金黄色英文名字首字母项链女 圆牌毛衣锁骨颈链 AC3880OXY 简约S925银挂件情侣闺蜜送女友礼物中性男款潮首饰品图片',
            money: '450',
        },
        {
            bigimg1: '../img/card4-1.jpg',
            bigimg2: '../img/card4-2.jpg',
            bigimg3: '../img/card4-3.jpg',
            hongkong: '香港',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CHANEL /香奈儿  经典 爆款双C耳钉图片',
            money: '450',
        },
        {
            bigimg1: '../img/card5-1.png',
            bigimg2: '../img/card5-2.png',
            bigimg3: '../img/card5-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【宋祖儿同款】APM Monaco/APM Monaco不对称名字首字母耳环女小耳坠 11748 ins风复古情侣闺蜜耳圈银首饰品潮送女友生日礼物图片',
            money: '210',
        },
        {
            bigimg1: '../img/card6-1.jpg',
            bigimg2: '../img/card6-2.jpg',
            bigimg3: '../img/card6-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CLORIS/克劳瑞斯 【好物推荐】18k金日本工艺 Akoya海水珍珠镶嵌玛瑙 时尚四叶草项饰 项链 首饰项饰珍珠项链珍珠吊坠锁骨链毛衣链一体链图片',
            money: '822',
        },
        {
            bigimg1: '../img/card7-1.jpg',
            bigimg2: '../img/card7-2.jpg',
            bigimg3: '../img/card7-3.jpg',
            hongkong: '美国',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【包邮包税】Givenchy/纪梵希  多碎钻环绕中心圆钻手环简洁百搭送礼 60485903图片',
            money: '564',
        },
        {
            bigimg1: '../img/card8-1.jpg',
            bigimg2: '../img/card8-2.jpg',
            bigimg3: '../img/card8-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'VIVALANDS/VIVALANDS【美人鱼系列】美人鱼尾流苏耳环 礼物 小众设计师品牌 ins网红 明星同款 百搭耳饰饰品图片',
            money: '191',
        },
        {
            bigimg1: '../img/card1-1.png',
            bigimg2: '../img/card1-2.png',
            bigimg3: '../img/card1-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【ins网红同款】APM Monaco/APM Monaco大小星星项链女轻奢六芒星流星锁骨链 3350 气质时尚百搭毛衣颈链潮首饰品 送女友闺蜜生日礼物吊坠',
            money: '489',
        },
        {
            bigimg1: '../img/card2-1.jpg',
            bigimg2: '../img/card2-2.jpg',
            bigimg3: '../img/card2-3.jpg',
            hongkong: '欧洲',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【预售2周左右发货】HERMES/爱马仕 Clic H窄版纯色珐琅彩玫瑰金底色手镯多色可选图片',
            money: '4899',
        },
        {
            bigimg1: '../img/card3-1.png',
            bigimg2: '../img/card3-2.png',
            bigimg3: '../img/card3-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【林志玲 姚晨 蔡依林同款】APM Monaco/APM Monaco金黄色英文名字首字母项链女 圆牌毛衣锁骨颈链 AC3880OXY 简约S925银挂件情侣闺蜜送女友礼物中性男款潮首饰品图片',
            money: '450',
        },
        {
            bigimg1: '../img/card4-1.jpg',
            bigimg2: '../img/card4-2.jpg',
            bigimg3: '../img/card4-3.jpg',
            hongkong: '香港',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CHANEL /香奈儿  经典 爆款双C耳钉图片',
            money: '450',
        },
        {
            bigimg1: '../img/card5-1.png',
            bigimg2: '../img/card5-2.png',
            bigimg3: '../img/card5-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【宋祖儿同款】APM Monaco/APM Monaco不对称名字首字母耳环女小耳坠 11748 ins风复古情侣闺蜜耳圈银首饰品潮送女友生日礼物图片',
            money: '210',
        },
        {
            bigimg1: '../img/card6-1.jpg',
            bigimg2: '../img/card6-2.jpg',
            bigimg3: '../img/card6-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CLORIS/克劳瑞斯 【好物推荐】18k金日本工艺 Akoya海水珍珠镶嵌玛瑙 时尚四叶草项饰 项链 首饰项饰珍珠项链珍珠吊坠锁骨链毛衣链一体链图片',
            money: '822',
        },
        {
            bigimg1: '../img/card7-1.jpg',
            bigimg2: '../img/card7-2.jpg',
            bigimg3: '../img/card7-3.jpg',
            hongkong: '美国',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【包邮包税】Givenchy/纪梵希  多碎钻环绕中心圆钻手环简洁百搭送礼 60485903图片',
            money: '564',
        },
        {
            bigimg1: '../img/card8-1.jpg',
            bigimg2: '../img/card8-2.jpg',
            bigimg3: '../img/card8-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'VIVALANDS/VIVALANDS【美人鱼系列】美人鱼尾流苏耳环 礼物 小众设计师品牌 ins网红 明星同款 百搭耳饰饰品图片',
            money: '191',
        },
        {
            bigimg1: '../img/card1-1.png',
            bigimg2: '../img/card1-2.png',
            bigimg3: '../img/card1-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【ins网红同款】APM Monaco/APM Monaco大小星星项链女轻奢六芒星流星锁骨链 3350 气质时尚百搭毛衣颈链潮首饰品 送女友闺蜜生日礼物吊坠',
            money: '489',
        },
        {
            bigimg1: '../img/card5-1.png',
            bigimg2: '../img/card5-2.png',
            bigimg3: '../img/card5-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【宋祖儿同款】APM Monaco/APM Monaco不对称名字首字母耳环女小耳坠 11748 ins风复古情侣闺蜜耳圈银首饰品潮送女友生日礼物图片',
            money: '210',
        },
        {
            bigimg1: '../img/card6-1.jpg',
            bigimg2: '../img/card6-2.jpg',
            bigimg3: '../img/card6-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CLORIS/克劳瑞斯 【好物推荐】18k金日本工艺 Akoya海水珍珠镶嵌玛瑙 时尚四叶草项饰 项链 首饰项饰珍珠项链珍珠吊坠锁骨链毛衣链一体链图片',
            money: '822',
        },
        {
            bigimg1: '../img/card7-1.jpg',
            bigimg2: '../img/card7-2.jpg',
            bigimg3: '../img/card7-3.jpg',
            hongkong: '美国',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【包邮包税】Givenchy/纪梵希  多碎钻环绕中心圆钻手环简洁百搭送礼 60485903图片',
            money: '564',
        },
        {
            bigimg1: '../img/card8-1.jpg',
            bigimg2: '../img/card8-2.jpg',
            bigimg3: '../img/card8-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'VIVALANDS/VIVALANDS【美人鱼系列】美人鱼尾流苏耳环 礼物 小众设计师品牌 ins网红 明星同款 百搭耳饰饰品图片',
            money: '191',
        },
        {
            bigimg1: '../img/card2-1.jpg',
            bigimg2: '../img/card2-2.jpg',
            bigimg3: '../img/card2-3.jpg',
            hongkong: '欧洲',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【预售2周左右发货】HERMES/爱马仕 Clic H窄版纯色珐琅彩玫瑰金底色手镯多色可选图片',
            money: '4899',
        },
        {
            bigimg1: '../img/card3-1.png',
            bigimg2: '../img/card3-2.png',
            bigimg3: '../img/card3-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【林志玲 姚晨 蔡依林同款】APM Monaco/APM Monaco金黄色英文名字首字母项链女 圆牌毛衣锁骨颈链 AC3880OXY 简约S925银挂件情侣闺蜜送女友礼物中性男款潮首饰品图片',
            money: '450',
        },
        {
            bigimg1: '../img/card4-1.jpg',
            bigimg2: '../img/card4-2.jpg',
            bigimg3: '../img/card4-3.jpg',
            hongkong: '香港',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CHANEL /香奈儿  经典 爆款双C耳钉图片',
            money: '450',
        },
        {
            bigimg1: '../img/card5-1.png',
            bigimg2: '../img/card5-2.png',
            bigimg3: '../img/card5-3.png',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【宋祖儿同款】APM Monaco/APM Monaco不对称名字首字母耳环女小耳坠 11748 ins风复古情侣闺蜜耳圈银首饰品潮送女友生日礼物图片',
            money: '210',
        },
        {
            bigimg1: '../img/card6-1.jpg',
            bigimg2: '../img/card6-2.jpg',
            bigimg3: '../img/card6-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'CLORIS/克劳瑞斯 【好物推荐】18k金日本工艺 Akoya海水珍珠镶嵌玛瑙 时尚四叶草项饰 项链 首饰项饰珍珠项链珍珠吊坠锁骨链毛衣链一体链图片',
            money: '822',
        },
        {
            bigimg1: '../img/card7-1.jpg',
            bigimg2: '../img/card7-2.jpg',
            bigimg3: '../img/card7-3.jpg',
            hongkong: '美国',
            ziying: '自营',
            zhijiang: '直降',
            desc: '【包邮包税】Givenchy/纪梵希  多碎钻环绕中心圆钻手环简洁百搭送礼 60485903图片',
            money: '564',
        },
        {
            bigimg1: '../img/card8-1.jpg',
            bigimg2: '../img/card8-2.jpg',
            bigimg3: '../img/card8-3.jpg',
            hongkong: '',
            ziying: '自营',
            zhijiang: '直降',
            desc: 'VIVALANDS/VIVALANDS【美人鱼系列】美人鱼尾流苏耳环 礼物 小众设计师品牌 ins网红 明星同款 百搭耳饰饰品图片',
            money: '191',
        },
    ];
    var lastImg = [
        {
            imgUrl: '../img/last1.jpg',
            tips: '#ONE by YIFAN WANG/#ONE by YIFAN WANG  高迪曲线淡水珍珠 双珠耳环 大耳饰 耳环 耳钉 耳饰 首饰 无有乐园',
            money: '1038'
        },
        {
            imgUrl: '../img/last2.jpg',
            tips: 'PANDORA/潘多拉 镂空雕镶嵌刻复古 字母K 串珠791855CZ',
            money: '333'
        },
        {
            imgUrl: '../img/last3.jpg',
            tips: 'WENLI/雯莉珠宝首饰胸饰 女士珊瑚挂件沙丁级珊瑚红花绿叶款胸针/吊坠',
            money: '1760'
        },
        {
            imgUrl: '../img/last4.jpg',
            tips: 'umbra  ORCHID 兰花多功能首饰架优雅饰品珠宝项链收纳架长款首饰置物架 青铜色',
            money: '235'
        },
        {
            imgUrl: '../img/last5.jpg',
            tips: 'MIKO/蜜库珠宝 琥珀蜜蜡首饰套装 吊坠戒指耳饰三件套',
            money: '508'
        },
        {
            imgUrl: '../img/last6.jpg',
            tips: 'PANDORA/潘多拉全锆石镶嵌925银串珠 深粉色',
            money: '584'
        },

    ]
    //首饰列表 品牌分类数据
    for(var i = 0; i < listTitle.length; i++) {
        $(`
            <li>${listTitle[i].title}</li>
        `).appendTo($('.pinpaiUl'));
    };
    //卡片加载数据
    for(var i = 0; i < listCard.length; i++) {
        $(`
        <div class="listCard">
            <div class="card">
                <div class="bigImg">
                    <img class="big1" src="${listCard[i].bigimg1}" alt="">
                    <img class="big2" src="${listCard[i].bigimg2}" alt="">
                    <img class="big2" src="${listCard[i].bigimg3}" alt="">
                </div>
                <div class="miniImg">
                    <div class="imgBox active">
                        <img src="${listCard[i].bigimg1}" alt="">
                    </div>
                    <div class="imgBox">
                        <img src="${listCard[i].bigimg2}" alt="">
                    </div>
                    <div class="imgBox">
                        <img src="${listCard[i].bigimg3}" alt="">
                    </div>
                </div>
                <div class="tips">
                    <span class="hongkong">${listCard[i].hongkong}</span>
                    <span class="ziying">${listCard[i].ziying}</span>
                    <span class="zhijiang">${listCard[i].zhijiang}</span>
                </div>
                <div class="desc">
                    <p>${listCard[i].desc}</p>
                </div>
                <p class="moneyTips">
                    ￥<span>${listCard[i].money}</span>
                </p>
            </div>
        </div>
        `).appendTo($('.conCard'));
    }
    //插入lastCard
    for(var i = 0; i < lastImg.length; i++) {
        $(`
        <div class="lastCard">
            <div>
                <img src="${lastImg[i].imgUrl}" alt="">
            </div>
            <div class="lastDesc">${lastImg[i].tips}</div>
            <div>￥<span>${lastImg[i].money}</span></div>
        </div>
        `).appendTo($('.lastBox'));
    }
    //弹出小图片
    $('.card').hover(function() {
        $(this).find('.miniImg').css({
            'display': 'block',
        });
    },function() {
        $(this).find('.miniImg').css('display','none');
    })
    //卡片
    $('.miniImg .imgBox').hover(function(){
        console.log(this);
        $('.miniImg div').removeClass('active');
        $(this).addClass('active');


        $(this).parent().siblings().eq(0).find('img').css('display','none');
        // $('.bigImg img').eq($(this).index()).css('display','block');
        $(this).parent().siblings().eq(0).find('img').eq($(this).index()).css('display','block');
    },function(){

    });
    // 返回顶部方法
    //首先将#btn隐藏
    $(".goTop").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
      $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
          $(".goTop").fadeIn(200);
        } else {
          $(".goTop").fadeOut(200);
        }
      });   
    $('.goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
          },500);
    });
    //点击logo返回首页
    $('.logo').click(function() {
        location.assign('../index.html');
    })
    //折叠菜单
    $('.pageControl').click(function() {
        $('.address').css('display','block');
        $(this).css('display','none');
        $('.pageControl2').css('display','block')
    })
    $('.pageControl2').click(function() {
        $('.address').css('display','none');
        $(this).css('display','none');
        $('.pageControl').css('display','block')
    });
    //点击跳转详情页
    $('.listCard').click(function() {
        location.assign('./detail.html')
    })
})