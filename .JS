




window.addEventListener('DOMContentLoaded', function () {

let checkVibrate = window.navigator && window.navigator.vibrate;

function vibrate() {
if (checkVibrate && vibrating === true) { 
    navigator.vibrate(500);
}
else {
}
}
var first = "";
var second = "";
var operator = " ";
var operating = 0;
var answer = 0;
var e = 0;
var vibrating = false;
var number = document.getElementById("screen");
//number.innerText = answer;
function begin(x) {
vibrate();
//playAudio();
if (operating == 0) {
first += x;
number.innerText = `${first}`;
} else if (e == 1) {
for (i = x; i > 0; i--) {
    first *= 10;
}
e = 0;
operating = 0;
number.innerText = `${first}`;
} else {
second += x;
number.innerText = `${second}`;
}
}

function operate(y) {
vibrate();
//playAudio();
if (operator = !"") {
operator = y;
operating = 1;
//number.innerText = y;
} else {
equal();
}
}

function equal() {
vibrate();
//playAudio();
switch (operator) {
case '+':
    answer = first * 1 + second * 1;
    break;
case '-':
    answer = first * 1 - second * 1;
    break;
case '*':
    answer = first * 1 * second * 1;
    break;
case '/':
    answer = first * 1 / second * 1;
    break;
case '%':
    answer = first * 1 % second * 1;
default:
}
number.innerText = `${answer}`;
first = answer;
second = "";
operator = "";
}

function strange(z) {
vibrate();
//playAudio();
switch (z) {
case 'AC':
    first = "";
    second = "";
    operator = " ";
    operating = 0;
    answer = 0;
    number.innerText = "0";
    break;
case '+-':
    if (second == "") {
    first *= -1;
    number.innerText = `${first}`;
    } else {
    second *= -1;
    number.innerText = `${second}`;
    }
    break;
case 'e':
    e = 1;
    operating = 1;
    break;
case '!':
    if (second == "") {
    for (i = first; i > 1; i--) {
        first *= i - 1;
    }
    number.innerText = `${first}`;
    } else {
    for (i = second; i > 1; i--) {
        second *= i - 1;
    }
    number.innerText = `${second}`;
    }
    break;
case '*2':
    if (second == "") {
    first *= first;
    number.innerText = `${first}`;
    } else {
    second *= second;
    number.innerText = `${second}`;
    }
    break;
}
}

function playAudio() {
clickEffect.play();
}



function toggle(button) {
    if(button.value=="OFF"&&checkVibrate) {
        button.value="ON"
        vibrating = true;
        vibrate();
        nob.style.left = "52px";
    document.documentElement.style.cssText = ` --switch-color: rgba(0, 256, 0, .4);`;
    } else if(button.value=="ON") {
        button.value="OFF"
        vibrating = false;
        vibrate();
        nob.style.left = "-52px";
    document.documentElement.style.cssText = ` --switch-color: rgba(256, 0, 0, .4);`;
    }
    else if(!checkVibrate){
        showToast();
    }
}

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom',
  showConfirmButton: false,
  showClass: {
    popup: 'animated bounce'
  },
  hideClass: {
    popup: 'animated flipOutY'
  }
})


function showToast(){
    Toast.fire({
  icon: 'error',
  title: 'Vibrate not supported'
})
}
document.getElementById('toggle').addEventListener('click', function() {
 toggle(this); }
);

    document.getElementById('AC').addEventListener('click', function () {
    strange('AC');
    }, false);
    document.getElementById('plusminus').addEventListener('click', function () {
    strange('+-');
    }, false);
    document.getElementById('modulus').addEventListener('click', function () {
    strange('%');
    }, false);
    document.getElementById('divide').addEventListener('click', function () {
    operate('/');
    }, false);
    document.getElementById('recursive').addEventListener('click', function () {
    strange('!');
    }, false);
    document.getElementById('exponet').addEventListener('click', function () {
    strange('e');
    }, false);
    document.getElementById('square').addEventListener('click', function () {
    strange('*2');
    }, false);
    document.getElementById('multiply').addEventListener('click', function () {
    operate('*');
    }, false);
    document.getElementById('seven').addEventListener('click', function () {
    begin(7);
    }, false);
    document.getElementById('eight').addEventListener('click', function () {
    begin(8);
    }, false);
    document.getElementById('nine').addEventListener('click', function () {
    begin(9);
    }, false);
    document.getElementById('minus').addEventListener('click', function () {
    operate('-');
    }, false);
    document.getElementById('four').addEventListener('click', function () {
    begin(4);
    }, false);
    document.getElementById('five').addEventListener('click', function () {
    begin(5);
    }, false);
    document.getElementById('six').addEventListener('click', function () {
    begin(6);
    }, false);
    document.getElementById('plus').addEventListener('click', function () {
    operate('+');
    }, false);
    document.getElementById('one').addEventListener('click', function () {
    begin(1);
    }, false);
    document.getElementById('two').addEventListener('click', function () {
    begin(2);
    }, false);
    document.getElementById('three').addEventListener('click', function () {
    begin(3);
    }, false);
    document.getElementById('doublezero').addEventListener('click', function () {
    begin('00');
    }, false);
    document.getElementById('zero').addEventListener('click', function () {
    begin(0);
    }, false);
    document.getElementById('dot').addEventListener('click', function () {
    begin('.');
    }, false);
    document.getElementById('equal').addEventListener('click', function () {
    equal();
    }, false);
    document.getElementById('vibrate').addEventListener('click', function () {
    toggle(this);
    }, false);

    let listItems = document.querySelectorAll(".button");
    for (let i=0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', playAudio);
    }
});
