let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
let box4=document.getElementById('box4');
let box5=document.getElementById('box5');
let box6=document.getElementById('box6');
let box7=document.getElementById('box7');
let box8=document.getElementById('box8');
let box9=document.getElementById('box9');

let result=document.getElementById('result');
let value="x";

function option(para){
    if(para.textContent==''){

        para.textContent=value;
    if(value=='x'){
        value='o'
    }else{
        value='x'
    }
    } 
    Result();
}

function Result(){
  if(box1.textContent=='x' && box2.textContent=='x' && box3.textContent=='x' ||
   box4.textContent=='x' && box5.textContent=='x' && box6.textContent=='x'||
  box7.textContent=='x' && box8.textContent=='x' && box9.textContent=='x'||
  box1.textContent=='x' && box4.textContent=='x' && box7.textContent=='x' ||
  box2.textContent=='x' && box5.textContent=='x' && box8.textCFontent=='x' ||
  box3.textContent=='x' && box6.textContent=='x' && box9.textContent=='x' ||
  box1.textContent=='x' && box5.textContent=='x' && box9.textContent=='x' ||
  box3.textContent=='x' && box5.textContent=='x' && box7.textContent=='x' ){
result.innerHTML+='x'
result.style.display='block'

  }else if(box1.textContent=='o' && box2.textContent=='o' && box3.textContent=='o' ||
   box4.textContent=='o' && box5.textContent=='o' && box6.textContent=='o'||
  box7.textContent=='o' && box8.textContent=='o' && box9.textContent=='o'||
  box1.textContent=='o' && box4.textContent=='o' && box7.textContent=='o' ||
  box2.textContent=='o' && box5.textContent=='o' && box8.textContent=='o' ||
  box3.textContent=='o' && box6.textContent=='o' && box9.textContent=='o' ||
  box1.textContent=='o' && box5.textContent=='o' && box9.textContent=='o' ||
  box3.textContent=='o' && box5.textContent=='o' && box7.textContent=='o' ){
result.innerHTML+='o'
result.style.display='block'

        

    }
    else{
        if(box1.textContent!='' && box2.textContent!=''&& box3.textContent!='' &&
         box4.textContent!='' &&box5.textContent!='' &&box6.textContent!='' &&
        box7.textContent!='' &&box8.textContent!='' &&box9.textContent!='' ){
result.innerHTML+='match draw!'
result.style.display='block'
            
}
    }
}
function playgame(){
    let home=document.getElementById('home');
    let game=document.getElementById('game');

    home.style.display='none'
    game.style.display='block'
    game.style.display='flex'
}
function reload(){
    window.location.reload();
}
function restart(){
    box1.innerHTML='';
    box2.innerHTML='';
    box3.innerHTML='';
    box4.innerHTML='';
    box5.innerHTML='';
    box6.innerHTML='';
    box7.innerHTML='';
    box8.innerHTML='';
    box9.innerHTML='';

}

