function add() {
let e = document.querySelector('#first').value;
let f = document.querySelector('#second').value;
let addition = parseFloat(e) + parseFloat(f);

    console.log(addition);
    let g = document.querySelector('span');
     console.log(g);
     g.innerHTML = addition;
}
function sub() {
let h = document.querySelector('#first').value;
let i = document.querySelector('#second').value;
let subtraction = parseFloat(h) - parseFloat(i);

    console.log(subtraction);
    let j = document.querySelector('span');
     console.log(j);
     j.innerHTML = subtraction;
}
function multiply() {
let k = document.querySelector('#first').value;
let l = document.querySelector('#second').value;
let multiplication = parseFloat(k) * parseFloat(l);

    console.log(multiplication);
    let m = document.querySelector('span');
     console.log(m);
     m.innerHTML = multiplication;
}
function divide() {
let n = document.querySelector('#first').value;
let o = document.querySelector('#second').value;
let division = parseFloat(n) / parseFloat(o);

    console.log(division);
    let p = document.querySelector('span');
     console.log(p);
     p.innerHTML = division;
}