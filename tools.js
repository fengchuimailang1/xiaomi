function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    };
};
/*
  参数：
    obj：要执行动画的对象
    attr：要执行动画的样式,比如：left top width height
    target：执行动画的目标位置
    speed：移动速度
    callback：回调函数，这个函数将会在动画执行完毕以后执行
*/
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    /*
      判断速度的正负值
      如果从0向800移动，则speed为正值
      如果从800向0移动，则为负值
    */
    var current = parseInt(getStyle(obj, attr));
    if (current > target) {
        speed = -speed;
    };
    // 向执行动画的对象中添加一个timer属性，用来保存他自己定时器的标识
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        /*
          判断newValue是否大于800
          向左移动时，需判断newValue是否小于target
          向右移动时，需判断newValue是否大于target
        */
        if ((speed > 0 && newValue > target) || (speed < 0 && newValue < target)) {
            newValue = target;
        };
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            // 动画执行完毕再执行
            callback && callback();
        };
    }, 30);
};

// 定义一个函数，用来想一个元素中添加指定的class属性值
/*
  参数：
  obj 要添加class属性的元素
  cn 要添加的class值
*/
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    };
};
/*
  判断一个元素中是否含有指定的class属性值
   如果有该class，则返回true，没有则返回false
*/
function hasClass(obj, cn) {
    // 判断obj中有没有cn class
    // 创建一个正则表达式
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
};
// 删除一个元素中的指定的class
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
};
/*
  toggleClass可以用来切换一个类
  如果元素中具有该类，则删除
  如果元素中没有该类，则添加
*/
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    };
};