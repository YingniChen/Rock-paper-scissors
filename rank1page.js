//回到主页面
function back() {
    return window.location.href = "mainpage.html";
}

//初始值为0，把石头剪刀布输出成123，3种状态再与系统输出作对比
var choose = 0;

function Scissors() {
    return choose = 1;
}

function paper() {
    return choose = 2;
}

function rock() {
    return choose = 3;
}

// //展示用户的选择
// function show() {
//     Scissors(this);
//     paper(this);
//     rock(this);
//     document.querySelector('#picture').src = this.result;
// }

function program() {
    var a = 0;
    //设u为玩家分数
    let u = document.getElementById('userscore')[0];
    //设p为系统分数
    a = Math.floor(Math.random() * (3 - 1)) + 1;
    if (a == choose) {
        p.innerHTML = "0";
    }
    if (a - choose == 1) {
        p.innerHTML = "1"
    }
}