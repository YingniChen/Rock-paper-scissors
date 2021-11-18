//返回功能
function back() {
    return window.history.back(-1);
}

//进入游戏页面
function start() {
    var name = prompt("Please enter your user name", " ");
    if (name != null) {
        return window.location.href = "rank1page.html";
    } else {
        alert("What's your name?");
    }
}