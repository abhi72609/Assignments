let btn = document.querySelector('button');
let dice1 = document.querySelector('.dice1')
let dice2 = document.querySelector('.dice2')
let score  = document.querySelector('.score')
btn.addEventListener('click' , ()=>{
    let r1 = Math.round(Math.random()*5)+1
    let r2 = Math.round(Math.random()*5)+1
    console.log(r1);
    console.log(r2);
    dice1.src = `./imgs/d${r1}.png`
    dice2.src = `./imgs/d${r2}.png`
    score.innerHTML = r1+r2
    
})

