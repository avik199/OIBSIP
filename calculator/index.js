let screen= document.getElementById('screen');
buttons=document.querySelectorAll('button');
let scrval='';
for(i of buttons){
    i.addEventListener('click',(x)=>{
        buttonText=x.target.innerText;
        console.log(buttonText);
        if (buttonText=='C'){
            scrval='';
            screen.value='';
        }
        else if (buttonText=='='){
            screen.value=eval(scrval);
        }
        else{
            scrval+=buttonText;
            screen.value=scrval;    
        }

    })
}