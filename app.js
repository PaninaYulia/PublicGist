let btc = document.querySelector('.btc');
let backs = document.querySelector('.backs');
let resultat = document.querySelector('.result');

let button = document.querySelector('button');
button.onclick = function (){
    let x = +btc.value;
    let y = +backs.value;
    let q = y / x;
    console.log(q);
    resultat.innerHTML = q;
}
