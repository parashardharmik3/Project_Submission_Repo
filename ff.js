var btn = document.querySelector("button");
var b = 0;
var bdy = document.querySelector("body");
btn.addEventListener('click',()=>{
    if(b%2==0){
        bdy.style.background='white';
    }
    else{
        bdy.style.background='black';
    }
    b++;
    console.log(b)
})