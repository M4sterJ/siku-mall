/*
	事件监听器

	addEventListener()
	removeEventListener()

	IE下
	attachEvent()
	detachEvent()

 */

function addEvent(obj, eventType, func) {
  if (obj.addEventListener) {
    obj.addEventListener(eventType, func, false);
  } else {
    obj.attachEvent("on" + eventType, func);
  }
}

function removeEvent(obj, eventType, func) {
  if (obj.removeEventListener) {
    obj.removeEventListener(eventType, func);
  } else {
    obj.detachEvent("on" + eventType, func);
  }
}

function preDef(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

function drag(node) {
  var offsetX = 0;
  var offsetY = 0; //用于记录相对距离
  //1、按下
  node.onmousedown = function (ev) {
    var e = ev || window.event;
    offsetX = e.clientX - this.offsetLeft;
    offsetY = e.clientY - this.offsetTop;

    //2、移动
    document.onmousemove = function (ev) {
      var e = ev || window.event;
      node.style.left = e.clientX - offsetX + "px";
      node.style.top = e.clientY - offsetY + "px";
    };
    //3、抬起
    document.onmouseup = function () {
      document.onmousemove = null;
    };
  };
}

/*
	事件冒泡的浏览器兼容写法

	参数 e 是事件对象
 */
function stopBubble(e) {
  if (e.cancelBubble) {
    e.cancelBubble = true;
  } else {
    e.stopPropagation();
  }
}
// 随机颜色
function randomColor() {
  var str =
    "rgba(" +
    parseInt(Math.random() * 256) +
    "," +
    parseInt(Math.random() * 256) +
    "," +
    parseInt(Math.random() * 256) +
    ",1)";
  // "rgba(255,255,255,1)"  [0,1)

  return str;
}

//忽略空白节点
function removeSpaceNode(nodes) {
  var res = []; //用于存储不空的节点
  for (var i = 0; i < nodes.length; i++) {
    if (!(nodes[i].nodeType == 3 && /^\s+$/gi.test(nodes[i].nodeValue))) {
      res.push(nodes[i]);
    }
  }
  return res;
}

//封装querry 方法 实现浏览器兼容
function $(str) {
  //直接判断首字母
  switch (str[0]) {
    case "#":
      return document.getElementById(str.substring(1));
      break;
    case ".":
      return elementsByClassName(document, str.substring(1));
      break;
    case "[":
      return document.getElementsByName(str.substring(6, str.length - 1));
      break;
    default:
      return document.getElementsByTagName(str);
      break;
  }
}

// 浏览器兼容写法
function getStyle(node, styleType) {
  return node.currentStyle
    ? node.currentStyle[styleType]
    : getComputedStyle(node)[styleType];
}

//兼容IE8以下，获取className节点的元素。
function elementsByClassName(node, className) {
  var res = [];
  //1、查找node所有的子节点
  var nodes = node.getElementsByTagName("*");
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].className == className) {
      res.push(nodes[i]);
    }
  }
  return res;
}

function BubbleSort(arr) {
  //决定比较几轮
  for (var i = 0; i < arr.length - 1; i++) {
    //决定每一轮比较多少次
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

function changeSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    //次数
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}

function norepeat(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
}

//自定展示当前时间
function showTime() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();

  var week = d.getDay();
  //将数字转成中文
  week = chineseFromNum(week);

  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  return (
    year +
    "年" +
    month +
    "月" +
    date +
    "日 星期" +
    week +
    " " +
    doubleNum(hour) +
    ":" +
    doubleNum(min) +
    ":" +
    doubleNum(sec)
  );
}

//单位数变双位数
function doubleNum(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

//将数字转成中文的函数
function chineseFromNum(num) {
  switch (num) {
    case 0:
      return "日";
      break;
    case 1:
      return "一";
      break;
    case 2:
      return "二";
      break;
    case 3:
      return "三";
      break;
    case 4:
      return "四";
      break;
    case 5:
      return "五";
      break;
    case 6:
      return "六";
      break;
  }
}

// 验证码1
//获取范围内随机数的方法
function randomNum(start, end) {
  return parseInt(Math.random() * (end - start + 1) + start);
}
// console.log(randomNum(2,5));
//获取N位数的验证码
function randomCode(n) {
  var codeStr = "";

  for (var i = 0; i < n; i++) {
    var num = randomNum(1, 3);
    var numStr = randomNum(48, 57);
    var lowEn = randomNum(97, 122);
    var upEn = randomNum(65, 90);
    codeStr +=
      num == 1
        ? String.fromCharCode(numStr)
        : num == 2
        ? String.fromCharCode(lowEn)
        : String.fromCharCode(upEn);
  }
  return codeStr;
}
// console.log(randomCode(6));

//验证码2
// 随机既有数字又有字母的验证码
// 				0-9   48-57
// 				a-z   97-122
// 				A-Z   65-90

// 				想个办法：随机0-99的整数
// 					0-9 数字
// 					65-90 转成大写字母
// 					17-42 + 80 转成小写字母
//

function testCodeWithStr(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    var num = parseInt(Math.random() * 100);
    if (num >= 0 && num <= 9) {
      arr.push(num);
    } else if (num >= 65 && num <= 90) {
      var str = String.fromCharCode(num);
      arr.push(str);
    } else if (num >= 17 && num <= 42) {
      var str = String.fromCharCode(num + 80);
      arr.push(str);
    } else {
      //随机出来没有用的数字，i--让他多循环一次。
      i--;
    }
  }
  return arr.join("");
}

//跨浏览器获取视口大小
function getInner() {
  if (typeof window.innerWidth != "undefined") {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };
  }
}
//获取浏览器滚动的距离
function getScroll() {
  return {
    top: document.documentElement.scrollTop || document.body.scrollTop,
    left: document.documentElement.scrollLeft || document.body.scrollLeft,
  };
}
// console.log(getScroll().top);
