//退出功能
function Exit() {
    return window.close();
}

//进入介绍页面
function Intro() {
    return window.location.href = "intro.html";
}

//进入游戏页面
function Play() {
    var name = prompt("Please enter your user name", " ");
    if (name != null) {
        return window.location.href = "rank1page.html";
    } else {
        alert("What's your name?");
    }
}