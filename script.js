
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Symbol {
   constructor(X , y ,fontSize , canvasHeight){
     
    this.characters ='هي سر حق طع ما نص لك';
    this.x=X;
    this.y = y;
    this.fontSize = fontSize;
    
    this.text = '';
    this.canvasHeight = canvasHeight;
    



}

   draw(context){

       this.text = this.characters.charAt(Math.floor(Math.random()*this.characters.length))
       context.fillStyle = '#0aff0a';
       context.fillText(this.text,this.x * this.fontSize, this.y * this.fontSize );
       if (this.y * this.fontSize > this.canvasHeight && Math.random()>0.9){
        this.y = 0 ;
       }
        else {
        this.y += 1;
       }
        
   }


 
}

class Effect {
    constructor(canvasWidth , canvasHeight){
         this.canvasWidth = canvasWidth;
         this.canvasHeight = canvasHeight;
         this.fontSize = 25;
         
         this.columns = this.canvasWidth/this.fontSize;
         this.symbols = [];
         this.#initialize();
         console.log(this.symbols);
    }
 
    #initialize(){
        for (let i = 0; i< this.columns ; i++){
              this.symbols [i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
 
    }

}

const effect = new Effect(canvas.width, canvas.height);

function animate(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
     ctx.font = effect.fontSize + 'px monospace';
     effect.symbols.forEach(symbol => symbol.draw(ctx));
     requestAnimationFrame(animate);

}
animate();








const runInput = document.querySelector('#run_input')
const line = 'Type Your Search Here....'
const speed = 100

let i = 0;
function run_line(){
    if(i++ < line.length){
        runInput.value = line.substring(0,i)
    }
else{
    runInput.value =" "
    i = 0
}
done= setTimeout('run_line()',speed  )

}
run_line()



var
myInp=document
myInp = document.getElementById( '#my-input' ),
customAttr = myInp.getAttribute( 'placeholder' );

myInp.addEventListener( 'focus', function () {

if ( this.hasAttribute( 'placeholder' ) ) {

    this.removeAttribute( 'placeholder' )

} else {
    this.addEventListener( 'blur', function () {

        this.setAttribute( 'placeholder', customAttr );

    } );
}

} );



