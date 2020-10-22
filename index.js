function load1(success) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("get", "http://localhost:3000/menu", true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            success(JSON.parse(xmlHttp.responseText));
        }
    }
}
var lis = document.querySelectorAll(".left-menu > li");
var childLi1 = document.querySelectorAll(".children-left li a img");
var childSpan1 = document.querySelectorAll(".children-left span");
var childrenLest = document.querySelectorAll(".left-menu-children");
lis[0].onmouseover = function (event) {
    childrenLest[0].style.visibility = "visible";
    lis[0].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu1.length; i++) {
            childLi1[i].src = date.leftmenu1[i].src;
            childSpan1[i].innerHTML = date.leftmenu1[i].text;
        }
    })
    event.stopPropagation();
}
lis[0].onmouseout = function (event) {
    childrenLest[0].style.visibility = "hidden";
    lis[0].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi2 = document.querySelectorAll(".img2");
var childSpan2 = document.querySelectorAll(".span2"); 
lis[1].onmouseover = function (event) {
    childrenLest[1].style.visibility = "visible";
    lis[1].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu2.length; i++) {
            childLi2[i].src = date.leftmenu2[i].src;
            childSpan2[i].innerHTML = date.leftmenu2[i].text;
        }
    })
    event.stopPropagation();
}
lis[1].onmouseout = function (event) {
    childrenLest[1].style.visibility = "hidden";
    lis[1].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi3 = document.querySelectorAll(".img3");
var childSpan3 = document.querySelectorAll(".span3"); 
lis[2].onmouseover = function (event) {
    childrenLest[2].style.visibility = "visible";
    lis[2].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu3.length; i++) {
            childLi3[i].src = date.leftmenu3[i].src;
            childSpan3[i].innerHTML = date.leftmenu3[i].text;
        }
    })
    event.stopPropagation();
}
lis[2].onmouseout = function (event) {
    childrenLest[2].style.visibility = "hidden";
    lis[2].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi4 = document.querySelectorAll(".img4");
var childSpan4 = document.querySelectorAll(".span4"); 
lis[3].onmouseover = function (event) {
    childrenLest[3].style.visibility = "visible";
    lis[3].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu4.length; i++) {
            childLi4[i].src = date.leftmenu4[i].src;
            childSpan4[i].innerHTML = date.leftmenu4[i].text;
        }
    })
    event.stopPropagation();
}
lis[3].onmouseout = function (event) {
    childrenLest[3].style.visibility = "hidden";
    lis[3].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi5 = document.querySelectorAll(".img5");
var childSpan5 = document.querySelectorAll(".span5");
lis[4].onmouseover = function (event) {
    childrenLest[4].style.visibility = "visible";
    lis[4].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu5.length; i++) {
            childLi5[i].src = date.leftmenu5[i].src;
            childSpan5[i].innerHTML = date.leftmenu5[i].text;
        }
    })
    event.stopPropagation();
}
lis[4].onmouseout = function (event) {
    childrenLest[4].style.visibility = "hidden";
    lis[4].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi6 = document.querySelectorAll(".img6");
var childSpan6 = document.querySelectorAll(".span6");
lis[5].onmouseover = function (event) {
    childrenLest[5].style.visibility = "visible";
    lis[5].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu6.length; i++) {
            childLi6[i].src = date.leftmenu6[i].src;
            childSpan6[i].innerHTML = date.leftmenu6[i].text;
        }
    })
    event.stopPropagation();
}
lis[5].onmouseout = function (event) {
    childrenLest[5].style.visibility = "hidden";
    lis[5].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi7 = document.querySelectorAll(".img7");
var childSpan7 = document.querySelectorAll(".span7");
lis[6].onmouseover = function (event) {
    childrenLest[6].style.visibility = "visible";
    lis[6].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu7.length; i++) {
            childLi7[i].src = date.leftmenu7[i].src;
            childSpan7[i].innerHTML = date.leftmenu7[i].text;
        }
    })
    event.stopPropagation();
}
lis[6].onmouseout = function (event) {
    childrenLest[6].style.visibility = "hidden";
    lis[6].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi8 = document.querySelectorAll(".img8");
var childSpan8 = document.querySelectorAll(".span8");
lis[7].onmouseover = function (event) {
    childrenLest[7].style.visibility = "visible";
    lis[7].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu8.length; i++) {
            childLi8[i].src = date.leftmenu8[i].src;
            childSpan8[i].innerHTML = date.leftmenu8[i].text;
        }
    })
    event.stopPropagation();
}
lis[7].onmouseout = function (event) {
    childrenLest[7].style.visibility = "hidden";
    lis[7].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi9 = document.querySelectorAll(".img9");
var childSpan9 = document.querySelectorAll(".span9");
lis[8].onmouseover = function (event) {
    childrenLest[8].style.visibility = "visible";
    lis[8].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu9.length; i++) {
            childLi9[i].src = date.leftmenu9[i].src;
            childSpan9[i].innerHTML = date.leftmenu9[i].text;
        }
    })
    event.stopPropagation();
}
lis[8].onmouseout = function (event) {
    childrenLest[8].style.visibility = "hidden";
    lis[8].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}
var childLi10 = document.querySelectorAll(".img10");
var childSpan10 = document.querySelectorAll(".span10");
lis[9].onmouseover = function (event) {
    childrenLest[9].style.visibility = "visible";
    lis[9].style.backgroundColor = "#ff6700";
    load1(function (date) {
        for (let i = 0; i < date.leftmenu10.length; i++) {
            childLi10[i].src = date.leftmenu10[i].src;
            childSpan10[i].innerHTML = date.leftmenu10[i].text;
        }
    })
    event.stopPropagation();
}
lis[9].onmouseout = function (event) {
    childrenLest[9].style.visibility = "hidden";
    lis[9].style.backgroundColor = "rgb(105,101,101)";
    event.stopPropagation();
}

