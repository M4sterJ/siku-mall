window.onload = function() {
    var isClick = true;
    //商品列表数据
    var proArr = [
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },{
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg1.jpg',
            messageTitle: 'HOGAN/HOGAN',
            messageDetail: '2020秋冬新品HOGAN/HOGAN女士增高老爹鞋MaxiIActive系列运动鞋',
            proMoney: 4500
        },
        {
            proId: 1,
            imgUrl: './img/bg2.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg3.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg4.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
        {
            proId: 1,
            imgUrl: './img/bg5.jpg',
            messageTitle: 'ARMANI EXCHANGE/ARMANI EXCHANGE',
            messageDetail: 'ARMANI EXCHANGE 藏蓝色 男士标语涂鸦印花圆领短袖T恤 3HZTLF-ZJBVZ-1583 2020年春夏',
            proMoney: 340
        },
    ];
        // 循环插入商品
    for (var i = 0; i < proArr.length; i++) {
        $(`
            <li>
                <div class="proImg">
                    <img src="${proArr[i].imgUrl}" alt="">
                    <div class="mark"></div>
                </div>
                <div class="card">
                    <p class="p1">${proArr[i].messageTitle}</p>
                    <p class="p2">${proArr[i].messageDetail}</p>
                    <div class="line"></div>
                    <p class="p3">￥ ${proArr[i].proMoney}</p>
                </div>
                <div id="show"></div>
            </li>
        `).appendTo($('#ulCard'));
    }
    $('li').hover(function () {
        $(this).css({
            top: '-10px',
            color: 'gold'
        });
    }, function () {
        $(this).css({
            top: '0px',
            color: '#000'
        });
    });
    // 点击下面左右按钮切换内容  未完善
    var sLeft = 0;
    $('#spL').click(function () {
        
        if(isClick ){
		isClick = false
		if ($('#ulCard').css('left') == '0px') {
            console.log(123);
        }else {
            sLeft += 1210;
            console.log(456);
            $('#ulCard').css({
                left: sLeft
            })
        }
		setTimeout(function() {
			isClick = true;
		}, 1000);
	}
    })
    $('#spR').click(function () {
        
        if(isClick ){
		isClick = false
		if (Number($('#ulCard').css('left').replace('px','')) < -7260) {
            console.log('sfhowih');
        }else {
            sLeft -= 1210;
            $('#ulCard').css('left', sLeft)
        }
		setTimeout(function() {
			isClick = true;
		}, 800);
	}
    })
}