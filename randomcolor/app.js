// setInterval( 
    function randome(){
    var x = Math.floor((Math.random())*256);
    var y = Math.floor((Math.random())*256);
    var z = Math.floor((Math.random())*256);
    var Bicolor = "rgb("+x+","+ y +"," + z+")";

document.body.style.backgroundColor = Bicolor;

  console.log(Bicolor);
 

 

 
}
// , 1000 );
 