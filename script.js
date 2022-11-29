let display= document.getElementById("display");

let buttons=Array.from(document.getElementsByClassName("button"));

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);


        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case'=':
                try{
                    display.innerText= eval(display.innerText);
                }catch{
                    display.innerText=alert("Only numbers are allowed");
                }
                break;
            default:
                display.innerText+=e.target.innerText
                break;
        }
    });
});

var number = ['1','2','3','4','5','6','7','8','9','0'];
var actions = ['+','-','/','*'];
    document.addEventListener('keydown', (event)=>{
            console.log(event);


        switch(event.key){
            case 'c':
                display.innerText='';
                break;
            case'Enter':
                try{
                    display.innerText= eval(display.innerText);
                }catch{
                    display.innerText=alert("Only numbers are allowed");
                }
                break;   
            default:
                if(number.includes(event.key) || actions.includes(event.key)){
                    display.innerText+=event.key;
                } 
                break;
        }   
    });

    