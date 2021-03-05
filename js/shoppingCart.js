$(function() {
    //proList 数据
    var proList = [
        {
            proId: 1,
            imgUrl: '../img/jiake.jpg',
            proName: '男SAINT LAURENT PARIS/SAINT LAURENT PARIS<br/> 19年秋冬 百搭 女性 黑色 女士夹克<br/> 589328YC2UE1000<br/>颜色：黑色   尺码：法码38 ',
            proFahuo: '欧洲',
            vipPrice: 30918,
            proNum: '1',
            sumPrice: 30918,
            caozuo: '删除'
        },
        {
            proId: 2,
            imgUrl: '../img/nike.jpg',
            proName: 'Nike耐克  男鞋 高帮 板鞋 小白鞋 2020新款 轻便<br/> 运动鞋 休闲鞋<br/颜色：白色   尺码： 欧码40 ',
            proFahuo: '中国大陆',
            vipPrice: 719,
            proNum: '1',
            sumPrice: 719,
            caozuo: '删除'
        },
        {
            proId: 3,
            imgUrl: '../img/sk2.jpg',
            proName: '【包税】SK-II/SK2 神仙水护肤套装（神仙水<br/>230ml+清莹露230ml）<br/>尺码：2件套 ',
            proFahuo: '中国香港',
            vipPrice: 1419,
            proNum: '1',
            sumPrice: 1419,
            caozuo: '删除'
        },
        {
            proId: 4,
            imgUrl: '../img/aodi.jpg',
            proName: '明星车库租车 奥迪R8 日租【租赁方：北京星库汽车科技有限公司】',
            proFahuo: '中国大陆',
            vipPrice: 500,
            proNum: '1',
            sumPrice: 500,
            caozuo: '删除'
        },
        {
            proId: 5,
            imgUrl: '../img/card1-1.png',
            proName: '【ins网红同款】APM Monaco/APM Monaco大小星星项链女轻奢六芒星流星锁骨链 3350 气质时尚百搭毛衣颈链潮首饰品<br/>颜色：银色   尺码：均码  ',
            proFahuo: '中国大陆',
            vipPrice: 489,
            proNum: '1',
            sumPrice: 489,
            caozuo: '删除'
        },
    ];
    proList.map(function(item) {
        $(`
            <div class="proCard">
                <div class="selectThis">
                    <input type="checkBox" class = "cardListChecked" name="" id="">
                </div>
                <div class="thisName">
                    <img src="${item.imgUrl}" alt="">
                    <span>${item.proName}</span>
                </div>
                <div class="thisFahuo">${item.proFahuo}</div>
                <div class="thisPrice">￥<span>${item.vipPrice}</span></div>
                <div class="thisCount">
                    <div class="countBox">
                        <div class="del">-</div>
                        <input class="countPanel" type="text" name="" value="${item.proNum}">
                        <div class="add">+</div>
                    </div>
                </div>
                <div class="thisSum">
                    <span>￥</span>
                    <span class= "xiaoji">${item.sumPrice}</span>
                    <span>元</span>
                </div>
                <div class="thisContorl">
                    ${item.caozuo}
                </div>
            </div>
        `).appendTo($('.proList'));
    });
    var sLeft = 0;
    var isClick = true;
    //轮播图向左
    $('.left').click(function () {
        
        if(isClick ){
		isClick = false
		if ($('.showPanel').css('left') == '0px') {
            console.log('没有啦');
        }else {
            sLeft += 910;
            console.log(456);
            $('.showPanel').css({
                left: sLeft
            })
        }
		setTimeout(function() {
			isClick = true;
		}, 500);
	}
    })
    //轮播图向右
    $('.right').click(function () {
        console.log($('.showPanel').css('left'));
        if(isClick ){
		isClick = false
		if (Number($('.showPanel').css('left').replace('px','')) < -1820) {
            console.log('没有啦');
        }else {
            sLeft -= 910;
            $('.showPanel').css('left', sLeft)
        }
		setTimeout(function() {
			isClick = true;
		}, 500);
	}
    });
    //购物车全选事件  先声明一个选中的数组
    var proSelect = [];
    //声明一个数字 用来计算选中复选框的数量
    var count =  0;
    //每个复选框的点击事件 版本一（有BUG）
    // $('.cardListChecked').click(function () {
    //     //获取到点击到的复选框的index
    //     var index = $('.cardListChecked').index(this);
    //     // console.log(this);
    //     //如果点击选中，将选中的数据push到选中数组中
    //     if(this.checked) {
    //         count++;
    //         proSelect.push(proList[index]);
    //         ($(this).parent().parent()).css('background','yellowGreen');
    //         // console.log(proSelect);
    //     }else {
    //         count--;
    //         //获取添加到选中数组中数据的下标
    //         var i = proSelect.indexOf(proList[index]);
    //         proSelect.splice(i,1);
    //         ($(this).parent().parent()).css('background','#fff');
    //         // console.log(proSelect);
    //     }
    //     //当选中全部复选框时 全选激活
    //     if(count == proList.length) {
    //         $('#selectAll')[0].checked = true;
    //         $('#selectAll1')[0].checked = true;
    //     }else {
    //         $('#selectAll')[0].checked = false;
    //         $('#selectAll1')[0].checked = false;

    //     }
    //     allProPrice();
        
    // });

    // 单个复选框点击事件 版本二（暂未发现BUG）
    $('.proList').on('click','input:checkBox',function() {
        var index = $('.cardListChecked').index(this);
        var data = $('.proList').find('input:checkBox').length;
        // console.log(data);
        var checkedNum = $('.proList').find('input:checked').length;
        // console.log(checkedNum);
        $('#selectAll').prop('checked',checkedNum == data);
        allProPrice();
        if($(this).prop('checked')) {
            count++;
            ($(this).parent().parent()).css('background','#fdf0ef');
            proSelect.push(proList[index]);
        }else {
            count--;
            var i = proSelect.indexOf(proList[index]);
            proSelect.splice(i,1);
            ($(this).parent().parent()).css('background','#fff');
        }
        allProPrice();

    });

    //全选框点击事件
    $('#selectAll').click(function() {
        $('.proCard').css('background','#fdf0ef');
        //当选中全选时，激活所有复选框
        var isSelectAll = $('#selectAll').prop('checked');
        // console.log(isSelectAll);
        if(isSelectAll) {
            $('.cardListChecked').prop('checked',true);
            //将选中数组变成proList
            proSelect = proList.concat();
            // console.log(proSelect);
        }else {
            $('.cardListChecked').prop('checked',false);
            //将选中数组清空
            proSelect = [];
        $('.proCard').css('background','#fff');

        }
        allProPrice()
    });
    //第二个全选框
    $('#selectAll1').click(function() {
        $('.proCard').css('background','#fdf0ef');
        //当选中全选时，激活所有复选框
        var isSelectAll = $('#selectAll1')[0].checked;
        console.log(isSelectAll);
        if(isSelectAll) {
            $('.cardListChecked').prop('checked',true);
            $('#selectAll')[0].checked = true;
            //将选中数组变成proList
            proSelect = proList.concat();
        }else {
            $('.cardListChecked').prop('checked',false);
            $('#selectAll')[0].checked = false;
            //将选中数组清空
            proSelect = [];
        $('.proCard').css('background','#fff');

        }
        allProPrice()
    });
    //‘-’的点击事件
    $('.del').click(function(){
		//通过index传this下标得到this为第几个class
        var index = $('.del').index(this);
        // console.log(index);
        proList[index].proNum--;
        // console.log(proList[index]);
		if( proList[index].proNum <= 0 ){
			proList[index].proNum = 0
		}
        $('.countPanel').eq(index).val(proList[index].proNum);
        oneProPrice(index);
        allProPrice()
	})
    //+ 的点击事件
	$('.add').click(function(){
		//通过index传this下标得到this为第几个class
		var index = $('.add').index(this);
		proList[index].proNum++;
        $('.countPanel').eq(index).val(proList[index].proNum);
        oneProPrice(index);
        allProPrice()
    });
    //单个商品的总价
	function oneProPrice(index){
		proList[index].sumPrice = proList[index].proNum * proList[index].vipPrice;
		$('.xiaoji').eq(index).html(proList[index].sumPrice);
    };
    //所有商品总价
    function allProPrice() {
        var total = 0;
        var proCount = 0;
        for(var i = 0; i < proSelect.length; i++ ){
            total += proSelect[i].sumPrice;
            proCount += Number(proSelect[i].proNum);
        }
        $('.total').html(total);
        $('.goodsCount').html(proCount);
    };
    // //删除商品
	$('.thisContorl').click(function(){
		var index = $('.thisContorl').index(this);
		$('.proCard')[index].remove();
        var i = proSelect.indexOf(proList[index]);
        console.log(i);
		proSelect.splice(i, 1);
		proList.splice(index, 1);
        allProPrice();
        console.log(proSelect);
    })
    $('.continue').on('click', function() {
        window.history.back();
    })
    //跳转到订单页
    $('.now').click(function() {
        location.assign('../html/dingdan.html')
    });
    $('.proCard .thisName').on('click',function() {
        window.location.href = '../html/detail.html'
    });
    $('.proCard .thisName').on('mouseover',function() {
        $(this).css('color','gold')
    })
    $('.proCard .thisName').on('mouseout',function() {
        $(this).css('color','#666')
    })
})